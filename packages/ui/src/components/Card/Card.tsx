import { clsx } from "clsx"
import type { HTMLAttributes, ReactNode } from "react"

export type CardVariant = "elevated" | "outlined" | "filled"

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** カードの見た目。 @default "elevated" */
  variant?: CardVariant
  /** カードのコンテンツ。 */
  children: ReactNode
}

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

const variantStyles: Record<CardVariant, string> = {
  elevated:
    "bg-[var(--color-bg-primary)] shadow-base border border-[var(--color-border-default)]",
  outlined:
    "bg-[var(--color-bg-primary)] border border-[var(--color-border-default)]",
  filled:
    "bg-[var(--color-bg-secondary)] border border-[var(--color-border-default)]"
}

/**
 * コンテンツをグループ化するコンテナ。
 *
 * @summary Card, CardHeader, CardBody, CardFooter で構成する。
 */
export function Card({
  variant = "elevated",
  children,
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-xl overflow-hidden",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ children, className, ...props }: CardHeaderProps) {
  return (
    <div className={clsx("px-6 pt-6 pb-2", className)} {...props}>
      {children}
    </div>
  )
}

export function CardBody({ children, className, ...props }: CardBodyProps) {
  return (
    <div className={clsx("px-6 py-2", className)} {...props}>
      {children}
    </div>
  )
}

export function CardFooter({ children, className, ...props }: CardFooterProps) {
  return (
    <div
      className={clsx("px-6 pb-6 pt-2 flex items-center gap-2", className)}
      {...props}
    >
      {children}
    </div>
  )
}
