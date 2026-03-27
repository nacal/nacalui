import "@unocss/reset/tailwind.css";
import "virtual:uno.css";
import "./docs-style.css";
import "../../../packages/ui/src/components/Button/button.css";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#fafaf9" },
        { name: "dark", value: "#1c1917" },
      ],
    },
    layout: "centered",
  },
};

export default preview;
