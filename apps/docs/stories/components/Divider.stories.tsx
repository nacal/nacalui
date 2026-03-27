import { Divider } from "@nacalui/ui"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Divider> = {
  title: "Components/Divider",
  component: Divider,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "区切り線。セクション間の視覚的な区切りに使う。"
      }
    }
  },
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "方向。",
      table: {
        type: { summary: '"horizontal" | "vertical"' },
        defaultValue: { summary: "horizontal" }
      }
    },
    className: { table: { disable: true } }
  }
}

export default meta
type Story = StoryObj<typeof Divider>

export const Horizontal: Story = {
  render: () => (
    <div className="w-64 space-y-3">
      <p className="text-sm text-stone-600">セクション 1</p>
      <Divider />
      <p className="text-sm text-stone-600">セクション 2</p>
    </div>
  ),
  parameters: { docs: { description: { story: "水平方向の区切り線。" } } }
}

export const Vertical: Story = {
  render: () => (
    <div className="flex items-center gap-3 h-8">
      <span className="text-sm text-stone-600">項目 A</span>
      <Divider orientation="vertical" />
      <span className="text-sm text-stone-600">項目 B</span>
      <Divider orientation="vertical" />
      <span className="text-sm text-stone-600">項目 C</span>
    </div>
  ),
  parameters: {
    docs: {
      description: { story: "垂直方向の区切り線。インラインの区切りに。" }
    }
  }
}
