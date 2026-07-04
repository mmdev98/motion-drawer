import {
  TabPanels as HeadlessTabPanels,
  TabPanelsProps as HeadlessTabPanelsProps,
} from "@headlessui/react";
import { ElementType, ReactNode, Ref } from "react";
import { cn } from "@/lib/utils/cn";
import { AnimatePresence, motion } from "motion/react";
import { useTabContext } from "./context";
import { usePrevious } from "@/hooks/use-previous";
import { ConditionRender } from "@/components/condition-render";

const DEFAULT_PANEL_TAG = "div";

export type TabPanelsProps<
  TTag extends ElementType = typeof DEFAULT_PANEL_TAG,
> = HeadlessTabPanelsProps<TTag> & {
  ref?: Ref<HTMLElement>;
  /**
   * If true, can swipe panel and navigate between tabs.
   */
  swipeable?: boolean;
};

export function Panels<TTag extends ElementType = typeof DEFAULT_PANEL_TAG>(
  props: TabPanelsProps<TTag>,
) {
  const {
    as = DEFAULT_PANEL_TAG,
    className,
    children,
    swipeable,
    ...otherProps
  } = props as TabPanelsProps<"div">;

  const { selectedIndex, onChange } = useTabContext();
  const prevSelectedIndex = usePrevious(selectedIndex);
  const swipeDirection = selectedIndex > (prevSelectedIndex || 0);

  return (
    <HeadlessTabPanels
      as={as}
      className={(bag) =>
        cn(
          "translate-y-[0px] overflow-hidden",
          typeof className === "function" ? className(bag) : className,
        )
      }
      {...otherProps}
    >
      {(bag) => {
        const resolvedChildren =
          typeof children === "function" ? children(bag) : children;

        const resolvedChildrenArray = (
          Array.isArray(resolvedChildren)
            ? resolvedChildren
            : [resolvedChildren]
        ) as ReactNode[];

        return (
          <AnimatePresence
            initial={false}
            mode="popLayout"
            custom={swipeDirection}
          >
            <ConditionRender
              key={selectedIndex}
              if={!!swipeable}
              then={(props) => (
                <motion.div
                  custom={swipeDirection}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  variants={variants}
                  drag="x"
                  dragConstraints={{
                    left: 0,
                    right: 0,
                  }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipeConfidenceThreshold = 10000;

                    const swipePower = (offset: number, velocity: number) => {
                      return Math.abs(offset) * velocity;
                    };

                    const swipe = swipePower(offset.x, velocity.x);

                    if (swipe > swipeConfidenceThreshold) {
                      if (selectedIndex > 0) onChange(selectedIndex - 1);
                    } else if (swipe < -swipeConfidenceThreshold) {
                      if (selectedIndex < resolvedChildrenArray.length - 1)
                        onChange(selectedIndex + 1);
                    }
                  }}
                  className="w-full"
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 22,
                  }}
                  style={{ touchAction: "none" }}
                  {...props}
                />
              )}
              else={(props) => (
                <motion.div
                  custom={swipeDirection}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  variants={variants}
                  className="w-full"
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 22,
                  }}
                  {...props}
                />
              )}
            >
              {(() => {
                if (selectedIndex >= resolvedChildrenArray.length) return null;
                return resolvedChildrenArray[selectedIndex];
              })()}
            </ConditionRender>
          </AnimatePresence>
        );
      }}
    </HeadlessTabPanels>
  );
}

const variants = {
  enter: (direction: boolean) => {
    return {
      x: direction ? "100%" : "-100%",
      opacity: 0,
    };
  },
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: boolean) => {
    return {
      x: direction ? "-100%" : "100%",
      opacity: 0,
    };
  },
};
