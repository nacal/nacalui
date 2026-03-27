import { elevation } from "@nacalui/tokens"
import type { Meta, StoryObj } from "@storybook/react"

function ElevationShowcase() {
  return (
    <div className="space-y-8 p-6 max-w-4xl">
      <h2 className="text-2xl font-bold text-stone-900 mb-4">Elevation</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {Object.entries(elevation).map(([name, value]) => (
          <div
            key={name}
            className="bg-white rounded-lg p-6 flex flex-col items-center gap-2"
            style={{ boxShadow: value }}
          >
            <div className="text-sm font-medium text-stone-800">{name}</div>
            <div className="text-xs text-stone-400 font-mono text-center break-all">
              {value}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const meta: Meta = {
  title: "Tokens/Elevation",
  component: ElevationShowcase
}

export default meta

type Story = StoryObj

export const Default: Story = {}
