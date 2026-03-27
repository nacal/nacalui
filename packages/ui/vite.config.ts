import { resolve } from "node:path"
import react from "@vitejs/plugin-react"
import unocss from "unocss/vite"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [unocss(), react()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "NacalUI",
      fileName: "nacalui",
      formats: ["es"]
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        /^react-aria/,
        /^@react-aria/,
        /^@react-stately/,
        /^@internationalized/
      ]
    },
    cssCodeSplit: false
  }
})
