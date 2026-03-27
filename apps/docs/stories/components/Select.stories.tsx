import { Select, SelectItem } from "@nacalui/ui"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "ドロップダウン選択。複数の選択肢から1つを選ぶ。"
      }
    }
  },
  argTypes: {
    label: {
      control: "text",
      description: "ラベルテキスト。",
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
    placeholder: {
      control: "text",
      description: "プレースホルダー。",
      table: { type: { summary: "string" } }
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "セレクトのサイズ。",
      table: {
        type: { summary: '"sm" | "md" | "lg"' },
        defaultValue: { summary: "md" }
      }
    },
    isDisabled: {
      control: "boolean",
      description: "無効状態。",
      table: { type: { summary: "boolean" } }
    },
    className: { table: { disable: true } }
  },
  args: {
    label: "フルーツ",
    placeholder: "選択してください"
  }
}

export default meta
type Story = StoryObj<typeof Select>

export const Playground: Story = {
  render: args => (
    <Select {...args}>
      <SelectItem id="apple">りんご</SelectItem>
      <SelectItem id="banana">バナナ</SelectItem>
      <SelectItem id="orange">オレンジ</SelectItem>
      <SelectItem id="grape">ぶどう</SelectItem>
    </Select>
  )
}

export const WithDescription: Story = {
  args: {
    label: "言語",
    placeholder: "選択してください",
    description: "UIの表示言語を選択します。"
  },
  render: args => (
    <Select {...args}>
      <SelectItem id="ja">日本語</SelectItem>
      <SelectItem id="en">English</SelectItem>
      <SelectItem id="zh">中文</SelectItem>
    </Select>
  ),
  parameters: {
    docs: { description: { story: "説明テキストで選択の補足情報を提示する。" } }
  }
}

export const WithError: Story = {
  args: {
    label: "カテゴリ",
    placeholder: "選択してください",
    isInvalid: true,
    errorMessage: "カテゴリを選択してください。"
  },
  render: args => (
    <Select {...args}>
      <SelectItem id="tech">テクノロジー</SelectItem>
      <SelectItem id="design">デザイン</SelectItem>
      <SelectItem id="business">ビジネス</SelectItem>
    </Select>
  ),
  parameters: {
    docs: {
      description: {
        story: "isInvalid + errorMessage でバリデーションエラーを表示。"
      }
    }
  }
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-64">
      <Select label="Small" size="sm" placeholder="sm">
        <SelectItem id="a">Option A</SelectItem>
        <SelectItem id="b">Option B</SelectItem>
      </Select>
      <Select label="Medium" size="md" placeholder="md">
        <SelectItem id="a">Option A</SelectItem>
        <SelectItem id="b">Option B</SelectItem>
      </Select>
      <Select label="Large" size="lg" placeholder="lg">
        <SelectItem id="a">Option A</SelectItem>
        <SelectItem id="b">Option B</SelectItem>
      </Select>
    </div>
  ),
  parameters: { docs: { description: { story: "sm, md, lg の3サイズ。" } } }
}

export const Disabled: Story = {
  args: { label: "カテゴリ", placeholder: "選択できません", isDisabled: true },
  render: args => (
    <Select {...args}>
      <SelectItem id="a">Option A</SelectItem>
    </Select>
  ),
  parameters: { docs: { description: { story: "操作不可の状態。" } } }
}
