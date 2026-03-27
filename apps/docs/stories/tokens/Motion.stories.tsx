import { duration, easing } from "@nacalui/tokens"
import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"

function MotionShowcase() {
  const [active, setActive] = useState(false)

  return (
    <div className="space-y-8 p-6 max-w-4xl">
      <div className="flex gap-3">
        <button
          type="button"
          className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm"
          onClick={() => setActive(!active)}
        >
          Toggle Animation
        </button>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-stone-900 mb-4">Duration</h2>
        <div className="space-y-3">
          {Object.entries(duration).map(([name, value]) => (
            <div key={name} className="flex items-center gap-4">
              <div className="text-xs text-stone-500 font-mono w-16 shrink-0">
                {name}
              </div>
              <div className="relative h-8 flex-1 bg-stone-100 rounded overflow-hidden">
                <div
                  className="absolute top-0 h-full w-8 bg-blue-500 rounded"
                  style={{
                    transitionProperty: "left",
                    transitionDuration: value,
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                    left: active ? "calc(100% - 2rem)" : "0"
                  }}
                />
              </div>
              <div className="text-xs text-stone-400 font-mono w-12">
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-stone-200" />

      <div>
        <h2 className="text-2xl font-bold text-stone-900 mb-4">Easing</h2>
        <div className="space-y-3">
          {Object.entries(easing).map(([name, value]) => (
            <div key={name} className="flex items-center gap-4">
              <div className="text-xs text-stone-500 font-mono w-16 shrink-0">
                {name}
              </div>
              <div className="relative h-8 flex-1 bg-stone-100 rounded overflow-hidden">
                <div
                  className="absolute top-0 h-full w-8 bg-sage-500 rounded"
                  style={{
                    transitionProperty: "left",
                    transitionDuration: "500ms",
                    transitionTimingFunction: value,
                    left: active ? "calc(100% - 2rem)" : "0"
                  }}
                />
              </div>
              <div className="text-xs text-stone-400 font-mono truncate max-w-48">
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const meta: Meta = {
  title: "Tokens/Motion",
  component: MotionShowcase
}

export default meta

type Story = StoryObj

export const Default: Story = {}
