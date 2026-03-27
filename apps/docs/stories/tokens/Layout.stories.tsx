import type { Meta, StoryObj } from "@storybook/react";
import { breakpoint, container, grid, spacing } from "@nacalui/tokens";

function BreakpointTable() {
  return (
    <div>
      <h3 className="text-lg font-semibold text-stone-800 mb-3">
        Breakpoints
      </h3>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-stone-200">
            <th className="text-left py-2 text-stone-500 font-medium">Name</th>
            <th className="text-left py-2 text-stone-500 font-medium">
              Min Width
            </th>
            <th className="text-left py-2 text-stone-500 font-medium">
              UnoCSS Prefix
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-stone-100">
            <td className="py-2 font-mono text-stone-800">-</td>
            <td className="py-2 font-mono text-stone-600">0px</td>
            <td className="py-2 font-mono text-stone-600">(default)</td>
          </tr>
          {Object.entries(breakpoint).map(([name, value]) => (
            <tr key={name} className="border-b border-stone-100">
              <td className="py-2 font-mono text-stone-800">{name}</td>
              <td className="py-2 font-mono text-stone-600">{value}</td>
              <td className="py-2 font-mono text-stone-600">{name}:</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ContainerTable() {
  return (
    <div>
      <h3 className="text-lg font-semibold text-stone-800 mb-3">
        Container Max Widths
      </h3>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-stone-200">
            <th className="text-left py-2 text-stone-500 font-medium">Name</th>
            <th className="text-left py-2 text-stone-500 font-medium">
              Max Width
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(container).map(([name, value]) => (
            <tr key={name} className="border-b border-stone-100">
              <td className="py-2 font-mono text-stone-800">{name}</td>
              <td className="py-2 font-mono text-stone-600">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function GridSpec() {
  return (
    <div>
      <h3 className="text-lg font-semibold text-stone-800 mb-3">Grid</h3>
      <table className="w-full text-sm mb-6">
        <tbody>
          <tr className="border-b border-stone-100">
            <td className="py-2 text-stone-500 font-medium w-32">Columns</td>
            <td className="py-2 font-mono text-stone-800">{grid.columns}</td>
          </tr>
          <tr className="border-b border-stone-100">
            <td className="py-2 text-stone-500 font-medium">Gutter</td>
            <td className="py-2 font-mono text-stone-800">{grid.gutter}</td>
          </tr>
          <tr className="border-b border-stone-100">
            <td className="py-2 text-stone-500 font-medium">Margin</td>
            <td className="py-2 font-mono text-stone-800">{grid.margin}</td>
          </tr>
        </tbody>
      </table>

      <h4 className="text-sm font-semibold text-stone-700 mb-3">
        12 Column Grid Preview
      </h4>
      <div
        className="grid gap-0 mb-2"
        style={{
          gridTemplateColumns: `repeat(${grid.columns}, 1fr)`,
          gap: grid.gutter,
        }}
      >
        {Array.from({ length: grid.columns }).map((_, i) => (
          <div
            key={i}
            className="h-10 bg-blue-100 rounded flex items-center justify-center text-xs font-mono text-blue-600"
          >
            {i + 1}
          </div>
        ))}
      </div>

      <h4 className="text-sm font-semibold text-stone-700 mb-3 mt-6">
        Common Layouts
      </h4>
      <div className="space-y-3">
        {[
          { label: "6 + 6", cols: [6, 6] },
          { label: "4 + 8", cols: [4, 8] },
          { label: "3 + 6 + 3", cols: [3, 6, 3] },
          { label: "3 + 3 + 3 + 3", cols: [3, 3, 3, 3] },
        ].map(({ label, cols }) => (
          <div key={label}>
            <div className="text-xs text-stone-400 font-mono mb-1">
              {label}
            </div>
            <div
              className="grid"
              style={{
                gridTemplateColumns: `repeat(${grid.columns}, 1fr)`,
                gap: grid.gutter,
              }}
            >
              {cols.map((span, i) => (
                <div
                  key={i}
                  className="h-8 bg-sage-100 rounded flex items-center justify-center text-xs font-mono text-sage-600"
                  style={{ gridColumn: `span ${span}` }}
                >
                  {span} col
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BreakpointVisualizer() {
  return (
    <div>
      <h3 className="text-lg font-semibold text-stone-800 mb-3">
        Current Viewport
      </h3>
      <p className="text-sm text-stone-500 mb-3">
        ブラウザの幅を変えて、アクティブなブレークポイントを確認してください。
      </p>
      <div className="space-y-2">
        <div className="sm:hidden px-3 py-2 bg-blue-100 text-blue-700 rounded text-sm font-medium">
          xs (0 - 639px)
        </div>
        <div className="hidden sm:block md:hidden px-3 py-2 bg-blue-100 text-blue-700 rounded text-sm font-medium">
          sm (640px - 767px)
        </div>
        <div className="hidden md:block lg:hidden px-3 py-2 bg-blue-100 text-blue-700 rounded text-sm font-medium">
          md (768px - 1023px)
        </div>
        <div className="hidden lg:block xl:hidden px-3 py-2 bg-blue-100 text-blue-700 rounded text-sm font-medium">
          lg (1024px - 1279px)
        </div>
        <div className="hidden xl:block 2xl:hidden px-3 py-2 bg-blue-100 text-blue-700 rounded text-sm font-medium">
          xl (1280px - 1535px)
        </div>
        <div className="hidden 2xl:block px-3 py-2 bg-blue-100 text-blue-700 rounded text-sm font-medium">
          2xl (1536px+)
        </div>
      </div>
    </div>
  );
}

function LayoutShowcase() {
  return (
    <div className="space-y-8 p-6 max-w-4xl">
      <h2 className="text-2xl font-bold text-stone-900">Layout</h2>
      <BreakpointTable />
      <hr className="border-stone-200" />
      <ContainerTable />
      <hr className="border-stone-200" />
      <GridSpec />
      <hr className="border-stone-200" />
      <BreakpointVisualizer />
    </div>
  );
}

const meta: Meta = {
  title: "Tokens/Layout",
  component: LayoutShowcase,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
