import { clsx } from "clsx"
import type { ReactNode } from "react"
import {
  Button as AriaButton,
  Tooltip as AriaTooltip,
  OverlayArrow,
  TooltipTrigger,
  type TooltipTriggerComponentProps
} from "react-aria-components"
import "./tooltip.css"

export interface TooltipProps
  extends Omit<TooltipTriggerComponentProps, "children"> {
  content: ReactNode
  children: ReactNode
  placement?: "top" | "bottom" | "left" | "right"
}

export function Tooltip({
  content,
  children,
  placement = "top",
  delay = 300,
  ...props
}: TooltipProps) {
  return (
    <TooltipTrigger delay={delay} {...props}>
      <AriaButton className="outline-none cursor-default">
        {children}
      </AriaButton>
      <AriaTooltip
        placement={placement}
        className={clsx(
          "nacalui-tooltip",
          "bg-[var(--color-fg-primary)] text-white text-xs px-2.5 py-1.5 rounded-lg shadow-lg",
          "max-w-xs"
        )}
      >
        <OverlayArrow>
          <svg
            width={12}
            height={6}
            viewBox="0 0 12 6"
            className="fill-[var(--color-fg-primary)]"
            aria-hidden="true"
          >
            <path d="M0 0L6 6L12 0" />
          </svg>
        </OverlayArrow>
        {content}
      </AriaTooltip>
    </TooltipTrigger>
  )
}
