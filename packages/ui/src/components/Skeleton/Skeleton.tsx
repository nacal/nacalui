import { clsx } from "clsx"
import type { HTMLAttributes } from "react"
import "./skeleton.css"

export type SkeletonVariant = "text" | "circular" | "rectangular"

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  variant?: SkeletonVariant
  width?: string | number
  height?: string | number
}

const variantStyles: Record<SkeletonVariant, string> = {
  text: "rounded-md h-4",
  circular: "rounded-full",
  rectangular: "rounded-lg"
}

export function Skeleton({
  variant = "text",
  width,
  height,
  className,
  style,
  ...props
}: SkeletonProps) {
  return (
    <div
      className={clsx(
        "nacalui-skeleton bg-[var(--color-bg-tertiary)]",
        variantStyles[variant],
        className
      )}
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
        ...style
      }}
      aria-hidden="true"
      {...props}
    />
  )
}
