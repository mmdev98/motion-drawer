import { Metadata } from "next";
import { Home } from "@/modules/home";

export const metadata: Metadata = {
  title: "Motion Drawer",
  description:
    "A headless drawer with smooth animations built on top of the Motion library and easily integrates with any headless libraries such as Headless UI, React Aria, Radix UI, and more.",
};

export default function Page() {
  return <Home />;
}
