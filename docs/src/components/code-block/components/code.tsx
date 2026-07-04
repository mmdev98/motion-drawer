import cn from "clsx";
import type { HTMLAttributes } from "react";

type CodeProps = HTMLAttributes<HTMLElement> & {
  "data-language"?: string;
};

export function Code(props: CodeProps) {
  const {
    children,
    className,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    "data-language": _language,
    ...otherProps
  } = props;

  return (
    <code
      className={cn(
        "nextra-code",
        "data-line-numbers" in otherProps && "[counter-reset:line]",
        className,
      )}
      // always show code blocks in ltr
      dir="ltr"
      {...otherProps}
    >
      {children}
    </code>
  );
}
