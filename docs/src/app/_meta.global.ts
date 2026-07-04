import type { MetaRecord } from "nextra";

const meta: MetaRecord = {
  index: {
    display: "hidden",
    theme: {
      breadcrumb: false,
      navbar: false,
      footer: false,
      layout: "default",
      pagination: false,
      collapsed: false,
      sidebar: false,
      toc: false,
      typesetting: "default",
    },
  },
  "getting-started": {
    theme: {
      breadcrumb: false,
    },
  },
  api: {
    theme: {
      breadcrumb: false,
    },
  },
  examples: {
    theme: {
      breadcrumb: false,
    },
  },
};

export default meta;
