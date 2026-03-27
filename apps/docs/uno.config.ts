import { defineConfig, presetUno, presetIcons, presetTypography } from "unocss";
import { presetNacalui } from "@nacalui/tokens/uno-preset";

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({ scale: 1.2 }),
    presetTypography(),
    presetNacalui(),
  ],
  content: {
    pipeline: {
      include: [
        "stories/**/*.{tsx,ts,mdx}",
        "../../packages/ui/src/**/*.{tsx,ts}",
      ],
    },
  },
});
