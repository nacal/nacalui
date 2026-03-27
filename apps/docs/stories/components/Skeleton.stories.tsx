import { Skeleton } from "@nacalui/ui"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "ローディングプレースホルダー。コンテンツ読み込み中に表示する。"
      }
    }
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["text", "circular", "rectangular"],
      description: "形状。",
      table: {
        type: { summary: '"text" | "circular" | "rectangular"' },
        defaultValue: { summary: "text" }
      }
    },
    width: {
      control: "text",
      description: "幅。",
      table: { type: { summary: "string | number" } }
    },
    height: {
      control: "text",
      description: "高さ。",
      table: { type: { summary: "string | number" } }
    },
    className: { table: { disable: true } },
    style: { table: { disable: true } }
  }
}

export default meta
type Story = StoryObj<typeof Skeleton>

export const Text: Story = {
  render: () => (
    <div className="space-y-2 w-64">
      <Skeleton width="60%" />
      <Skeleton />
      <Skeleton width="80%" />
    </div>
  ),
  parameters: {
    docs: { description: { story: "テキスト行のプレースホルダー。" } }
  }
}

export const Circular: Story = {
  render: () => <Skeleton variant="circular" width={48} height={48} />,
  parameters: {
    docs: { description: { story: "アバターのプレースホルダー。" } }
  }
}

export const Card: Story = {
  render: () => (
    <div className="w-64 p-4 border border-stone-200 rounded-xl space-y-3">
      <div className="flex items-center gap-3">
        <Skeleton variant="circular" width={40} height={40} />
        <div className="flex-1 space-y-2">
          <Skeleton width="70%" />
          <Skeleton width="40%" />
        </div>
      </div>
      <Skeleton variant="rectangular" height={120} />
      <Skeleton width="90%" />
      <Skeleton width="60%" />
    </div>
  ),
  parameters: {
    docs: {
      description: { story: "カードのローディング状態を再現する組み合わせ例。" }
    }
  }
}
