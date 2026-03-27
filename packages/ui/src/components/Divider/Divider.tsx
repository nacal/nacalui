import { clsx } from "clsx"
import type { HTMLAttributes } from "react"

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  /** 方向。 @default "horizontal" */
  orientation?: "horizontal" | "vertical"
}

/**
 * 区切り線。セクション間の視覚的な区切りに使う。
 *
 * @summary horizontal / vertical の区切り線。
 */
export function Divider({
  orientation = "horizontal",
  className,
  ...props
}: DividerProps) {
  return (
    <hr
      className={clsx(
        "border-none bg-stone-200",
        orientation === "horizontal" ? "w-full h-px" : "h-full w-px",
        className
      )}
      {...props}
    />
  )
}
