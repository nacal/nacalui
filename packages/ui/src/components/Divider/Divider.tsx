import { clsx } from "clsx"
import type { HTMLAttributes } from "react"

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  orientation?: "horizontal" | "vertical"
}

export function Divider({
  orientation = "horizontal",
  className,
  ...props
}: DividerProps) {
  return (
    <hr
      className={clsx(
        "border-none bg-[var(--color-border-default)]",
        orientation === "horizontal" ? "w-full h-px" : "h-full w-px",
        className
      )}
      {...props}
    />
  )
}
