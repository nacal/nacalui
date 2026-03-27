import { Checkbox } from "@nacalui/ui"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "チェックボックス。単一の真偽値の入力に使う。"
      }
    }
  },
  argTypes: {
    children: {
      control: "text",
      description: "ラベルテキスト。",
      table: { type: { summary: "ReactNode" } }
    },
    isDisabled: {
      control: "boolean",
      description: "無効状態。",
      table: { type: { summary: "boolean" } }
    },
    isSelected: {
      control: "boolean",
      description: "チェック状態。",
      table: { type: { summary: "boolean" } }
    },
    isIndeterminate: {
      control: "boolean",
      description: "不確定状態。",
      table: { type: { summary: "boolean" } }
    },
    className: { table: { disable: true } }
  },
  args: { children: "利用規約に同意する" }
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Playground: Story = {}

export const Checked: Story = {
  args: { defaultSelected: true, children: "選択済み" },
  parameters: { docs: { description: { story: "デフォルトでチェック済み。" } } }
}

export const Indeterminate: Story = {
  args: { isIndeterminate: true, children: "一部選択" },
  parameters: {
    docs: {
      description: { story: "親チェックボックスで子が一部選択の状態を示す。" }
    }
  }
}

export const Disabled: Story = {
  args: { isDisabled: true, children: "無効" },
  parameters: { docs: { description: { story: "操作不可の状態。" } } }
}

export const Group: Story = {
  render: () => (
    <div className="space-y-2">
      <Checkbox>メール通知</Checkbox>
      <Checkbox>プッシュ通知</Checkbox>
      <Checkbox defaultSelected>SMS通知</Checkbox>
    </div>
  ),
  parameters: {
    docs: {
      description: { story: "複数のチェックボックスをグループとして表示する。" }
    }
  }
}
