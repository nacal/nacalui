import { defineConfig, presetUno, presetIcons } from "unocss";
import { presetNacalui } from "@nacalui/tokens/uno-preset";

export default defineConfig({
  presets: [presetUno(), presetIcons({ scale: 1.2 }), presetNacalui()],
  content: {
    pipeline: {
      include: ["src/**/*.{ts,tsx}"],
    },
  },
});
