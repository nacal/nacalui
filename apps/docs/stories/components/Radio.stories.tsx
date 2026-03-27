import { Radio, RadioGroup } from "@nacalui/ui"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof RadioGroup> = {
  title: "Components/Radio",
  component: RadioGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "ラジオグループ。複数の選択肢から1つを選ぶ。矢印キーで操作可能。"
      }
    }
  },
  argTypes: {
    label: {
      control: "text",
      description: "グループのラベル。",
      table: { type: { summary: "string" } }
    },
    description: {
      control: "text",
      description: "説明テキスト。",
      table: { type: { summary: "string" } }
    },
    errorMessage: {
      control: "text",
      description: "エラーメッセージ。",
      table: { type: { summary: "string" } }
    },
    isDisabled: {
      control: "boolean",
      description: "無効状態。",
      table: { type: { summary: "boolean" } }
    },
    className: { table: { disable: true } }
  }
}

export default meta
type Story = StoryObj<typeof RadioGroup>

export const Default: Story = {
  render: () => (
    <RadioGroup label="通知方法" defaultValue="email">
      <Radio value="email">メール</Radio>
      <Radio value="push">プッシュ通知</Radio>
      <Radio value="sms">SMS</Radio>
    </RadioGroup>
  ),
  parameters: { docs: { description: { story: "基本的なラジオグループ。" } } }
}

export const WithDescription: Story = {
  render: () => (
    <RadioGroup
      label="プラン"
      description="いつでも変更できます。"
      defaultValue="free"
    >
      <Radio value="free">フリー</Radio>
      <Radio value="pro">プロ</Radio>
      <Radio value="enterprise">エンタープライズ</Radio>
    </RadioGroup>
  ),
  parameters: { docs: { description: { story: "説明テキスト付き。" } } }
}

export const WithError: Story = {
  render: () => (
    <RadioGroup label="性別" isInvalid errorMessage="選択してください。">
      <Radio value="male">男性</Radio>
      <Radio value="female">女性</Radio>
      <Radio value="other">その他</Radio>
    </RadioGroup>
  ),
  parameters: { docs: { description: { story: "バリデーションエラー表示。" } } }
}

export const Disabled: Story = {
  render: () => (
    <RadioGroup label="プラン" isDisabled defaultValue="free">
      <Radio value="free">フリー</Radio>
      <Radio value="pro">プロ</Radio>
    </RadioGroup>
  ),
  parameters: { docs: { description: { story: "操作不可の状態。" } } }
}
