import { type ReactNode, type CSSProperties } from "react";
import {
  Button as AriaButton,
  type ButtonProps as AriaButtonProps,
} from "react-aria-components";
import { clsx } from "clsx";
import { intentColors } from "@nacalui/tokens";
import "./button.css";

export type ButtonIntent = "primary" | "secondary" | "danger" | "success" | "warning";
export type ButtonVariant = "filled" | "outline" | "light" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends AriaButtonProps {
  /** ボタンの意味。色はこの値に応じて自動で決まる。 @default "primary" */
  intent?: ButtonIntent;
  /** ボタンの見た目のスタイル。 @default "filled" */
  variant?: ButtonVariant;
  /** ボタンのサイズ。 @default "md" */
  size?: ButtonSize;
  /** ボタンテキストの左に表示するアイコン。 */
  icon?: ReactNode;
  /** ボタンテキストの右に表示するアイコン。 */
  iconRight?: ReactNode;
  /** true の場合スピナーを表示し、自動的に disabled になる。 @default false */
  loading?: boolean;
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-sm gap-1.5 rounded-md",
  md: "h-10 px-4 text-sm gap-2 rounded-lg",
  lg: "h-12 px-6 text-base gap-2 rounded-xl",
};

const tokens = intentColors.light;

function getTokenVars(intent: ButtonIntent, variant: ButtonVariant): CSSProperties {
  const t = tokens[intent];

  switch (variant) {
    case "filled":
      return {
        "--btn-bg": t.base,
        "--btn-bg-hover": t.hover,
        "--btn-bg-active": t.hover,
        "--btn-color": t.contrast,
        "--btn-border": "transparent",
      } as CSSProperties;
    case "outline":
      return {
        "--btn-bg": "transparent",
        "--btn-bg-hover": t.light,
        "--btn-bg-active": t.lightHover,
        "--btn-color": t.fg,
        "--btn-border": t.base,
      } as CSSProperties;
    case "light":
      return {
        "--btn-bg": t.light,
        "--btn-bg-hover": t.lightHover,
        "--btn-bg-active": t.lightHover,
        "--btn-color": t.fg,
        "--btn-border": "transparent",
      } as CSSProperties;
    case "ghost":
      return {
        "--btn-bg": "transparent",
        "--btn-bg-hover": t.light,
        "--btn-bg-active": t.lightHover,
        "--btn-color": t.fg,
        "--btn-border": "transparent",
      } as CSSProperties;
  }
}

/**
 * アクションを実行するためのボタンコンポーネント。
 * react-aria-components ベースでアクセシビリティを担保。
 *
 * @summary intent（意味）で色を、variant（見た目）でスタイルを制御する。
 */
export function Button({
  intent = "primary",
  variant = "filled",
  size = "md",
  icon,
  iconRight,
  loading = false,
  isDisabled,
  children,
  className,
  style,
  ...props
}: ButtonProps) {
  const disabled = isDisabled || loading;
  const tokenVars = getTokenVars(intent, variant);

  return (
    <AriaButton
      data-nacalui-btn=""
      isDisabled={disabled}
      className={(renderProps) =>
        clsx(
          "inline-flex items-center justify-center font-medium",
          "transition-all duration-200",
          "cursor-pointer",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          variant === "outline" && "border",
          sizeStyles[size],
          renderProps.isDisabled && "opacity-50 cursor-not-allowed",
          renderProps.isFocusVisible && "ring-2 ring-offset-2",
          typeof className === "function" ? className(renderProps) : className,
        )
      }
      style={{ ...tokenVars, ...style }}
      {...props}
    >
      {(renderProps) => (
        <>
          {loading ? (
            <span className="i-lucide-loader-2 animate-spin" aria-hidden="true" />
          ) : icon ? (
            <span aria-hidden="true">{icon}</span>
          ) : null}
          {typeof children === "function" ? children(renderProps) : children}
          {iconRight && !loading ? (
            <span aria-hidden="true">{iconRight}</span>
          ) : null}
        </>
      )}
    </AriaButton>
  );
}
