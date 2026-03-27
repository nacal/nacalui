import { Switch } from "@nacalui/ui"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "トグルスイッチ。即座に反映されるオン/オフの切り替えに使う。"
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
      description: "オン/オフ状態。",
      table: { type: { summary: "boolean" } }
    },
    className: { table: { disable: true } }
  },
  args: { children: "ダークモード" }
}

export default meta
type Story = StoryObj<typeof Switch>

export const Playground: Story = {}

export const On: Story = {
  args: { defaultSelected: true, children: "通知を有効にする" },
  parameters: { docs: { description: { story: "デフォルトでオン。" } } }
}

export const Disabled: Story = {
  args: { isDisabled: true, children: "無効" },
  parameters: { docs: { description: { story: "操作不可の状態。" } } }
}

export const Group: Story = {
  render: () => (
    <div className="space-y-4">
      <Switch defaultSelected>メール通知</Switch>
      <Switch>プッシュ通知</Switch>
      <Switch defaultSelected>ニュースレター</Switch>
    </div>
  ),
  parameters: {
    docs: { description: { story: "設定画面でよく使われるグループパターン。" } }
  }
}
