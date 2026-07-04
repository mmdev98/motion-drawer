import {
  TabPanel as HeadlessTabPanel,
  TabPanelProps as HeadlessPanelProps,
} from "@headlessui/react";
import { ElementType, Fragment, Ref } from "react";
import { cn } from "@/lib/utils/cn";

const DEFAULT_PANEL_TAG = "div";

export type TabPanelProps<TTag extends ElementType = typeof DEFAULT_PANEL_TAG> =
  HeadlessPanelProps<TTag> & {
    ref?: Ref<HTMLElement>;
  };

export function Panel<TTag extends ElementType = typeof DEFAULT_PANEL_TAG>(
  props: TabPanelProps<TTag>,
) {
  const {
    ref,
    className,
    as = DEFAULT_PANEL_TAG,
    ...otherProps
  } = props as TabPanelProps<typeof DEFAULT_PANEL_TAG>;

  if ((as as any) === Fragment) {
    return <HeadlessTabPanel as={as} static ref={ref} {...otherProps} />;
  }

  return (
    <HeadlessTabPanel
      as={as}
      static
      ref={ref}
      className={cn("w-full", className)}
      {...otherProps}
    />
  );
}
