import { Footer as NextraFooter } from "nextra-theme-docs";
import Link from "next/link";

export function Footer() {
  return (
    <NextraFooter>
      <p className="text-center w-full text-sm">
        Made with ❤️ by{" "}
        <Link href="https://mmdev98.github.io" target="_blank">
          Mohammad Moradi
        </Link>
      </p>
    </NextraFooter>
  );
}
