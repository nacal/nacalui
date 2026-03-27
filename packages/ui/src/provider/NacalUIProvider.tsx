import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react"

export type Theme = "light" | "dark" | "system"

interface ThemeContextValue {
  /** 現在のテーマ設定。 */
  theme: Theme
  /** テーマを変更する。 */
  setTheme: (theme: Theme) => void
  /** 実際に適用されているテーマ（system の場合は解決後の値）。 */
  resolvedTheme: "light" | "dark"
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

/**
 * 現在のテーマを取得・変更するフック。
 */
export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    throw new Error("useTheme must be used within a NacalUIProvider")
  }
  return ctx
}

export interface NacalUIProviderProps {
  /** 初期テーマ。 @default "system" */
  defaultTheme?: Theme
  /** アプリのコンテンツ。 */
  children: ReactNode
}

/**
 * nacalui のルートプロバイダー。
 * テーマ管理（light/dark/system）を提供し、data-theme 属性を自動設定する。
 *
 * @example
 * ```tsx
 * import { NacalUIProvider } from "@nacalui/ui"
 * import "@nacalui/ui/styles"
 *
 * function App() {
 *   return (
 *     <NacalUIProvider>
 *       <YourApp />
 *     </NacalUIProvider>
 *   )
 * }
 * ```
 */
export function NacalUIProvider({
  defaultTheme = "system",
  children
}: NacalUIProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)
  const [systemTheme, setSystemTheme] = useState<"light" | "dark">("light")

  // OS のカラースキーム変更を監視
  useEffect(() => {
    const mql = window.matchMedia("(prefers-color-scheme: dark)")
    setSystemTheme(mql.matches ? "dark" : "light")

    const handler = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? "dark" : "light")
    }
    mql.addEventListener("change", handler)
    return () => mql.removeEventListener("change", handler)
  }, [])

  const resolvedTheme = theme === "system" ? systemTheme : theme

  // data-theme 属性を設定
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", resolvedTheme)
  }, [resolvedTheme])

  const handleSetTheme = useCallback((t: Theme) => {
    setTheme(t)
  }, [])

  const value = useMemo(
    () => ({ theme, setTheme: handleSetTheme, resolvedTheme }),
    [theme, handleSetTheme, resolvedTheme]
  )

  return <ThemeContext value={value}>{children}</ThemeContext>
}
