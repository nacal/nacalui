import { intentColors, palette, semanticColors } from "@nacalui/tokens"
import type { Meta, StoryObj } from "@storybook/react"
import type { ReactNode } from "react"

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace("#", "")
  return [
    parseInt(h.slice(0, 2), 16),
    parseInt(h.slice(2, 4), 16),
    parseInt(h.slice(4, 6), 16)
  ]
}

function relativeLuminance(hex: string): number {
  const [r, g, b] = hexToRgb(hex).map(c => {
    const s = c / 255
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

function contrastRatio(hex1: string, hex2: string): number {
  const l1 = relativeLuminance(hex1)
  const l2 = relativeLuminance(hex2)
  const lighter = Math.max(l1, l2)
  const darker = Math.min(l1, l2)
  return (lighter + 0.05) / (darker + 0.05)
}

function ContrastBadge({ ratio }: { ratio: number }) {
  const aaa = ratio >= 7
  const aa = ratio >= 4.5
  const aaLarge = ratio >= 3
  return (
    <div className="flex gap-1 items-center">
      <span className="text-xs font-mono">{ratio.toFixed(1)}:1</span>
      {aaa ? (
        <span className="text-xs px-1 rounded bg-emerald-600 text-white font-medium">
          AAA
        </span>
      ) : aa ? (
        <span className="text-xs px-1 rounded bg-emerald-600 text-white font-medium">
          AA
        </span>
      ) : aaLarge ? (
        <span className="text-xs px-1 rounded bg-amber-600 text-white font-medium">
          AA Large
        </span>
      ) : (
        <span className="text-xs px-1 rounded bg-red-600 text-white font-medium">
          Fail
        </span>
      )}
    </div>
  )
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-stone-900 mb-6">{title}</h2>
      {children}
    </div>
  )
}

function ColorSwatch({ name, color }: { name: string; color: string }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="w-12 h-12 rounded-md border border-stone-200 shrink-0"
        style={{ backgroundColor: color }}
      />
      <div>
        <div className="text-sm font-medium text-stone-900">{name}</div>
        <div className="text-xs text-stone-500 font-mono">{color}</div>
      </div>
    </div>
  )
}

function PaletteGroup({
  name,
  colors
}: {
  name: string
  colors: Record<string, string>
}) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-stone-800 mb-3 capitalize">
        {name}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {Object.entries(colors).map(([shade, color]) => (
          <ColorSwatch key={shade} name={`${name}-${shade}`} color={color} />
        ))}
      </div>
    </div>
  )
}

function ContrastPair({
  label,
  fgColor,
  bgColor,
  fgName,
  bgName
}: {
  label: string
  fgColor: string
  bgColor: string
  fgName: string
  bgName: string
}) {
  const ratio = contrastRatio(fgColor, bgColor)
  return (
    <div className="flex items-center gap-4">
      <div
        className="w-48 px-3 py-2 rounded-md text-sm font-medium"
        style={{ backgroundColor: bgColor, color: fgColor }}
      >
        {label}
      </div>
      <div className="text-xs text-stone-500 font-mono flex-1">
        {fgName} on {bgName}
      </div>
      <ContrastBadge ratio={ratio} />
    </div>
  )
}

function IntentRow({
  name,
  tokens,
  bgColor
}: {
  name: string
  tokens: {
    base: string
    hover: string
    light: string
    lightHover: string
    fg: string
    contrast: string
  }
  bgColor: string
}) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-stone-700 mb-2 capitalize">
        {name}
      </h4>
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
        {Object.entries(tokens).map(([key, color]) => (
          <div key={key} className="flex flex-col items-center gap-1">
            <div
              className="w-10 h-10 rounded-md border border-stone-200"
              style={{ backgroundColor: color }}
            />
            <div className="text-xs text-stone-500 font-mono">{key}</div>
            <div className="text-xs text-stone-400 font-mono">{color}</div>
          </div>
        ))}
      </div>
      <div className="mt-2 flex gap-4">
        <ContrastPair
          label={`${name} filled`}
          fgColor={tokens.contrast}
          bgColor={tokens.base}
          fgName="contrast"
          bgName="base"
        />
        <ContrastPair
          label={`${name} light`}
          fgColor={tokens.fg}
          bgColor={bgColor}
          fgName="fg"
          bgName="bg"
        />
      </div>
    </div>
  )
}

/* ── Palette ── */

function PaletteStory() {
  return (
    <div className="space-y-6 p-6 max-w-4xl">
      <Section title="Palette">
        <div className="space-y-6">
          {Object.entries(palette).map(([name, colors]) => (
            <PaletteGroup key={name} name={name} colors={colors} />
          ))}
        </div>
      </Section>
    </div>
  )
}

/* ── Semantic Colors ── */

