import { Progress } from "@nacalui/ui"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Progress> = {
  title: "Components/Progress",
  component: Progress,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: { component: "プログレスバー。処理の進行状況を示す。" }
    }
  },
  argTypes: {
    label: {
      control: "text",
      description: "ラベル。",
      table: { type: { summary: "string" } }
    },
    value: {
      control: { type: "range", min: 0, max: 100 },
      description: "進捗値（0-100）。",
      table: { type: { summary: "number" } }
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
    showValue: {
      control: "boolean",
      description: "値を表示するか。",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" }
      }
    },
    className: { table: { disable: true } }
  },
  args: { value: 60, label: "アップロード中", className: "w-64" }
}

export default meta
type Story = StoryObj<typeof Progress>

export const Playground: Story = {}

export const WithValue: Story = {
  args: { value: 75, label: "アップロード中", showValue: true },
  parameters: {
    docs: { description: { story: "パーセンテージ値を表示する。" } }
  }
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-64">
      <Progress value={60} size="sm" label="Small" />
      <Progress value={60} size="md" label="Medium" />
      <Progress value={60} size="lg" label="Large" />
    </div>
  ),
  parameters: { docs: { description: { story: "3サイズの比較。" } } }
}

export const Indeterminate: Story = {
  args: { isIndeterminate: true, label: "処理中..." },
  parameters: {
    docs: { description: { story: "進捗が不明な場合のアニメーション。" } }
  }
}
