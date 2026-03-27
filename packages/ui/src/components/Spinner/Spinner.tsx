import { clsx } from "clsx"
import type { HTMLAttributes } from "react"

export type SpinnerSize = "sm" | "md" | "lg"

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  size?: SpinnerSize
  label?: string
}

const sizeStyles: Record<SpinnerSize, string> = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8"
}

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
          "i-lucide-loader-2 animate-spin text-[var(--color-fg-secondary)]",
          sizeStyles[size]
        )}
        aria-hidden="true"
      />
      <span className="sr-only">{label}</span>
    </div>
  )
}
