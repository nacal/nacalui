import { clsx } from "clsx"
import type { ReactNode } from "react"
import {
  Breadcrumb as AriaBreadcrumb,
  Breadcrumbs as AriaBreadcrumbs,
  type BreadcrumbsProps as AriaBreadcrumbsProps,
  Link as AriaLink
} from "react-aria-components"

export interface BreadcrumbsProps<T extends object>
  extends AriaBreadcrumbsProps<T> {
  children: ReactNode
  className?: string
}

export interface BreadcrumbItemProps {
  /** リンク先。省略すると現在のページ。 */
  href?: string
  /** ラベル。 */
  children: ReactNode
}

/**
 * パンくずリスト。ページ階層を示すナビゲーション。
 * react-aria-components ベースでスクリーンリーダー対応。
 *
 * @summary Breadcrumbs + BreadcrumbItem で構成する。
 */
export function Breadcrumbs<T extends object>({
  children,
  className,
  ...props
}: BreadcrumbsProps<T>) {
  return (
    <AriaBreadcrumbs
      {...props}
      className={clsx("flex items-center gap-1 text-sm", className)}
    >
      {children}
    </AriaBreadcrumbs>
  )
}

export function BreadcrumbItem({ href, children }: BreadcrumbItemProps) {
  return (
    <AriaBreadcrumb className="flex items-center gap-1">
      <AriaLink
        href={href}
        className={renderProps =>
          clsx(
            "outline-none transition-colors",
            renderProps.isCurrent
              ? "text-[var(--color-fg-primary)] font-medium cursor-default"
              : "text-[var(--color-fg-secondary)] hover:text-[var(--color-fg-primary)] cursor-pointer",
            renderProps.isFocusVisible &&
              "ring-2 ring-[var(--color-fg-primary)] ring-offset-2 rounded"
          )
        }
      >
        {children}
      </AriaLink>
      <span
        className="i-lucide-chevron-right text-[var(--color-fg-tertiary)] text-xs last:hidden"
        aria-hidden="true"
      />
    </AriaBreadcrumb>
  )
}
