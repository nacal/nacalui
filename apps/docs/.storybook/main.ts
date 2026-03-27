import { resolve } from "node:path"
import type { StorybookConfig } from "@storybook/react-vite"
import UnoCSS from "unocss/vite"

const config: StorybookConfig = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-mcp"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  typescript: {
    reactDocgen: "react-docgen"
  },
  viteFinal: async config => {
    config.plugins?.push(UnoCSS())
    // ui パッケージのソースを直接参照（ビルド不要で CSS import も解決）
    config.resolve = config.resolve || {}
    config.resolve.alias = {
      ...config.resolve.alias,
      "@nacalui/ui": resolve(__dirname, "../../../packages/ui/src")
    }
    return config
  }
}

export default config
