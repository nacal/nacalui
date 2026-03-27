import { intentColors } from "@nacalui/tokens"
import { clsx } from "clsx"
import type { CSSProperties, HTMLAttributes, ReactNode } from "react"

export type BadgeIntent =
  | "primary"
  | "secondary"
  | "danger"
  | "success"
  | "warning"
export type BadgeVariant = "filled" | "light" | "outline"
export type BadgeSize = "sm" | "md"

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** バッジの意味。色はこの値に応じて自動で決まる。 @default "primary" */
  intent?: BadgeIntent
  /** バッジの見た目のスタイル。 @default "light" */
  variant?: BadgeVariant
  /** バッジのサイズ。 @default "sm" */
  size?: BadgeSize
  /** バッジのコンテンツ。 */
  children: ReactNode
}

const sizeStyles: Record<BadgeSize, string> = {
  sm: "px-2 py-0.5 text-xs rounded-md",
  md: "px-2.5 py-1 text-sm rounded-lg"
}

const tokens = intentColors.light

function getTokenVars(
  intent: BadgeIntent,
  variant: BadgeVariant
): CSSProperties {
  const t = tokens[intent]

  switch (variant) {
    case "filled":
      return {
        "--badge-bg": t.base,
        "--badge-color": t.contrast,
        "--badge-border": "transparent"
      } as CSSProperties
    case "light":
      return {
        "--badge-bg": t.light,
        "--badge-color": t.fg,
        "--badge-border": "transparent"
      } as CSSProperties
    case "outline":
      return {
        "--badge-bg": "transparent",
        "--badge-color": t.fg,
        "--badge-border": t.base
      } as CSSProperties
  }
}

/**
 * ステータスやカテゴリを示す小さなラベル。
 *
 * @summary intent で色を、variant で見た目を制御するインラインバッジ。
 */
export function Badge({
  intent = "primary",
  variant = "light",
  size = "sm",
  children,
  className,
  style,
  ...props
}: BadgeProps) {
  const tokenVars = getTokenVars(intent, variant)

  return (
    <span
      className={clsx(
        "inline-flex items-center font-medium",
        variant === "outline" && "border",
        sizeStyles[size],
        className
      )}
      style={{
        backgroundColor: "var(--badge-bg)",
        color: "var(--badge-color)",
        borderColor: "var(--badge-border)",
        ...tokenVars,
        ...style
      }}
      {...props}
    >
      {children}
    </span>
  )
}
