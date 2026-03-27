import { Textarea } from "@nacalui/ui"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "複数行テキスト入力。ラベル、説明、エラーメッセージをサポート。"
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
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "サイズ。",
      table: {
        type: { summary: '"sm" | "md" | "lg"' },
        defaultValue: { summary: "md" }
      }
    },
    placeholder: {
      control: "text",
      description: "プレースホルダー。",
      table: { type: { summary: "string" } }
    },
    rows: {
      control: "number",
      description: "行数。",
      table: { type: { summary: "number" }, defaultValue: { summary: "4" } }
    },
    className: { table: { disable: true } },
    style: { table: { disable: true } }
  },
  args: { label: "コメント", placeholder: "コメントを入力...", size: "md" }
}

export default meta
type Story = StoryObj<typeof Textarea>

export const Playground: Story = {}

export const WithDescription: Story = {
  args: {
    label: "自己紹介",
    placeholder: "あなたについて教えてください",
    description: "500文字以内で入力してください。"
  },
  parameters: {
    docs: { description: { story: "説明テキストで入力の補足情報を提示する。" } }
  }
}

export const WithError: Story = {
  args: {
    label: "コメント",
    isInvalid: true,
    errorMessage: "コメントは必須です。"
  },
  parameters: {
    docs: {
      description: {
        story: "isInvalid + errorMessage でバリデーションエラーを表示。"
      }
    }
  }
}

export const Disabled: Story = {
  args: {
    label: "コメント",
    value: "読み取り専用のテキスト",
    isDisabled: true
  },
  parameters: {
    docs: { description: { story: "操作不可の状態。リサイズも無効になる。" } }
  }
}
