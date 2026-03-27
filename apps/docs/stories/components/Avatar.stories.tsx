import { Avatar } from "@nacalui/ui"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "ユーザーやエンティティを表すアバター。画像、イニシャル、デフォルトアイコンの3段階フォールバック。"
      }
    }
  },
  argTypes: {
    src: {
      control: "text",
      description: "画像URL。",
      table: { type: { summary: "string" } }
    },
    alt: {
      control: "text",
      description: "代替テキスト。",
      table: { type: { summary: "string" } }
    },
    fallback: {
      control: "text",
      description: "イニシャル（1-2文字）。",
      table: { type: { summary: "string" } }
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "サイズ。",
      table: {
        type: { summary: '"sm" | "md" | "lg"' },
        defaultValue: { summary: "md" }
      }
    },
    className: { table: { disable: true } }
  },
  args: { fallback: "N" }
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Playground: Story = {}

export const WithFallback: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Avatar fallback="A" />
      <Avatar fallback="YT" />
      <Avatar />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "イニシャル、2文字、デフォルトアイコンの3パターン。"
      }
    }
  }
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Avatar size="sm" fallback="S" />
      <Avatar size="md" fallback="M" />
      <Avatar size="lg" fallback="L" />
    </div>
  ),
  parameters: {
    docs: {
      description: { story: "sm (32px), md (40px), lg (56px) の3サイズ。" }
    }
  }
}
