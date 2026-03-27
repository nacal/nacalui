import { clsx } from "clsx"
import type { ReactNode } from "react"
import {
  Button as AriaButton,
  Label as AriaLabel,
  Select as AriaSelect,
  ListBox,
  ListBoxItem,
  Popover,
  SelectValue,
  Text
} from "react-aria-components"
import "./select.css"

export type SelectSize = "sm" | "md" | "lg"

export interface SelectProps {
  /** ラベルテキスト。 */
  label?: string
  /** 説明テキスト。 */
  description?: string
  /** エラーメッセージ。isInvalid と併用する。 */
  errorMessage?: string
  /** セレクトのサイズ。 @default "md" */
  size?: SelectSize
  /** プレースホルダーテキスト。 */
  placeholder?: string
  /** 選択肢。SelectItem を渡す。 */
  children: ReactNode
  /** 無効状態。 */
  isDisabled?: boolean
  /** バリデーションエラー状態。 */
  isInvalid?: boolean
  /** 選択中の値。 */
  selectedKey?: string | null
  /** 初期選択値。 */
  defaultSelectedKey?: string
  /** 選択値が変わったときのコールバック。 */
  onSelectionChange?: (key: string | null) => void
  className?: string
}

const sizeStyles: Record<SelectSize, { trigger: string; label: string }> = {
  sm: { trigger: "h-8 px-3 text-sm rounded-md", label: "text-xs" },
  md: { trigger: "h-10 px-3 text-sm rounded-lg", label: "text-sm" },
  lg: { trigger: "h-12 px-4 text-base rounded-xl", label: "text-base" }
}

/**
 * ドロップダウン選択。複数の選択肢から1つを選ぶ。
 * react-aria-components ベースでキーボードナビゲーション・スクリーンリーダー対応。
 *
 * @summary ラベル、説明、エラーメッセージをサポートするセレクト。
 */
export function Select({
  label,
  description,
  errorMessage,
  size = "md",
  placeholder,
  children,
  isDisabled,
  isInvalid,
  selectedKey,
  defaultSelectedKey,
  onSelectionChange,
  className
}: SelectProps) {
  const sizes = sizeStyles[size]
  return (
    <AriaSelect
      placeholder={placeholder}
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      selectedKey={selectedKey}
      defaultSelectedKey={defaultSelectedKey}
      onSelectionChange={onSelectionChange as (key: React.Key | null) => void}
      className={clsx("flex flex-col gap-1.5", className)}
    >
      {label && (
        <AriaLabel
          className={clsx(
            "font-medium text-[var(--color-fg-primary)]",
            sizes.label
          )}
        >
          {label}
        </AriaLabel>
      )}
      <AriaButton
        className={renderProps =>
          clsx(
            "nacalui-select-trigger",
            "flex items-center justify-between w-full border bg-[var(--color-bg-primary)] text-[var(--color-fg-primary)]",
            "border-[var(--color-border-strong)]",
            "transition-all duration-200",
            "focus:outline-none focus:ring-2 focus:ring-[var(--color-fg-primary)] focus:ring-offset-1 focus:border-[var(--color-fg-primary)]",
            renderProps.isDisabled &&
              "opacity-50 cursor-not-allowed bg-[var(--color-bg-secondary)]",
            sizes.trigger
          )
        }
      >
        <SelectValue className="truncate placeholder:text-[var(--color-fg-tertiary)]" />
        <span
          className="i-lucide-chevron-down text-[var(--color-fg-tertiary)] text-base ml-2 shrink-0"
          aria-hidden="true"
        />
      </AriaButton>
      {description && !errorMessage && (
        <Text
          slot="description"
          className="text-xs text-[var(--color-fg-secondary)]"
        >
          {description}
        </Text>
      )}
      {errorMessage && (
        <Text slot="errorMessage" className="text-xs text-red-600">
          {errorMessage}
        </Text>
      )}
      <Popover className="nacalui-select-popover w-[var(--trigger-width)] bg-[var(--color-bg-primary)] border border-[var(--color-border-default)] rounded-lg shadow-lg overflow-hidden">
        <ListBox className="p-1 outline-none max-h-60 overflow-auto">
          {children}
        </ListBox>
      </Popover>
    </AriaSelect>
  )
}

export interface SelectItemProps {
  id: string
  children: ReactNode
  textValue?: string
}

export function SelectItem({ children, ...props }: SelectItemProps) {
  return (
    <ListBoxItem
      {...props}
      className={renderProps =>
        clsx(
          "px-3 py-2 text-sm rounded-md cursor-pointer outline-none transition-colors",
          "text-[var(--color-fg-primary)]",
          renderProps.isFocused && "bg-[var(--color-bg-secondary)]",
          renderProps.isSelected && "bg-[var(--color-fg-primary)] text-white"
        )
      }
    >
      {children}
    </ListBoxItem>
  )
}
