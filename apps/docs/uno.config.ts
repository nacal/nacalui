import { presetNacalui } from "@nacalui/tokens/uno-preset"
import { defineConfig, presetIcons, presetTypography, presetUno } from "unocss"

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({ scale: 1.2 }),
    presetTypography(),
    presetNacalui()
  ],
  content: {
    pipeline: {
      include: [
        "stories/**/*.{tsx,ts,mdx}",
        "../../packages/ui/src/**/*.{tsx,ts}"
      ]
    }
  }
})
