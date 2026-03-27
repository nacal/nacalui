import { clsx } from "clsx"
import type { ReactNode } from "react"
import {
  Input as AriaInput,
  Label as AriaLabel,
  TextField as AriaTextField,
  type TextFieldProps as AriaTextFieldProps,
  Text
} from "react-aria-components"
import "./input.css"

export type InputSize = "sm" | "md" | "lg"

export interface InputProps extends AriaTextFieldProps {
  /** ラベルテキスト。 */
  label?: string
  /** 入力フィールドの下に表示する説明テキスト。 */
  description?: string
  /** エラーメッセージ。isInvalid と併用する。 */
  errorMessage?: string
  /** 入力フィールドのサイズ。 @default "md" */
  size?: InputSize
  /** 入力フィールドの左に表示するアイコン。 */
  icon?: ReactNode
  /** プレースホルダーテキスト。 */
  placeholder?: string
}

const sizeStyles: Record<InputSize, { field: string; label: string }> = {
  sm: {
    field: "h-8 px-3 text-sm rounded-md",
    label: "text-xs"
  },
  md: {
    field: "h-10 px-3 text-sm rounded-lg",
    label: "text-sm"
  },
  lg: {
    field: "h-12 px-4 text-base rounded-xl",
    label: "text-base"
  }
}

/**
 * テキスト入力フィールド。
 * react-aria-components ベースでアクセシビリティを担保。
 *
 * @summary ラベル、説明、エラーメッセージ、アイコンをサポートするテキスト入力。
 */
export function Input({
  label,
  description,
  errorMessage,
  size = "md",
  icon,
  placeholder,
  className,
  ...props
}: InputProps) {
  const sizes = sizeStyles[size]

  return (
    <AriaTextField
      {...props}
      className={clsx("flex flex-col gap-1.5", className as string)}
    >
      {label && (
        <AriaLabel className={clsx("font-medium text-stone-700", sizes.label)}>
          {label}
        </AriaLabel>
      )}
      <div className="relative">
        {icon && (
          <span
            className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400"
            aria-hidden="true"
          >
            {icon}
          </span>
        )}
        <AriaInput
          placeholder={placeholder}
          className={renderProps =>
            clsx(
              "nacalui-input",
              "w-full border bg-white text-stone-900",
              "border-stone-300",
              "placeholder:text-stone-400",
              "transition-all duration-200",
              "focus:outline-none focus:ring-2 focus:ring-stone-900 focus:ring-offset-1 focus:border-stone-900",
              renderProps.isDisabled &&
                "opacity-50 cursor-not-allowed bg-stone-50",
              renderProps.isInvalid &&
                "border-red-500 focus:ring-red-500 focus:border-red-500",
              icon && "pl-10",
              sizes.field
            )
          }
        />
      </div>
      {description && !errorMessage && (
        <Text slot="description" className="text-xs text-stone-500">
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