function SemanticStory() {
  const light = semanticColors.light
  const dark = semanticColors.dark

  return (
    <div className="space-y-8 p-6 max-w-4xl">
      <Section title="Semantic Colors — Light">
        <div className="space-y-3">
          <ContrastPair
            label="Primary text"
            fgColor={light.fg.primary}
            bgColor={light.bg.primary}
            fgName="fg-primary"
            bgName="bg-primary"
          />
          <ContrastPair
            label="Secondary text"
            fgColor={light.fg.secondary}
            bgColor={light.bg.primary}
            fgName="fg-secondary"
            bgName="bg-primary"
          />
          <ContrastPair
            label="Tertiary text"
            fgColor={light.fg.tertiary}
            bgColor={light.bg.primary}
            fgName="fg-tertiary"
            bgName="bg-primary"
          />
          <ContrastPair
            label="Accent primary"
            fgColor={light.accent.primary}
            bgColor={light.bg.primary}
            fgName="accent-primary"
            bgName="bg-primary"
          />
          <ContrastPair
            label="Accent secondary"
            fgColor={light.accent.secondary}
            bgColor={light.bg.primary}
            fgName="accent-secondary"
            bgName="bg-primary"
          />
          <ContrastPair
            label="Error"
            fgColor={light.status.error}
            bgColor={light.bg.primary}
            fgName="status-error"
            bgName="bg-primary"
          />
          <ContrastPair
            label="Warning"
            fgColor={light.status.warning}
            bgColor={light.bg.primary}
            fgName="status-warning"
            bgName="bg-primary"
          />
          <ContrastPair
            label="Success"
            fgColor={light.status.success}
            bgColor={light.bg.primary}
            fgName="status-success"
            bgName="bg-primary"
          />
          <ContrastPair
            label="Inverse"
            fgColor={light.fg.inverse}
            bgColor={light.bg.inverse}
            fgName="fg-inverse"
            bgName="bg-inverse"
          />
        </div>
      </Section>

      <hr className="border-stone-200" />

      <Section title="Semantic Colors — Dark">
        <div className="space-y-3 bg-stone-900 p-6 rounded-lg">
          <ContrastPair
            label="Primary text"
            fgColor={dark.fg.primary}
            bgColor={dark.bg.primary}
            fgName="fg-primary"
            bgName="bg-primary"
          />
          <ContrastPair
            label="Secondary text"
            fgColor={dark.fg.secondary}
            bgColor={dark.bg.primary}
            fgName="fg-secondary"
            bgName="bg-primary"
          />
          <ContrastPair
            label="Tertiary text"
            fgColor={dark.fg.tertiary}
            bgColor={dark.bg.primary}
            fgName="fg-tertiary"
            bgName="bg-primary"
          />
          <ContrastPair
            label="Accent primary"
            fgColor={dark.accent.primary}
            bgColor={dark.bg.primary}
            fgName="accent-primary"
            bgName="bg-primary"
          />
          <ContrastPair
            label="Accent secondary"
            fgColor={dark.accent.secondary}
            bgColor={dark.bg.primary}
            fgName="accent-secondary"
            bgName="bg-primary"
          />
          <ContrastPair
            label="Error"
            fgColor={dark.status.error}
            bgColor={dark.bg.primary}
            fgName="status-error"
            bgName="bg-primary"
          />
          <ContrastPair
            label="Warning"
            fgColor={dark.status.warning}
            bgColor={dark.bg.primary}
            fgName="status-warning"
            bgName="bg-primary"
          />
          <ContrastPair
            label="Success"
            fgColor={dark.status.success}
            bgColor={dark.bg.primary}
            fgName="status-success"
            bgName="bg-primary"
          />
          <ContrastPair
            label="Inverse"
            fgColor={dark.fg.inverse}
            bgColor={dark.bg.inverse}
            fgName="fg-inverse"
            bgName="bg-inverse"
          />
        </div>
      </Section>
    </div>
  )
}

/* ── Intent Colors ── */

function IntentStory() {
  const light = intentColors.light
  const dark = intentColors.dark

  return (
    <div className="space-y-8 p-6 max-w-4xl">
      <Section title="Intent Colors — Light">
        <p className="text-sm text-stone-500 mb-6">
          コンポーネントが参照するセマンティックな色。intent（意味）ごとに base
          / hover / light / fg / contrast を持つ。
        </p>
        <div className="space-y-6">
          {Object.entries(light).map(([name, tokens]) => (
            <IntentRow
              key={name}
              name={name}
              tokens={tokens}
              bgColor={semanticColors.light.bg.primary}
            />
          ))}
        </div>
      </Section>

      <hr className="border-stone-200" />

      <Section title="Intent Colors — Dark">
        <div className="space-y-6 bg-stone-900 p-6 rounded-lg">
          {Object.entries(dark).map(([name, tokens]) => (
            <IntentRow
              key={name}
              name={name}
              tokens={tokens}
              bgColor={semanticColors.dark.bg.primary}
            />
          ))}
        </div>
      </Section>
    </div>
  )
}

/* ── Meta ── */

const meta: Meta = {
  title: "Tokens/Colors"
}

export default meta

type Story = StoryObj

export const Palette: Story = {
  render: () => <PaletteStory />
}

export const Semantic: Story = {
  render: () => <SemanticStory />
}

export const Intent: Story = {
  render: () => <IntentStory />
}
