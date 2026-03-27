import { clsx } from "clsx"
import {
  Label as AriaLabel,
  ProgressBar as AriaProgressBar,
  type ProgressBarProps as AriaProgressBarProps
} from "react-aria-components"

export type ProgressSize = "sm" | "md" | "lg"

export interface ProgressProps extends AriaProgressBarProps {
  label?: string
  size?: ProgressSize
  showValue?: boolean
}

const sizeStyles: Record<ProgressSize, string> = {
  sm: "h-1",
  md: "h-2",
  lg: "h-3"
}

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
                <AriaLabel className="text-[var(--color-fg-primary)] font-medium">
                  {label}
                </AriaLabel>
              )}
              {showValue && !isIndeterminate && (
                <span className="text-[var(--color-fg-secondary)] text-xs font-mono">
                  {valueText}
                </span>
              )}
            </div>
          )}
          <div
            className={clsx(
              "w-full bg-[var(--color-bg-tertiary)] rounded-full overflow-hidden",
              sizeStyles[size]
            )}
          >
            <div
              className={clsx(
                "h-full bg-[var(--color-fg-primary)] rounded-full transition-all duration-300",
                isIndeterminate && "nacalui-progress-indeterminate"
              )}
              style={{ width: isIndeterminate ? "40%" : `${percentage}%` }}
            />
          </div>
        </>
      )}
    </AriaProgressBar>
  )
}
