import { clsx } from "clsx"
import type { ReactNode } from "react"
import {
  Dialog as AriaDialog,
  DialogTrigger,
  Heading,
  Modal,
  ModalOverlay
} from "react-aria-components"
import "./dialog.css"

export interface DialogProps {
  /** トリガーとなる要素。 */
  trigger: ReactNode
  /** ダイアログのタイトル。 */
  title: string
  /** ダイアログのコンテンツ。 */
  children: ReactNode | ((opts: { close: () => void }) => ReactNode)
  /** 開閉状態（制御モード）。 */
  isOpen?: boolean
  /** 開閉状態変更コールバック。 */
  onOpenChange?: (isOpen: boolean) => void
  /** ダイアログの役割。 @default "dialog" */
  role?: "dialog" | "alertdialog"
  /** 閉じるボタンを非表示にするか。 @default false */
  isDismissable?: boolean
  className?: string
}

/**
 * モーダルダイアログ。ユーザーの注意を集中させる場面で使う。
 * react-aria-components ベースでフォーカストラップ・Escape閉じ・スクリーンリーダー対応。
 *
 * @summary トリガー要素をクリックするとオーバーレイ付きダイアログが開く。
 */
export function Dialog({
  trigger,
  title,
  children,
  isOpen,
  onOpenChange,
  role = "dialog",
  isDismissable = true,
  className
}: DialogProps) {
  return (
    <DialogTrigger isOpen={isOpen} onOpenChange={onOpenChange}>
      {trigger}
      <ModalOverlay
        className="nacalui-dialog-overlay fixed inset-0 z-50 flex items-center justify-center bg-black/40"
        isDismissable={isDismissable}
      >
        <Modal className="nacalui-dialog-modal outline-none">
          <AriaDialog
            role={role}
            className={clsx(
              "relative bg-white rounded-xl shadow-xl p-6 outline-none",
              "w-[90vw] max-w-md max-h-[85vh] overflow-auto",
              className
            )}
          >
            {({ close }) => (
              <>
                <Heading
                  slot="title"
                  className="text-lg font-semibold text-stone-900 mb-4 pr-8"
                >
                  {title}
                </Heading>
                {isDismissable && (
                  <button
                    type="button"
                    onClick={close}
                    className="absolute top-4 right-4 p-1 rounded-md text-stone-400 hover:text-stone-600 hover:bg-stone-100 transition-colors"
                    aria-label="閉じる"
                  >
                    <span className="i-lucide-x text-lg" />
                  </button>
                )}
                <div className="text-sm text-stone-600">
                  {typeof children === "function"
                    ? children({ close })
                    : children}
                </div>
              </>
            )}
          </AriaDialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  )
}
