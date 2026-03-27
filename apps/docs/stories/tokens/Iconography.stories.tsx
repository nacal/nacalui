import type { Meta, StoryObj } from "@storybook/react"

const reservedIcons = [
  { name: "x", label: "閉じる" },
  { name: "arrow-left", label: "戻る" },
  { name: "check", label: "完了" },
  { name: "alert-triangle", label: "警告" },
  { name: "info", label: "情報" },
  { name: "alert-circle", label: "エラー" },
  { name: "more-horizontal", label: "その他" },
  { name: "search", label: "検索" },
  { name: "plus", label: "追加" },
  { name: "trash-2", label: "削除" }
]

const commonIcons = [
  "home",
  "settings",
  "user",
  "log-out",
  "log-in",
  "menu",
  "chevron-down",
  "chevron-right",
  "external-link",
  "copy",
  "edit",
  "eye",
  "eye-off",
  "heart",
  "star",
  "bell",
  "calendar",
  "clock",
  "download",
  "upload",
  "filter",
  "sort-asc",
  "mail",
  "message-circle"
]

function IconItem({
  name,
  label,
  size = "text-xl"
}: {
  name: string
  label?: string
  size?: string
}) {
  const iconClass = `i-lucide-${name} ${size}`
  return (
    <div className="flex flex-col items-center gap-2 p-3">
      <div className={`${iconClass} text-stone-700`} />
      <div className="text-xs text-stone-500 font-mono">{name}</div>
      {label && <div className="text-xs text-stone-400">{label}</div>}
    </div>
  )
}

function IconographyShowcase() {
  return (
    <div className="space-y-8 p-6 max-w-4xl">
      <h2 className="text-2xl font-bold text-stone-900">Iconography</h2>
      <p className="text-sm text-stone-600">
        Lucide icons via UnoCSS preset-icons。クラス名:
        <code className="bg-stone-100 px-1 rounded text-xs mx-1">
          i-lucide-[name]
        </code>
      </p>

      <div>
        <h3 className="text-lg font-semibold text-stone-800 mb-3">Sizes</h3>
        <div className="flex items-end gap-6">
          {[
            { size: "text-sm", label: "sm (14px)" },
            { size: "text-base", label: "base (16px)" },
            { size: "text-xl", label: "xl (20px)" },
            { size: "text-2xl", label: "2xl (24px)" }
          ].map(({ size, label }) => (
            <div key={size} className="flex flex-col items-center gap-2">
              <div className={`i-lucide-heart ${size} text-stone-700`} />
              <div className="text-xs text-stone-400 font-mono">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-stone-200" />

      <div>
        <h3 className="text-lg font-semibold text-stone-800 mb-3">Colors</h3>
        <div className="flex items-center gap-6">
          {[
            { color: "text-stone-700", label: "default" },
            { color: "text-blue-600", label: "blue-600" },
            { color: "text-sage-600", label: "sage-600" },
            { color: "text-red-600", label: "red-600" },
            { color: "text-amber-600", label: "amber-600" }
          ].map(({ color, label }) => (
            <div key={color} className="flex flex-col items-center gap-2">
              <div className={`i-lucide-heart text-xl ${color}`} />
              <div className="text-xs text-stone-400 font-mono">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-stone-200" />

      <div>
        <h3 className="text-lg font-semibold text-stone-800 mb-3">
          Reserved Icons
        </h3>
        <p className="text-sm text-stone-500 mb-3">
          特定の意味に固定されたアイコン。他の用途では使わないでください。
        </p>
        <div className="grid grid-cols-5 sm:grid-cols-5 gap-1">
          {reservedIcons.map(({ name, label }) => (
            <IconItem key={name} name={name} label={label} />
          ))}
        </div>
      </div>

      <hr className="border-stone-200" />

      <div>
        <h3 className="text-lg font-semibold text-stone-800 mb-3">
          Common Icons
        </h3>
        <div className="grid grid-cols-6 sm:grid-cols-8 gap-1">
          {commonIcons.map(name => (
            <IconItem key={name} name={name} />
          ))}
        </div>
      </div>

      <hr className="border-stone-200" />

      <div>
        <h3 className="text-lg font-semibold text-stone-800 mb-3">
          Usage Examples
        </h3>
        <div className="space-y-4">
          <div>
            <div className="text-xs text-stone-400 font-mono mb-2">
              Button with icon
            </div>
            <button
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md text-sm"
            >
              <div className="i-lucide-plus text-base" aria-hidden="true" />
              追加する
            </button>
          </div>
          <div>
            <div className="text-xs text-stone-400 font-mono mb-2">
              Icon-only button
            </div>
            <button
              type="button"
              className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-stone-200 text-stone-600 hover:bg-stone-50"
              aria-label="検索"
            >
              <div className="i-lucide-search text-base" />
            </button>
          </div>
          <div>
            <div className="text-xs text-stone-400 font-mono mb-2">
              Status with icon
            </div>
            <div className="inline-flex items-center gap-2 text-sm text-emerald-600">
              <div className="i-lucide-check text-base" aria-hidden="true" />
              保存しました
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const meta: Meta = {
  title: "Tokens/Iconography",
  component: IconographyShowcase
}

export default meta

type Story = StoryObj

export const Default: Story = {}
