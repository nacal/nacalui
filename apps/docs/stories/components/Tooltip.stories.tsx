import { Button, Tooltip } from "@nacalui/ui"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "ツールチップ。ホバーやフォーカスで補足情報を表示する。"
      }
    }
  },
  argTypes: {
    content: {
      control: "text",
      description: "ツールチップの内容。",
      table: { type: { summary: "ReactNode" } }
    },
    placement: {
      control: "select",
      options: ["top", "bottom", "left", "right"],
      description: "表示位置。",
      table: {
        type: { summary: '"top" | "bottom" | "left" | "right"' },
        defaultValue: { summary: "top" }
      }
    },
    className: { table: { disable: true } }
  }
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  render: () => (
    <Tooltip content="これはツールチップです">
      <span className="text-sm text-stone-600 underline underline-offset-2 decoration-dashed cursor-help">
        ホバーしてください
      </span>
    </Tooltip>
  ),
  parameters: {
    docs: {
      description: {
        story: "基本的なツールチップ。ホバーまたはフォーカスで表示。"
      }
    }
  }
}

export const Placements: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Tooltip content="上" placement="top">
        <Button variant="outline" intent="secondary">
          Top
        </Button>
      </Tooltip>
      <Tooltip content="下" placement="bottom">
        <Button variant="outline" intent="secondary">
          Bottom
        </Button>
      </Tooltip>
      <Tooltip content="左" placement="left">
        <Button variant="outline" intent="secondary">
          Left
        </Button>
      </Tooltip>
      <Tooltip content="右" placement="right">
        <Button variant="outline" intent="secondary">
          Right
        </Button>
      </Tooltip>
    </div>
  ),
  parameters: { docs: { description: { story: "4方向の配置。" } } }
}

export const IconButton: Story = {
  render: () => (
    <Tooltip content="設定を開く">
      <span className="i-lucide-settings text-xl text-stone-600" />
    </Tooltip>
  ),
  parameters: {
    docs: { description: { story: "アイコンのみの要素に補足情報を付ける。" } }
  }
}
