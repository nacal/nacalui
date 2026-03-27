import { presetNacalui } from "@nacalui/tokens/uno-preset"
import { defineConfig, presetIcons, presetUno } from "unocss"

export default defineConfig({
  presets: [presetUno(), presetIcons({ scale: 1.2 }), presetNacalui()],
  content: {
    pipeline: {
      include: ["src/**/*.{ts,tsx}"]
    }
  }
})
