import { Alert } from "@nacalui/ui"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "インラインアラート。ページ内に常に表示して重要な情報を伝える。"
      }
    }
  },
  argTypes: {
    intent: {
      control: "select",
      options: ["primary", "danger", "success", "warning"],
      description: "アラートの意味。",
      table: {
        type: { summary: '"primary" | "danger" | "success" | "warning"' },
        defaultValue: { summary: "primary" }
      }
    },
    title: {
      control: "text",
      description: "タイトル。",
      table: { type: { summary: "string" } }
    },
    children: {
      control: "text",
      description: "コンテンツ。",
      table: { type: { summary: "ReactNode" } }
    },
    className: { table: { disable: true } },
    style: { table: { disable: true } }
  },
  args: { children: "これはアラートメッセージです。" }
}

export default meta
type Story = StoryObj<typeof Alert>

export const Playground: Story = {}

export const Intents: Story = {
  render: () => (
    <div className="space-y-3 w-96">
      <Alert intent="primary" title="お知らせ">
        新しいバージョンが利用可能です。
      </Alert>
      <Alert intent="success" title="完了">
        変更が保存されました。
      </Alert>
      <Alert intent="warning" title="注意">
        ストレージの使用量が80%を超えています。
      </Alert>
      <Alert intent="danger" title="エラー">
        処理中にエラーが発生しました。
      </Alert>
    </div>
  ),
  parameters: {
    docs: {
      description: { story: "4つの intent でメッセージの種類を伝える。" }
    }
  }
}

export const WithoutTitle: Story = {
  args: { intent: "primary", children: "タイトルなしのシンプルなアラート。" },
  parameters: {
    docs: { description: { story: "タイトルなしで簡潔に情報を伝える。" } }
  }
}
