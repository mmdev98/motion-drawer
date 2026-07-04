import { MDXComponents } from "mdx/types";
import { useMDXComponents as getThemeComponents } from "nextra-theme-docs";
import { CodeBlock } from "@/components/code-block";
import { Code } from "@/components/code-block/components/code";

const themeComponents = getThemeComponents();

export function useMDXComponents(components: MDXComponents) {
  return {
    ...themeComponents,
    ...components,
    code: Code,
    pre: CodeBlock,
  };
}
