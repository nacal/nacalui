import { clsx } from "clsx"
import type { ReactNode } from "react"
import "./accordion.css"

export interface AccordionProps {
  /** AccordionItem を渡す。 */
  children: ReactNode
  /** 複数同時に開けるか。 @default false */
  allowMultiple?: boolean
  className?: string
}

export interface AccordionItemProps {
  /** ヘッダーに表示するテキスト。 */
  title: string
  /** パネルのコンテンツ。 */
  children: ReactNode
  /** デフォルトで開いた状態にする。 */
  defaultOpen?: boolean
  className?: string
}

/**
 * アコーディオン。コンテンツを折りたたみ/展開する。
 *
 * @summary AccordionItem を並べて使う。
 */
export function Accordion({ children, className }: AccordionProps) {
  return (
    <div className={clsx("divide-y divide-stone-200", className)}>
      {children}
    </div>
  )
}

export function AccordionItem({
  title,
  children,
  defaultOpen = false,
  className
}: AccordionItemProps) {
  return (
    <details
      open={defaultOpen || undefined}
      className={clsx("nacalui-accordion-item group", className)}
    >
      <summary className="flex items-center justify-between py-4 cursor-pointer list-none text-sm font-medium text-stone-900 hover:text-stone-700 outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-2 rounded">
        {title}
        <span
          className="i-lucide-chevron-down text-stone-400 text-base transition-transform duration-200 group-open:rotate-180"
          aria-hidden="true"
        />
      </summary>
      <div className="pb-4 text-sm text-stone-600">{children}</div>
    </details>
  )
}
