import { intentColors } from "@nacalui/tokens"
import { clsx } from "clsx"
import type { CSSProperties, HTMLAttributes, ReactNode } from "react"

export type AlertIntent = "primary" | "danger" | "success" | "warning"

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  /** アラートの意味。 @default "primary" */
  intent?: AlertIntent
  /** タイトル。 */
  title?: string
  /** アイコン。 */
  icon?: ReactNode
  /** アラートのコンテンツ。 */
  children: ReactNode
}

const tokens = intentColors.light

const intentIcons: Record<AlertIntent, string> = {
  primary: "i-lucide-info",
  danger: "i-lucide-alert-circle",
  success: "i-lucide-check-circle",
  warning: "i-lucide-alert-triangle"
}

function getAlertVars(intent: AlertIntent): CSSProperties {
  const t = tokens[intent]
  return {
    "--alert-bg": t.light,
    "--alert-border": t.base,
    "--alert-icon": t.fg,
    "--alert-title": t.fg
  } as CSSProperties
}

/**
 * インラインアラート。ユーザーに重要な情報を伝える。
 * Toast と違い、ページ内に常に表示される。
 *
 * @summary intent で色を制御するインラインアラート。
 */
export function Alert({
  intent = "primary",
  title,
  icon,
  children,
  className,
  style,
  ...props
}: AlertProps) {
  const vars = getAlertVars(intent)
  const defaultIcon = intentIcons[intent]

  return (
    <div
      role="alert"
      className={clsx("flex gap-3 p-4 rounded-lg border-l-4", className)}
      style={{
        backgroundColor: "var(--alert-bg)",
        borderLeftColor: "var(--alert-border)",
        ...vars,
        ...style
      }}
      {...props}
    >
      <span
        className={clsx(icon ? "" : defaultIcon, "text-lg shrink-0 mt-0.5")}
        style={{ color: "var(--alert-icon)" }}
        aria-hidden="true"
      >
        {icon}
      </span>
      <div className="flex-1 min-w-0">
        {title && (
          <div
            className="text-sm font-semibold mb-1"
            style={{ color: "var(--alert-title)" }}
          >
            {title}
          </div>
        )}
        <div className="text-sm text-stone-700">{children}</div>
      </div>
    </div>
  )
}
