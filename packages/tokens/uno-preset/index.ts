import type { Preset } from "unocss";
import { palette, semanticColors, intentColors } from "../src/colors";
import {
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
} from "../src/typography";
import { spacing } from "../src/spacing";
import { elevation } from "../src/elevation";
import { radius } from "../src/radius";
import { duration, easing } from "../src/motion";
import { breakpoint } from "../src/layout";

type NestedRecord = Record<string, Record<string, string>>;

function flattenSemanticColors(
  colors: NestedRecord,
): Record<string, string> {
  const result: Record<string, string> = {};
  for (const [group, values] of Object.entries(colors)) {
    for (const [key, value] of Object.entries(values)) {
      result[`${group}-${key}`] = value;
    }
  }
  return result;
}

function generateSemanticCSSVars(
  colors: NestedRecord,
): string {
  return Object.entries(colors)
    .flatMap(([group, values]) =>
      Object.entries(values).map(
        ([key, value]) => `--color-${group}-${key}: ${value};`,
      ),
    )
    .join("\n  ");
}

type IntentRecord = Record<string, Record<string, string>>;

function generateIntentCSSVars(intents: IntentRecord): string {
  return Object.entries(intents)
    .flatMap(([intent, values]) =>
      Object.entries(values).map(
        ([key, value]) => `--intent-${intent}-${key}: ${value};`,
      ),
    )
    .join("\n  ");
}

export function presetNacalui(): Preset {
  return {
    name: "preset-nacalui",
    theme: {
      colors: {
        ...palette,
        ...flattenSemanticColors(semanticColors.light),
        // CSS variable references for semantic colors (theme-aware)
        semantic: {
          bg: {
            primary: "var(--color-bg-primary)",
            secondary: "var(--color-bg-secondary)",
            tertiary: "var(--color-bg-tertiary)",
            inverse: "var(--color-bg-inverse)",
          },
          fg: {
            primary: "var(--color-fg-primary)",
            secondary: "var(--color-fg-secondary)",
            tertiary: "var(--color-fg-tertiary)",
            inverse: "var(--color-fg-inverse)",
          },
          accent: {
            primary: "var(--color-accent-primary)",
            secondary: "var(--color-accent-secondary)",
            "primary-hover": "var(--color-accent-primary-hover)",
            "secondary-hover": "var(--color-accent-secondary-hover)",
          },
          border: {
            default: "var(--color-border-default)",
            strong: "var(--color-border-strong)",
          },
          status: {
            error: "var(--color-status-error)",
            warning: "var(--color-status-warning)",
            success: "var(--color-status-success)",
          },
        },
      },
      fontFamily,
      fontSize,
      fontWeight,
      lineHeight,
      letterSpacing,
      spacing,
      boxShadow: elevation,
      borderRadius: radius,
      breakpoints: breakpoint,
    },
    preflights: [
      {
        getCSS: () => `
:root {
  ${generateSemanticCSSVars(semanticColors.light)}
  ${generateIntentCSSVars(intentColors.light)}
  ${Object.entries(duration)
    .map(([k, v]) => `--duration-${k}: ${v};`)
    .join("\n  ")}
  ${Object.entries(easing)
    .map(([k, v]) => `--easing-${k}: ${v};`)
    .join("\n  ")}
}

@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    ${generateSemanticCSSVars(semanticColors.dark)}
    ${generateIntentCSSVars(intentColors.dark)}
  }
}

:root[data-theme="dark"] {
  ${generateSemanticCSSVars(semanticColors.dark)}
  ${generateIntentCSSVars(intentColors.dark)}
}`,
      },
    ],
  };
}
