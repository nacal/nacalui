import { clsx } from "clsx"
import type { ReactNode } from "react"
import {
  Button as AriaButton,
  type MenuItemProps as AriaMenuItemProps,
  Menu,
  MenuItem,
  MenuTrigger,
  Popover,
  Separator
} from "react-aria-components"
import "./dropdown-menu.css"

export interface DropdownMenuProps {
  /** トリガー要素。 */
  trigger: ReactNode
  /** メニュー項目。 */
  children: ReactNode
  /** メニューの配置。 @default "bottom start" */
  placement?: "bottom start" | "bottom end" | "top start" | "top end"
}

export interface DropdownMenuItemProps extends AriaMenuItemProps {
  /** メニュー項目のコンテンツ。 */
  children: ReactNode
  /** 破壊的操作を示す。 */
  isDanger?: boolean
}

/**
 * ドロップダウンメニュー。アクション一覧を表示する。
 * react-aria-components ベースでキーボード操作・スクリーンリーダー対応。
 *
 * @summary トリガーをクリックしてアクションメニューを開く。
 */
export function DropdownMenu({
  trigger,
  children,
  placement = "bottom start"
}: DropdownMenuProps) {
  return (
    <MenuTrigger>
      <AriaButton className="outline-none">{trigger}</AriaButton>
      <Popover
        placement={placement}
        className="nacalui-dropdown-popover bg-[var(--color-bg-primary)] border border-[var(--color-border-default)] rounded-lg shadow-lg overflow-hidden"
      >
        <Menu className="p-1 outline-none min-w-40">{children}</Menu>
      </Popover>
    </MenuTrigger>
  )
}

export function DropdownMenuItem({
  children,
  isDanger,
  className,
  ...props
}: DropdownMenuItemProps) {
  return (
    <MenuItem
      {...props}
      className={renderProps =>
        clsx(
          "px-3 py-2 text-sm rounded-md cursor-pointer outline-none transition-colors",
          isDanger ? "text-red-600" : "text-[var(--color-fg-primary)]",
          renderProps.isFocused &&
            (isDanger ? "bg-red-50" : "bg-[var(--color-bg-secondary)]"),
          renderProps.isDisabled && "opacity-50 cursor-not-allowed",
          typeof className === "function" ? className(renderProps) : className
        )
      }
    >
      {children}
    </MenuItem>
  )
}

export function DropdownMenuSeparator() {
  return <Separator className="my-1 h-px bg-[var(--color-border-default)]" />
}
