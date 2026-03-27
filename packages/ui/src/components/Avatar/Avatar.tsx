import { clsx } from "clsx"
import type { HTMLAttributes } from "react"

export type AvatarSize = "sm" | "md" | "lg"

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  fallback?: string
  size?: AvatarSize
}

const sizeStyles: Record<AvatarSize, { container: string; text: string }> = {
  sm: { container: "w-8 h-8", text: "text-xs" },
  md: { container: "w-10 h-10", text: "text-sm" },
  lg: { container: "w-14 h-14", text: "text-base" }
}

export function Avatar({
  src,
  alt = "",
  fallback,
  size = "md",
  className,
  ...props
}: AvatarProps) {
  const sizes = sizeStyles[size]
  return (
    <div
      className={clsx(
        "inline-flex items-center justify-center rounded-full overflow-hidden bg-[var(--color-bg-tertiary)] text-[var(--color-fg-secondary)] font-medium shrink-0",
        sizes.container,
        className
      )}
      {...props}
    >
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : fallback ? (
        <span className={sizes.text}>{fallback}</span>
      ) : (
        <span
          className={clsx("i-lucide-user", sizes.text)}
          aria-hidden="true"
        />
      )}
    </div>
  )
}
