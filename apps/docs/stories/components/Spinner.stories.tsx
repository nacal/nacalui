import { Spinner } from "@nacalui/ui"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Spinner> = {
  title: "Components/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "ローディングスピナー。非同期処理中に表示する。"
      }
    }
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "サイズ。",
      table: {
        type: { summary: '"sm" | "md" | "lg"' },
        defaultValue: { summary: "md" }
      }
    },
    label: {
      control: "text",
      description: "スクリーンリーダー用ラベル。",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "読み込み中" }
      }
    },
    className: { table: { disable: true } }
  }
}

export default meta
type Story = StoryObj<typeof Spinner>

export const Default: Story = {}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  ),
  parameters: { docs: { description: { story: "sm, md, lg の3サイズ。" } } }
}
