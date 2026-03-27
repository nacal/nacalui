import { clsx } from "clsx"
import {
  Label as AriaLabel,
  TextArea as AriaTextArea,
  TextField as AriaTextField,
  type TextFieldProps as AriaTextFieldProps,
  Text
} from "react-aria-components"

export type TextareaSize = "sm" | "md" | "lg"

export interface TextareaProps extends AriaTextFieldProps {
  /** ラベルテキスト。 */
  label?: string
  /** 説明テキスト。 */
  description?: string
  /** エラーメッセージ。isInvalid と併用する。 */
  errorMessage?: string
  /** サイズ。 @default "md" */
  size?: TextareaSize
  /** プレースホルダー。 */
  placeholder?: string
  /** 行数。 @default 4 */
  rows?: number
}

const sizeStyles: Record<TextareaSize, { field: string; label: string }> = {
  sm: { field: "px-3 py-2 text-sm rounded-md", label: "text-xs" },
  md: { field: "px-3 py-2.5 text-sm rounded-lg", label: "text-sm" },
  lg: { field: "px-4 py-3 text-base rounded-xl", label: "text-base" }
}

export function Textarea({
  label,
  description,
  errorMessage,
  size = "md",
  placeholder,
  rows = 4,
  className,
  ...props
}: TextareaProps) {
  const sizes = sizeStyles[size]
  return (
    <AriaTextField
      {...props}
      className={clsx("flex flex-col gap-1.5", className as string)}
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
      <AriaTextArea
        placeholder={placeholder}
        rows={rows}
        className={renderProps =>
          clsx(
            "w-full border bg-[var(--color-bg-primary)] text-[var(--color-fg-primary)] resize-y",
            "border-[var(--color-border-strong)]",
            "placeholder:text-[var(--color-fg-tertiary)]",
            "transition-all duration-200",
            "focus:outline-none focus:ring-2 focus:ring-[var(--color-fg-primary)] focus:ring-offset-1 focus:border-[var(--color-fg-primary)]",
            renderProps.isDisabled &&
              "opacity-50 cursor-not-allowed bg-[var(--color-bg-secondary)] resize-none",
            renderProps.isInvalid &&
              "border-red-500 focus:ring-red-500 focus:border-red-500",
            sizes.field
          )
        }
      />
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
    </AriaTextField>
  )
}
