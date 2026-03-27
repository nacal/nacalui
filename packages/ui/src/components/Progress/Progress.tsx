import { clsx } from "clsx"
import type { HTMLAttributes } from "react"
import {
  Label as AriaLabel,
  ProgressBar as AriaProgressBar,
  type ProgressBarProps as AriaProgressBarProps
} from "react-aria-components"

export type ProgressSize = "sm" | "md" | "lg"

export interface ProgressProps extends AriaProgressBarProps {
  /** ラベル。 */
  label?: string
  /** サイズ。 @default "md" */
  size?: ProgressSize
  /** 値を表示するか。 @default false */
  showValue?: boolean
}

const sizeStyles: Record<ProgressSize, string> = {
  sm: "h-1",
  md: "h-2",
  lg: "h-3"
}

/**
 * プログレスバー。処理の進行状況を示す。
 * react-aria-components ベースでスクリーンリーダー対応。
 *
 * @summary 確定的・不確定的な進行状況を示すバー。
 */
export function Progress({
  label,
  size = "md",
  showValue = false,
  className,
  ...props
}: ProgressProps) {
  return (
    <AriaProgressBar
      {...props}
      className={clsx("flex flex-col gap-1.5 w-full", className as string)}
    >
      {({ percentage, isIndeterminate, valueText }) => (
        <>
          {(label || showValue) && (
            <div className="flex justify-between text-sm">
              {label && (
                <AriaLabel className="text-stone-700 font-medium">
                  {label}
                </AriaLabel>
              )}
              {showValue && !isIndeterminate && (
                <span className="text-stone-500 text-xs font-mono">
                  {valueText}
                </span>
              )}
            </div>
          )}
          <div
            className={clsx(
              "w-full bg-stone-200 rounded-full overflow-hidden",
              sizeStyles[size]
            )}
          >
            <div
              className={clsx(
                "h-full bg-stone-900 rounded-full transition-all duration-300",
                isIndeterminate && "nacalui-progress-indeterminate"
              )}
              style={{
                width: isIndeterminate ? "40%" : `${percentage}%`
              }}
            />
          </div>
        </>
      )}
    </AriaProgressBar>
  )
}
