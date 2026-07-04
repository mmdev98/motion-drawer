import { Metadata } from "next";
import { ReactNode } from "react";
import { MainLayout } from "@/modules/main-layout/main-layout";
import "swiper/css";
import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";
import { cn } from "@/lib/utils/cn";

const inter = Inter({ subsets: ["latin"] });
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-code",
});

export const metadata: Metadata = {
  title: {
    default: "Motion Drawer",
    template: "%s - Motion Drawer",
  },
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className={cn(inter.className, jetBrainsMono.variable)}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
