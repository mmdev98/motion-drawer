import { Footer as NextraFooter } from "nextra-theme-docs";
import Link from "next/link";

export function Footer() {
  return (
    <NextraFooter>
      <p className="text-center w-full text-sm">
        Made with ❤️ by{" "}
        <Link href="https://mohammadhosseinmoradi.dev" target="_blank">
          Mohammad Hossein Moradi
        </Link>
      </p>
    </NextraFooter>
  );
}
