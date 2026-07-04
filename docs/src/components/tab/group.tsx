import {
  TabGroup as HeadlessTabGroup,
  TabGroupProps as HeadlessGroupProps,
} from "@headlessui/react";
import { ElementType, Fragment, Ref, useId } from "react";
import { cn } from "@/lib/utils/cn";
import { TabContext } from "./context";
import { useControllable } from "@/hooks/use-controllable";
import { TabVariant } from "@/components/tab/types";

const DEFAULT_TABS_TAG = "div";

export type TabGroupProps<TTag extends ElementType = typeof DEFAULT_TABS_TAG> =
  HeadlessGroupProps<TTag> & {
    ref?: Ref<HTMLElement>;
    /**
     * Tab variant
     */
    variant?: TabVariant;
  };

export function Group<TTag extends ElementType = typeof DEFAULT_TABS_TAG>(
  props: TabGroupProps<TTag>,
) {
  const {
    ref,
    className,
    selectedIndex,
    defaultIndex = 0,
    onChange,
    as = DEFAULT_TABS_TAG,
    variant = "underline",
    ...otherProps
  } = props as TabGroupProps<"div">;

  const [selected, setSelected] = useControllable(
    selectedIndex,
    onChange,
    defaultIndex,
  );

  const id = useId();

  return (
    <TabContext.Provider
      value={{
        id,
        selectedIndex: selected,
        onChange: setSelected,
        variant,
      }}
    >
      {(() => {
        if ((as as any) === Fragment) {
          return (
            <HeadlessTabGroup
              as={as}
              ref={ref as Ref<HTMLDivElement>}
              selectedIndex={selected}
              onChange={setSelected}
              {...otherProps}
            />
          );
        }

        return (
          <HeadlessTabGroup
            as={as}
            ref={ref as Ref<HTMLDivElement>}
            className={cn("flex flex-col", className)}
            selectedIndex={selected}
            onChange={setSelected}
            {...otherProps}
          />
        );
      })()}
    </TabContext.Provider>
  );
}
