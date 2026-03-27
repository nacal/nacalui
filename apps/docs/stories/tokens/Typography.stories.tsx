import type { Meta, StoryObj } from "@storybook/react";
import {
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
} from "@nacalui/tokens";

function TypographyShowcase() {
  return (
    <div className="space-y-8 p-6 max-w-4xl">
      <div>
        <h2 className="text-2xl font-bold text-stone-900 mb-4">Font Family</h2>
        <div className="space-y-3">
          {Object.entries(fontFamily).map(([name, value]) => (
            <div key={name}>
              <div className="text-xs text-stone-500 font-mono mb-1">
                {name}
              </div>
              <div className="text-lg text-stone-800" style={{ fontFamily: value }}>
                The quick brown fox jumps over the lazy dog
              </div>
              <div className="text-lg text-stone-800" style={{ fontFamily: value }}>
                素早い茶色の狐が怠惰な犬を飛び越える
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-stone-200" />

      <div>
        <h2 className="text-2xl font-bold text-stone-900 mb-4">Font Size</h2>
        <div className="space-y-3">
          {Object.entries(fontSize).map(([name, value]) => (
            <div key={name} className="flex items-baseline gap-4">
              <div className="text-xs text-stone-500 font-mono w-16 shrink-0">
                {name}
              </div>
              <div className="text-stone-800" style={{ fontSize: value }}>
                Design System — {value}
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-stone-200" />

      <div>
        <h2 className="text-2xl font-bold text-stone-900 mb-4">Font Weight</h2>
        <div className="space-y-2">
          {Object.entries(fontWeight).map(([name, value]) => (
            <div key={name} className="flex items-baseline gap-4">
              <div className="text-xs text-stone-500 font-mono w-20 shrink-0">
                {name}
              </div>
              <div
                className="text-lg text-stone-800"
                style={{ fontWeight: value }}
              >
                Design System — {value}
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-stone-200" />

      <div>
        <h2 className="text-2xl font-bold text-stone-900 mb-4">
          Line Height
        </h2>
        <div className="space-y-4">
          {Object.entries(lineHeight).map(([name, value]) => (
            <div key={name}>
              <div className="text-xs text-stone-500 font-mono mb-1">
                {name} ({value})
              </div>
              <div
                className="text-base text-stone-800 max-w-md bg-stone-50 p-3 rounded"
                style={{ lineHeight: value }}
              >
                デザインシステムは、一貫したユーザー体験を提供するための基盤です。カラー、タイポグラフィ、スペーシングなどのトークンを定義します。
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-stone-200" />

      <div>
        <h2 className="text-2xl font-bold text-stone-900 mb-4">
          Letter Spacing
        </h2>
        <div className="space-y-2">
          {Object.entries(letterSpacing).map(([name, value]) => (
            <div key={name} className="flex items-baseline gap-4">
              <div className="text-xs text-stone-500 font-mono w-16 shrink-0">
                {name}
              </div>
              <div
                className="text-lg text-stone-800"
                style={{ letterSpacing: value }}
              >
                DESIGN SYSTEM — {value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const meta: Meta = {
  title: "Tokens/Typography",
  component: TypographyShowcase,
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
