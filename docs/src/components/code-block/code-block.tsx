import { cn } from "@/lib/utils/cn";
import { ReactNode } from "react";
import { CopyToClipboard } from "@/components/code-block/components/copy-to-clipboard";

type CodeBlockProps = {
  children: ReactNode;
  className?: string;
};

export async function CodeBlock(props: CodeBlockProps) {
  const { children, className } = props;

  return (
    <div
      className={cn(
        "bg-bg-50 border relative overflow-hidden rounded-xl mt-4",
        className,
      )}
    >
      <CopyToClipboard className="absolute max-sm:top-1 max-sm:end-0 top-1 end-1" />
      <div className="overflow-auto py-4 text-sm max-h-full">
        <pre>{children}</pre>
      </div>
    </div>
  );
}
