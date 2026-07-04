"use client";

import {
  Button as HeadlessButton,
  ButtonProps as HeadlessButtonProps,
} from "@headlessui/react";
import { ElementType, Ref } from "react";
import { cn } from "@/lib/utils/cn";
import { cva, VariantProps } from "cva";
import { press, animate } from "motion/react";
import { useSyncRefs } from "@/hooks/use-sync-refs";

const button = cva({
  base: cn(
    "relative flex justify-center items-center rounded-xl",
    "transition-colors select-none",
    "data-[focus]:ring-2 focus:ring-offset-2",
  ),
  variants: {
    variant: {
      filled: "",
      filledTonal: "",
      outlined:
        "after:absolute after:inset-0 after:border after:pointer-events-none after:rounded-xl",
      plain: "focus:ring-offset-0",
    },
    color: {
      primary: "",
      secondary: "",
      error: "",
      warning: "",
      success: "",
      info: "",
    },
    size: {
      sm: cn(
        "px-2 py-1 text-sm/5 sm:text-xs/4 gap-1.5 [&>*[data-slot$=icon]]:size-5 sm:[&>*[data-slot$=icon]]:size-4 [&:has([data-slot=icon])]:px-1 [&>*[data-slot=dropdown-icon]]:size-3.5 [&>*[data-slot$=icon]]:stroke-[1.5px]",
      ),
      md: cn(
        "px-3 py-2 text-base/6 sm:text-sm/5 gap-2 [&:has([data-slot=icon])]:px-2 [&>*[data-slot=dropdown-icon]]:size-4 [&>*[data-slot$=icon]]:size-6 sm:[&>*[data-slot$=icon]]:size-5 [&>*[data-slot$=icon]]:stroke-[1.5px]",
      ),
    },
    disabled: {
      true: "cursor-not-allowed",
      false: "",
    },
  },
  compoundVariants: [
    // -----------------------------------------------------------------------------------------------------------------
    {
      variant: "filled",
      color: "primary",
      disabled: false,
      className:
        "bg-primary text-primary-fg [&_div[data-slot=loading]]:text-primary-fg [&_*[data-slot=dropdown-icon]]:text-primary-fg-muted",
    },
    {
      variant: "filled",
      color: "primary",
      disabled: true,
      className:
        "bg-primary/60 text-primary-fg-disabled [&_div[data-slot=loading]]:text-primary-fg cursor-not-allowed [&_*[data-slot=dropdown-icon]]:text-primary-fg-disabled",
    },
    {
      variant: "filled",
      color: "secondary",
      disabled: false,
      className:
        "bg-secondary text-secondary-fg [&_div[data-slot=loading]]:text-secondary-fg [&_*[data-slot=dropdown-icon]]:text-secondary-fg-muted",
    },
    {
      variant: "filled",
      color: "secondary",
      disabled: true,
      className:
        "bg-secondary/60 text-secondary-fg-disabled [&_div[data-slot=loading]]:text-secondary-fg cursor-not-allowed [&_*[data-slot=dropdown-icon]]:text-secondary-fg-disabled",
    },
    {
      variant: "filled",
      color: "error",
      disabled: false,
      className:
        "bg-error text-error-fg [&_div[data-slot=loading]]:text-error-fg [&_*[data-slot=dropdown-icon]]:text-error-fg-muted",
    },
    {
      variant: "filled",
      color: "error",
      disabled: true,
      className:
        "bg-error/60 text-error-fg-disabled [&_div[data-slot=loading]]:text-error-fg cursor-not-allowed [&_*[data-slot=dropdown-icon]]:text-error-fg-disabled",
    },
    {
      variant: "filled",
      color: "warning",
      disabled: false,
      className:
        "bg-warning text-warning-fg [&_div[data-slot=loading]]:text-warning-fg [&_*[data-slot=dropdown-icon]]:text-warning-fg-muted",
    },
    {
      variant: "filled",
      color: "warning",
      disabled: true,
      className:
        "bg-warning/60 text-warning-fg-disabled [&_div[data-slot=loading]]:text-warning-fg cursor-not-allowed [&_*[data-slot=dropdown-icon]]:text-warning-fg-disabled",
    },
    {
      variant: "filled",
      color: "success",
      disabled: false,
      className:
        "bg-success text-success-fg [&_div[data-slot=loading]]:text-success-fg [&_*[data-slot=dropdown-icon]]:text-success-fg-muted",
    },
    {
      variant: "filled",
      color: "success",
      disabled: true,
      className:
        "bg-success/60 text-success-fg-disabled [&_div[data-slot=loading]]:text-success-fg cursor-not-allowed [&_*[data-slot=dropdown-icon]]:text-success-fg-disabled",
    },
    {
      variant: "filled",
      color: "info",
      disabled: false,
      className:
        "bg-info text-info-fg [&_div[data-slot=loading]]:text-info-fg [&_*[data-slot=dropdown-icon]]:text-info-fg-muted",
    },
    {
      variant: "filled",
      color: "info",
      disabled: true,
      className:
        "bg-info/60 text-info-fg-disabled [&_div[data-slot=loading]]:text-info-fg cursor-not-allowed [&_*[data-slot=dropdown-icon]]:text-info-fg-disabled",
    },
    // -----------------------------------------------------------------------------------------------------------------
    {
      variant: "outlined",
      color: "primary",
      disabled: false,
      className:
        "text-primary after:border-primary [&_div[data-slot=loading]]:text-primary [&_*[data-slot=dropdown-icon]]:text-primary",
    },
    {
      variant: "outlined",
      color: "primary",
      disabled: true,
      className:
        "text-primary/60 after:border-primary/60 [&_div[data-slot=loading]]:text-primary [&_*[data-slot=dropdown-icon]]:text-primary/60",
    },
    {
      variant: "outlined",
      color: "secondary",
      disabled: false,
      className:
        "text-fg bg-bg dark:bg-black/25 after:border-border [&_div[data-slot=loading]]:text-fg [&_*[data-slot=dropdown-icon]]:text-fg",
    },
    {
      variant: "outlined",
      color: "secondary",
      disabled: true,
      className:
        "text-fg-disabled after:border-border/50 [&_div[data-slot=loading]]:text-fg-disabled [&_*[data-slot=dropdown-icon]]:text-fg-disabled",
    },
    {
      variant: "outlined",
      color: "error",
      disabled: false,
      className:
        "text-error after:border-error [&_div[data-slot=loading]]:text-error [&_*[data-slot=dropdown-icon]]:text-error/60",
    },
    {
      variant: "outlined",
      color: "error",
      disabled: true,
      className:
        "text-error/60 after:border-error/60 [&_div[data-slot=loading]]:text-error [&_*[data-slot=dropdown-icon]]:text-error/60",
    },
    {
      variant: "outlined",
      color: "warning",
      disabled: false,
      className:
        "text-warning after:border-warning [&_div[data-slot=loading]]:text-warning [&_*[data-slot=dropdown-icon]]:text-warning/60",
    },
    {
      variant: "outlined",
      color: "warning",
      disabled: true,
      className:
        "text-warning/60 after:border-warning/60 [&_div[data-slot=loading]]:text-warning [&_*[data-slot=dropdown-icon]]:text-warning/60",
    },
    {
      variant: "outlined",
      color: "success",
      disabled: false,
      className:
        "text-success after:border-success [&_div[data-slot=loading]]:text-success [&_*[data-slot=dropdown-icon]]:text-success/60",
    },
    {
      variant: "outlined",
      color: "success",
      disabled: true,
      className:
        "text-success/60 after:border-success/60 [&_div[data-slot=loading]]:text-success [&_*[data-slot=dropdown-icon]]:text-success/60",
    },
    {
      variant: "outlined",
      color: "info",
      disabled: true,
      className:
        "text-info/60 after:border-info/60 [&_div[data-slot=loading]]:text-info [&_*[data-slot=dropdown-icon]]:text-info/60",
    },
    {
      variant: "outlined",
      color: "info",
      disabled: false,
      className:
        "text-info after:border-info [&_div[data-slot=loading]]:text-info [&_*[data-slot=dropdown-icon]]:text-info",
    },
    // -----------------------------------------------------------------------------------------------------------------
    {
      variant: "plain",
      color: "primary",
      disabled: false,
      className:
        "text-primary [&_div[data-slot=loading]]:text-primary [&_*[data-slot=dropdown-icon]]:text-primary/60",
    },
    {
      variant: "plain",
      color: "primary",
      disabled: true,
      className:
        "text-primary/60 [&_div[data-slot=loading]]:text-primary cursor-not-allowed [&_*[data-slot=dropdown-icon]]:text-primary/60",
    },
    {
      variant: "plain",
      color: "secondary",
      disabled: false,
      className:
        "text-fg [&_div[data-slot=loading]]:text-fg [&_*[data-slot=dropdown-icon]]:text-fg-muted",
    },
    {
      variant: "plain",
      color: "secondary",
      disabled: true,
      className:
        "text-fg-disabled [&_div[data-slot=loading]]:text-fg cursor-not-allowed [&_*[data-slot=dropdown-icon]]:text-fg-disabled",
    },
    {
      variant: "plain",
      color: "error",
      disabled: false,
      className:
        "text-error [&_div[data-slot=loading]]:text-error [&_*[data-slot=dropdown-icon]]:text-error/60",
    },
    {
      variant: "plain",
      color: "error",
      disabled: true,
      className:
        "text-error/60 [&_div[data-slot=loading]]:text-error cursor-not-allowed [&_*[data-slot=dropdown-icon]]:text-error/60",
    },
    {
      variant: "plain",
      color: "warning",
      disabled: false,
      className:
        "text-warning [&_div[data-slot=loading]]:text-warning [&_*[data-slot=dropdown-icon]]:text-warning/60",
    },
    {
      variant: "plain",
      color: "warning",
      disabled: true,
      className:
        "text-warning/60 [&_div[data-slot=loading]]:text-warning cursor-not-allowed [&_*[data-slot=dropdown-icon]]:text-warning/60",
    },
    {
      variant: "plain",
      color: "success",
      disabled: false,
      className:
        "text-success [&_div[data-slot=loading]]:text-success [&_*[data-slot=dropdown-icon]]:text-success/60",
    },
    {
      variant: "plain",
      color: "success",
      disabled: true,
      className:
        "text-success/60 [&_div[data-slot=loading]]:text-success cursor-not-allowed [&_*[data-slot=dropdown-icon]]:text-success/60",
    },
    {
      variant: "plain",
      color: "info",
      disabled: false,
      className:
        "text-info [&_div[data-slot=loading]]:text-info [&_*[data-slot=dropdown-icon]]:text-info/60",
    },
    {
      variant: "plain",
      color: "info",
      disabled: true,
      className:
        "text-info/60 [&_div[data-slot=loading]]:text-info cursor-not-allowed [&_*[data-slot=dropdown-icon]]:text-info/60",
    },
  ],
  defaultVariants: {
    variant: "filled",
    color: "primary",
    size: "md",
    disabled: false,
  },
});

type DEFAULT_BUTTON_TAG = "button";

export type ButtonProps<TTag extends ElementType = DEFAULT_BUTTON_TAG> =
  HeadlessButtonProps<TTag> &
    VariantProps<typeof button> & {
      ref?: Ref<HTMLElement>;
    };

function Button<TTag extends ElementType = DEFAULT_BUTTON_TAG>(
  props: ButtonProps<TTag>,
) {
  const {
    ref,
    variant,
    color,
    size,
    disabled,
    className,
    type = "button",
    ...otherProps
  } = props as ButtonProps<"button">;

  return (
    <HeadlessButton
      data-slot="button"
      ref={useSyncRefs(ref, (instance) => {
        if (!instance) return;
        press(instance, (element) => {
          const width = element.clientWidth;
          const height = element.clientHeight;
          const maxSize = Math.max(width, height);
          let scale = 0.9 + maxSize * 0.0005;
          scale = scale > 1 ? 1 : scale;
          animate(element, { scale });
          return () => animate(element, { scale: 1 });
        });
      })}
      className={cn(
        button({
          variant,
          color,
          size,
          disabled,
        }),
        className,
      )}
      disabled={disabled}
      type={type}
      {...otherProps}
    />
  );
}

export { Button };
