import { clsx } from "clsx"
import {
  Link as AriaLink,
  type LinkProps as AriaLinkProps
} from "react-aria-components"

export type LinkVariant = "default" | "muted" | "underline"

export interface LinkProps extends AriaLinkProps {
  /** リンクの見た目。 @default "default" */
  variant?: LinkVariant
}

const variantStyles: Record<LinkVariant, string> = {
  default:
    "text-[var(--color-fg-primary)] underline underline-offset-2 decoration-[var(--color-border-strong)] hover:decoration-[var(--color-fg-primary)]",
  muted:
    "text-[var(--color-fg-secondary)] hover:text-[var(--color-fg-primary)] no-underline",
  underline:
    "text-[var(--color-fg-primary)] underline underline-offset-4 hover:decoration-2"
}

/**
 * テキストリンク。ナビゲーションに使う。
 * react-aria-components ベースで適切な ARIA 属性を付与。
 *
 * @summary default, muted, underline の3バリアント。
 */
export function Link({ variant = "default", className, ...props }: LinkProps) {
  return (
    <AriaLink
      {...props}
      className={renderProps =>
        clsx(
          "text-sm transition-colors duration-200 outline-none cursor-pointer",
          renderProps.isFocusVisible &&
            "ring-2 ring-[var(--color-fg-primary)] ring-offset-2 rounded",
          renderProps.isDisabled && "opacity-50 cursor-not-allowed",
          variantStyles[variant],
          typeof className === "function" ? className(renderProps) : className
        )
      }
    />
  )
}
