import { getPageMap } from "nextra/page-map";
import { Layout } from "nextra-theme-docs";
import { Navbar } from "@/modules/main-layout/components/navbar";
import { Footer } from "@/modules/main-layout/components/footer";
import { ReactNode } from "react";

type MainLayoutProps = {
  children: ReactNode;
};

export async function MainLayout(props: MainLayoutProps) {
  const { children } = props;

  return (
    <Layout
      navbar={<Navbar />}
      pageMap={await getPageMap()}
      footer={<Footer />}
      docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
    >
      {children}
    </Layout>
  );
}
