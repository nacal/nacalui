import type { CSSProperties } from "react"

export function intentVar(intent: string, key: string): string {
  return `var(--intent-${intent}-${key})`
}

export function semanticVar(group: string, key: string): string {
  return `var(--color-${group}-${key})`
}

export function getIntentTokenVars(
  intent: string,
  variant: "filled" | "outline" | "light" | "ghost"
): CSSProperties {
  const base = intentVar(intent, "base")
  const hover = intentVar(intent, "hover")
  const light = intentVar(intent, "light")
  const lightHover = intentVar(intent, "lightHover")
  const fg = intentVar(intent, "fg")
  const contrast = intentVar(intent, "contrast")

  switch (variant) {
    case "filled":
      return {
        "--btn-bg": base,
        "--btn-bg-hover": hover,
        "--btn-bg-active": hover,
        "--btn-color": contrast,
        "--btn-border": "transparent"
      } as CSSProperties
    case "outline":
      return {
        "--btn-bg": "transparent",
        "--btn-bg-hover": light,
        "--btn-bg-active": lightHover,
        "--btn-color": fg,
        "--btn-border": base
      } as CSSProperties
    case "light":
      return {
        "--btn-bg": light,
        "--btn-bg-hover": lightHover,
        "--btn-bg-active": lightHover,
        "--btn-color": fg,
        "--btn-border": "transparent"
      } as CSSProperties
    case "ghost":
      return {
        "--btn-bg": "transparent",
        "--btn-bg-hover": light,
        "--btn-bg-active": lightHover,
        "--btn-color": fg,
        "--btn-border": "transparent"
      } as CSSProperties
  }
}
