import { radius } from "@nacalui/tokens"
import type { Meta, StoryObj } from "@storybook/react"

function RadiusShowcase() {
  return (
    <div className="space-y-8 p-6 max-w-4xl">
      <h2 className="text-2xl font-bold text-stone-900 mb-4">Border Radius</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {Object.entries(radius).map(([name, value]) => (
          <div key={name} className="flex flex-col items-center gap-2">
            <div
              className="w-20 h-20 bg-blue-500"
              style={{ borderRadius: value }}
            />
            <div className="text-sm font-medium text-stone-800">{name}</div>
            <div className="text-xs text-stone-400 font-mono">{value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

const meta: Meta = {
  title: "Tokens/Radius",
  component: RadiusShowcase
}

export default meta

type Story = StoryObj

export const Default: Story = {}
