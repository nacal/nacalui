import { clsx } from "clsx"
import {
  type CSSProperties,
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useRef,
  useState
} from "react"
import { intentVar, semanticVar } from "../../utils/intent-vars"
import "./toast.css"

export type ToastIntent = "primary" | "success" | "danger" | "warning"

export interface ToastData {
  id: string
  title: string
  description?: string
  intent?: ToastIntent
  duration?: number
}

interface ToastContextValue {
  toast: (data: Omit<ToastData, "id">) => void
}

const ToastContext = createContext<ToastContextValue | null>(null)

export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext)
  if (!ctx) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  return ctx
}

export interface ToastProviderProps {
  children: ReactNode
}

function getToastVars(intent: ToastIntent): CSSProperties {
  return {
    "--toast-bg": semanticVar("bg", "primary"),
    "--toast-border": intentVar(intent, "base"),
    "--toast-title": intentVar(intent, "fg")
  } as CSSProperties
}

/**
 * トースト通知のプロバイダー。アプリのルートに配置する。
 * useToast() フックで任意の場所からトーストを表示できる。
 *
 * @summary ToastProvider + useToast() でトースト通知を管理する。
 */
export function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastData[]>([])
  const counterRef = useRef(0)

  const addToast = useCallback((data: Omit<ToastData, "id">) => {
    const id = String(++counterRef.current)
    const toast: ToastData = { id, intent: "primary", duration: 4000, ...data }
    setToasts(prev => [...prev, toast])

    if (toast.duration && toast.duration > 0) {
      setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== id))
      }, toast.duration)
    }
  }, [])

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id))
  }, [])

  return (
    <ToastContext value={{ toast: addToast }}>
      {children}
      <section
        className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-sm"
        aria-live="polite"
        aria-label="通知"
      >
        {toasts.map(t => (
          <ToastItem key={t.id} data={t} onClose={() => removeToast(t.id)} />
        ))}
      </section>
    </ToastContext>
  )
}

function ToastItem({
  data,
  onClose
}: {
  data: ToastData
  onClose: () => void
}) {
  const vars = getToastVars(data.intent ?? "primary")

  return (
    <div
      className={clsx(
        "nacalui-toast",
        "border rounded-lg shadow-lg p-4 pr-10 relative",
        "border-l-4"
      )}
      style={{
        backgroundColor: "var(--toast-bg)",
        ...vars
      }}
      role="alert"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-2 right-2 p-1 rounded transition-colors"
        style={{ color: semanticVar("fg", "tertiary") }}
        aria-label="閉じる"
      >
        <span className="i-lucide-x text-sm" />
      </button>
      <div
        className="text-sm font-medium"
        style={{ color: "var(--toast-title)" }}
      >
        {data.title}
      </div>
      {data.description && (
        <div
          className="text-xs mt-1"
          style={{ color: semanticVar("fg", "secondary") }}
        >
          {data.description}
        </div>
      )}
    </div>
  )
}
