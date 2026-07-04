"use client";

import { Button } from "@/components/button";
import { CheckIcon, CopyIcon } from "lucide-react";
import { useRef, useState, MouseEvent } from "react";
import { cn } from "@/lib/utils/cn";

type CopyButtonProps = {
  className?: string;
};

export function CopyToClipboard(props: CopyButtonProps) {
  const { className } = props;

  const refId = useRef<NodeJS.Timeout | undefined>(undefined);
  const [isCopied, setIsCopied] = useState(false);

  const handleClick = async (event: MouseEvent<HTMLButtonElement>) => {
    const element = event.currentTarget as HTMLElement;
    const container = element.parentNode!;
    const content = container.querySelector("pre code")?.textContent || "";
    copy(content);
  };

  const copy = (value: string) => {
    clearTimeout(refId.current);
    navigator.clipboard.writeText(value).then(() => {
      setIsCopied(true);
      refId.current = setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    });
  };

  return (
    <Button
      color="secondary"
      size="sm"
      className={cn("m-1.5", className)}
      onClick={handleClick}
    >
      {!isCopied && <CopyIcon data-slot="icon" />}
      {isCopied && <CheckIcon data-slot="icon" />}
    </Button>
  );
}
