import { ComponentProps } from "react";
import { cn } from "@/lib/utils/cn";

type PreProps = ComponentProps<"pre">;

export function Pre(props: PreProps) {
  const { children, className, ...otherProps } = props;

  return (
    <pre className={cn("font-[var(--font-code)]", className)} {...otherProps}>
      {children}
    </pre>
  );
}
