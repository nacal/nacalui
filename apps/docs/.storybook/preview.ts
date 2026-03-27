import "@unocss/reset/tailwind.css"
import "virtual:uno.css"
import "../../../packages/tokens/dist/tokens.css"
import "./docs-style.css"
import "../../../packages/ui/src/components/Button/button.css"
import "../../../packages/ui/src/components/Input/input.css"
import "../../../packages/ui/src/components/Checkbox/checkbox.css"
import "../../../packages/ui/src/components/Select/select.css"
import "../../../packages/ui/src/components/Dialog/dialog.css"
import "../../../packages/ui/src/components/Toast/toast.css"
import "../../../packages/ui/src/components/Tooltip/tooltip.css"
import "../../../packages/ui/src/components/Skeleton/skeleton.css"
import "../../../packages/ui/src/components/DropdownMenu/dropdown-menu.css"
import "../../../packages/ui/src/components/Progress/progress.css"
import "../../../packages/ui/src/components/Accordion/accordion.css"
import type { Preview } from "@storybook/react"

const preview: Preview = {
  globalTypes: {
    theme: {
      description: "Theme",
      toolbar: {
        title: "Theme",
        icon: "sun",
        items: [
          { value: "light", title: "Light", icon: "sun" },
          { value: "dark", title: "Dark", icon: "moon" }
        ],
        dynamicTitle: true
      }
    }
  },
  initialGlobals: {
    theme: "light"
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || "light"
      const root = document.documentElement
      root.setAttribute("data-theme", theme)
      document.body.style.backgroundColor =
        theme === "dark" ? "#1c1917" : "#fafaf9"
      return Story()
    }
  ],
  parameters: {
    layout: "centered"
  }
}

export default preview
