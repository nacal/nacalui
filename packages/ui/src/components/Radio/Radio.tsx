import { clsx } from "clsx"
import type { ReactNode } from "react"
import {
  Label as AriaLabel,
  Radio as AriaRadio,
  RadioGroup as AriaRadioGroup,
  type RadioGroupProps as AriaRadioGroupProps,
  type RadioProps as AriaRadioProps,
  Text
} from "react-aria-components"

export interface RadioGroupProps extends AriaRadioGroupProps {
  /** グループのラベル。 */
  label?: string
  /** 説明テキスト。 */
  description?: string
  /** エラーメッセージ。isInvalid と併用する。 */
  errorMessage?: string
  /** ラジオボタン。 */
  children: ReactNode
}

export interface RadioProps extends AriaRadioProps {
  /** ラジオボタンのラベル。 */
  children: ReactNode
}

/**
 * ラジオグループ。複数の選択肢から1つを選ぶ。
 * react-aria-components ベースでキーボード矢印キー操作対応。
 *
 * @summary RadioGroup + Radio で構成する。
 */
export function RadioGroup({
  label,
  description,
  errorMessage,
  children,
  className,
  ...props
}: RadioGroupProps) {
  return (
    <AriaRadioGroup
      {...props}
      className={clsx("flex flex-col gap-2", className as string)}
    >
      {label && (
        <AriaLabel className="text-sm font-medium text-stone-700">
          {label}
        </AriaLabel>
      )}
      <div className="flex flex-col gap-2">{children}</div>
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
    </AriaRadioGroup>
  )
}

export function Radio({ children, className, ...props }: RadioProps) {
  return (
    <AriaRadio
      {...props}
      className={renderProps =>
        clsx(
          "group flex items-center gap-2 text-sm text-stone-800 cursor-pointer",
          renderProps.isDisabled && "opacity-50 cursor-not-allowed",
          typeof className === "function" ? className(renderProps) : className
        )
      }
    >
      {renderProps => (
        <>
          <div
            className={clsx(
              "flex items-center justify-center w-5 h-5 rounded-full border-2 transition-all duration-200",
              renderProps.isSelected ? "border-stone-900" : "border-stone-300",
              renderProps.isFocusVisible &&
                "ring-2 ring-stone-900 ring-offset-2"
            )}
          >
            {renderProps.isSelected && (
              <div className="w-2.5 h-2.5 rounded-full bg-stone-900" />
            )}
          </div>
          {children}
        </>
      )}
    </AriaRadio>
  )
}
