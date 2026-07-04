import type { JSX } from "react";
import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import { Fragment } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { BundledLanguage, codeToHast } from "shiki";
import { Pre } from "@/components/code-block/components/pre";

export type HighlightProps = {
  code: string;
  lang: BundledLanguage;
};

export async function Highlight(props: HighlightProps) {
  const { code, lang = "tsx" } = props;

  const out = await codeToHast(code, {
    lang,
    themes: { light: "light-plus", dark: "dark-plus" },
    defaultColor: "light-dark()",
  });

  return toJsxRuntime(out, {
    Fragment,
    jsx,
    jsxs,
    components: {
      pre: (props) => <Pre>{props.children}</Pre>,
    },
  }) as JSX.Element;
}
