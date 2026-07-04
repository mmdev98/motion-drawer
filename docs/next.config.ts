import type { NextConfig } from "next";
import nextra from "nextra";

const withNextra = nextra({
  mdxOptions: {
    rehypePrettyCodeOptions: {
      theme: {
        dark: "dark-plus",
        light: "light-plus"
      }
    }
  }
});

// Derive the base path for GitHub Pages.
// A project site is served under "/<repo>" (e.g. "/motion-drawer"), so the
// repository name is used automatically when building inside GitHub Actions.
// Set NEXT_PUBLIC_BASE_PATH explicitly (e.g. "" ) to override, for example when
// serving from a custom domain or a user/organization page.
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (process.env.GITHUB_ACTIONS === "true" && repoName ? `/${repoName}` : "");

const nextConfig: NextConfig = {
  // Produce a fully static site in the "out" directory for GitHub Pages.
  output: "export",
  // GitHub Pages has no image optimization server.
  images: {
    unoptimized: true,
  },
  basePath,
  // Emit "/route/index.html" so links resolve on static hosting.
  trailingSlash: true,
  turbopack: {
    resolveAlias: {
      "next-mdx-import-source-file": "./src/mdx-components.tsx",
    },
  },
};

export default withNextra(nextConfig);
