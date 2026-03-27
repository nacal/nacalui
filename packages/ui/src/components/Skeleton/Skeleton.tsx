import { clsx } from "clsx"
import type { HTMLAttributes } from "react"
import "./skeleton.css"

export type SkeletonVariant = "text" | "circular" | "rectangular"

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  /** 形状。 @default "text" */
  variant?: SkeletonVariant
  /** 幅。CSS値で指定。 @default "100%" */
  width?: string | number
  /** 高さ。CSS値で指定。 */
  height?: string | number
}

const variantStyles: Record<SkeletonVariant, string> = {
  text: "rounded-md h-4",
  circular: "rounded-full",
  rectangular: "rounded-lg"
}

/**
 * ローディングプレースホルダー。コンテンツ読み込み中に表示する。
 * アニメーション付きのパルスエフェクト。
 *
 * @summary text, circular, rectangular の3バリアント。
 */
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
        "nacalui-skeleton bg-stone-200",
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
