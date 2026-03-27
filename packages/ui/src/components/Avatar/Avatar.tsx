import { clsx } from "clsx"
import type { HTMLAttributes } from "react"

export type AvatarSize = "sm" | "md" | "lg"

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  /** 画像URL。未指定の場合はフォールバックを表示。 */
  src?: string
  /** 代替テキスト。 */
  alt?: string
  /** フォールバックに表示するイニシャル（1-2文字）。 */
  fallback?: string
  /** サイズ。 @default "md" */
  size?: AvatarSize
}

const sizeStyles: Record<AvatarSize, { container: string; text: string }> = {
  sm: { container: "w-8 h-8", text: "text-xs" },
  md: { container: "w-10 h-10", text: "text-sm" },
  lg: { container: "w-14 h-14", text: "text-base" }
}

/**
 * ユーザーやエンティティを表すアバター。
 * 画像、イニシャルフォールバック、デフォルトアイコンの3段階。
 *
 * @summary 画像 or イニシャルフォールバックを表示する丸型アバター。
 */
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
        "inline-flex items-center justify-center rounded-full overflow-hidden bg-stone-200 text-stone-600 font-medium shrink-0",
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
