import { clsx } from "clsx"
import {
  Checkbox as AriaCheckbox,
  type CheckboxProps as AriaCheckboxProps
} from "react-aria-components"
import "./checkbox.css"

export interface CheckboxProps extends AriaCheckboxProps {
  /** チェックボックスのラベル。 */
  children?: React.ReactNode
}

/**
 * チェックボックス。単一の真偽値の入力に使う。
 * react-aria-components ベースでキーボード・スクリーンリーダー対応。
 *
 * @summary ラベル付きチェックボックス。
 */
export function Checkbox({ children, className, ...props }: CheckboxProps) {
  return (
    <AriaCheckbox
      {...props}
      className={renderProps =>
        clsx(
          "nacalui-checkbox",
          "group flex items-center gap-2 text-sm text-[var(--color-fg-primary)] cursor-pointer",
          renderProps.isDisabled && "opacity-50 cursor-not-allowed",
          typeof className === "function" ? className(renderProps) : className
        )
      }
    >
      {renderProps => (
        <>
          <div
            className={clsx(
              "flex items-center justify-center w-5 h-5 rounded-md border-2 transition-all duration-200",
              renderProps.isSelected || renderProps.isIndeterminate
                ? "bg-[var(--color-fg-primary)] border-[var(--color-fg-primary)] text-white"
                : "border-[var(--color-border-strong)] bg-[var(--color-bg-primary)]",
              renderProps.isFocusVisible &&
                "ring-2 ring-[var(--color-fg-primary)] ring-offset-2"
            )}
          >
            {renderProps.isIndeterminate ? (
              <span className="i-lucide-minus w-3 h-3" />
            ) : renderProps.isSelected ? (
              <span className="i-lucide-check w-3 h-3" />
            ) : null}
          </div>
          {children}
        </>
      )}
    </AriaCheckbox>
  )
}
