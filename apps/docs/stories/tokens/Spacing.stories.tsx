import type { Meta, StoryObj } from "@storybook/react";
import { spacing } from "@nacalui/tokens";

function SpacingShowcase() {
  return (
    <div className="space-y-8 p-6 max-w-4xl">
      <h2 className="text-2xl font-bold text-stone-900 mb-4">Spacing Scale</h2>
      <div className="space-y-3">
        {Object.entries(spacing).map(([name, value]) => (
          <div key={name} className="flex items-center gap-4">
            <div className="text-xs text-stone-500 font-mono w-12 shrink-0 text-right">
              {name}
            </div>
            <div
              className="h-4 bg-blue-500 rounded-sm"
              style={{ width: value === "0" ? "1px" : value }}
            />
            <div className="text-xs text-stone-400 font-mono">{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const meta: Meta = {
  title: "Tokens/Spacing",
  component: SpacingShowcase,
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
