import { clsx } from "clsx"
import type { ReactNode } from "react"
import {
  Tab as AriaTab,
  TabList as AriaTabList,
  TabPanel as AriaTabPanel,
  Tabs as AriaTabs
} from "react-aria-components"

export interface TabsProps {
  /** タブのコンテンツ（TabList + TabPanel）。 */
  children: ReactNode
  /** 選択中のタブキー（制御モード）。 */
  selectedKey?: string
  /** 初期選択タブキー。 */
  defaultSelectedKey?: string
  /** タブ変更コールバック。 */
  onSelectionChange?: (key: string) => void
  className?: string
}

export interface TabListProps {
  children: ReactNode
  className?: string
  "aria-label"?: string
}

export interface TabProps {
  id: string
  children: ReactNode
  className?: string
}

export interface TabPanelProps {
  id: string
  children: ReactNode
  className?: string
}

/**
 * タブナビゲーション。関連コンテンツをパネルで切り替える。
 * react-aria-components ベースでキーボード矢印キー操作・ARIA対応。
 *
 * @summary Tabs, TabList, Tab, TabPanel で構成する。
 */
export function Tabs({
  children,
  selectedKey,
  defaultSelectedKey,
  onSelectionChange,
  className
}: TabsProps) {
  return (
    <AriaTabs
      selectedKey={selectedKey}
      defaultSelectedKey={defaultSelectedKey}
      onSelectionChange={onSelectionChange as (key: React.Key) => void}
      className={clsx("flex flex-col", className)}
    >
      {children}
    </AriaTabs>
  )
}

export function TabList({ children, className, ...props }: TabListProps) {
  return (
    <AriaTabList
      {...props}
      className={clsx("flex border-b border-stone-200", className)}
    >
      {children}
    </AriaTabList>
  )
}

export function Tab({ id, children, className }: TabProps) {
  return (
    <AriaTab
      id={id}
      className={renderProps =>
        clsx(
          "px-4 py-2 text-sm font-medium cursor-pointer outline-none transition-colors",
          "-mb-px border-b-2",
          renderProps.isSelected
            ? "border-stone-900 text-stone-900"
            : "border-transparent text-stone-500 hover:text-stone-700 hover:border-stone-300",
          renderProps.isFocusVisible &&
            "ring-2 ring-stone-900 ring-offset-2 rounded-t",
          renderProps.isDisabled && "opacity-50 cursor-not-allowed",
          className
        )
      }
    >
      {children}
    </AriaTab>
  )
}

export function TabPanel({ id, children, className }: TabPanelProps) {
  return (
    <AriaTabPanel id={id} className={clsx("pt-4 outline-none", className)}>
      {children}
    </AriaTabPanel>
  )
}
