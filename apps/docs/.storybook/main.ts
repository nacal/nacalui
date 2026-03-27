import type { StorybookConfig } from "@storybook/react-vite";
import UnoCSS from "unocss/vite";
import { resolve } from "node:path";

const config: StorybookConfig = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-a11y"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  typescript: {
    reactDocgen: "react-docgen",
  },
  viteFinal: async (config) => {
    config.plugins?.push(UnoCSS());
    // ui パッケージのソースを直接参照（ビルド不要で CSS import も解決）
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      "@nacalui/ui": resolve(__dirname, "../../../packages/ui/src"),
    };
    return config;
  },
};

export default config;
