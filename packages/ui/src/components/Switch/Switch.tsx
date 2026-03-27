import { clsx } from "clsx"
import {
  Switch as AriaSwitch,
  type SwitchProps as AriaSwitchProps
} from "react-aria-components"

export interface SwitchProps extends AriaSwitchProps {
  /** スイッチのラベル。 */
  children?: React.ReactNode
}

/**
 * トグルスイッチ。即座に反映されるオン/オフの切り替えに使う。
 * react-aria-components ベースでキーボード・スクリーンリーダー対応。
 *
 * @summary ラベル付きトグルスイッチ。
 */
export function Switch({ children, className, ...props }: SwitchProps) {
  return (
    <AriaSwitch
      {...props}
      className={renderProps =>
        clsx(
          "group flex items-center gap-3 text-sm text-stone-800 cursor-pointer",
          renderProps.isDisabled && "opacity-50 cursor-not-allowed",
          typeof className === "function" ? className(renderProps) : className
        )
      }
    >
      {renderProps => (
        <>
          <div
            className={clsx(
              "w-10 h-6 rounded-full p-0.5 transition-all duration-200",
              renderProps.isSelected ? "bg-stone-900" : "bg-stone-300",
              renderProps.isFocusVisible &&
                "ring-2 ring-stone-900 ring-offset-2"
            )}
          >
            <div
              className={clsx(
                "w-5 h-5 rounded-full bg-white shadow-sm transition-transform duration-200",
                renderProps.isSelected && "translate-x-4"
              )}
            />
          </div>
          {children}
        </>
      )}
    </AriaSwitch>
  )
}
