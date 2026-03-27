import "@unocss/reset/tailwind.css"
import "virtual:uno.css"
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
import type { Preview } from "@storybook/react"

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#fafaf9" },
        { name: "dark", value: "#1c1917" }
      ]
    },
    layout: "centered"
  }
}

export default preview
