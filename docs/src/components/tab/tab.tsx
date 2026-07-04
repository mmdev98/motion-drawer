import { Tab as HeadlessTab, TabProps } from "@headlessui/react";
import { cn } from "@/lib/utils/cn";
import { SwiperSlide } from "swiper/react";
import { motion } from "motion/react";
import { useTabContext } from "./context";
import { cva } from "cva";

const tab = cva({
  base: cn(
    "relative !w-auto transition-all duration-300",
    "!flex gap-2 justify-center items-center",
    "px-4 py-3 text-sm/5",
    "text-fg-muted data-[selected]:text-fg",
    "cursor-pointer",
    "[&>*[data-slot$=icon]]:size-5",
    "data-disabled:text-fg-disabled data-disabled:cursor-not-allowed"
  ),
  variants: {
    variant: {
      highlight: "py-1",
      underline: "",
      none: ""
    },
    selected: {
      true: "",
      false: "z-10"
    }
  },
  compoundVariants: [
    {
      variant: "highlight",
      selected: false,
      className: "text-fg-muted"
    }
  ]
});

const tabIndicator = cva({
  base: "absolute bottom-0 inset-x-0 h-0.5 bg-fg-muted rounded-lg",
  variants: {
    variant: {
      highlight: "bg-bg-100 h-full z-[-1]",
      underline: "",
      none: "h-[0px] bg-[transparent]"
    }
  }
});

type Props = TabProps<"div"> & {
  ref?: React.Ref<HTMLDivElement>;
};

export function Tab(props: Props) {
  const { className, children, ...otherProps } = props;
  const { id, variant } = useTabContext();

  return (
    <HeadlessTab
      as={SwiperSlide}
      // @ts-expect-error can not infer
      tag="div"
      className={(bag) =>
        cn(
          variant !== "none" &&
            tab({
              variant,
              selected: bag.selected
            }),
          typeof className === "function" ? className(bag) : className
        )
      }
      {...otherProps}
    >
      {(bag) => {
        return (
          <>
            {typeof children === "function" ? children(bag) : children}
            {variant !== "none" && bag.selected && (
              <motion.div
                className={cn(
                  tabIndicator({
                    variant
                  })
                )}
                layoutId={id}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20
                }}
              />
            )}
          </>
        );
      }}
    </HeadlessTab>
  );
}

Tab.displayName = SwiperSlide.displayName;
