import { clsx } from "clsx"
import type { HTMLAttributes } from "react"

export type SpinnerSize = "sm" | "md" | "lg"

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  /** サイズ。 @default "md" */
  size?: SpinnerSize
  /** ラベル（スクリーンリーダー用）。 @default "読み込み中" */
  label?: string
}

const sizeStyles: Record<SpinnerSize, string> = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8"
}

/**
 * ローディングスピナー。非同期処理中に表示する。
 *
 * @summary 回転アニメーションのローディングインジケーター。
 */
export function Spinner({
  size = "md",
  label = "読み込み中",
  className,
  ...props
}: SpinnerProps) {
  return (
    <div
      role="status"
      className={clsx("inline-flex items-center justify-center", className)}
      {...props}
    >
      <span
        className={clsx(
          "i-lucide-loader-2 animate-spin text-stone-500",
          sizeStyles[size]
        )}
        aria-hidden="true"
      />
      <span className="sr-only">{label}</span>
    </div>
  )
}
