import { Button, Dialog, Input } from "@nacalui/ui"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "モーダルダイアログ。フォーカストラップ、Escape閉じ、スクリーンリーダー対応。"
      }
    }
  },
  argTypes: {
    title: {
      control: "text",
      description: "ダイアログのタイトル。",
      table: { type: { summary: "string" } }
    },
    isDismissable: {
      control: "boolean",
      description: "閉じるボタンとオーバーレイクリックで閉じられるか。",
      table: { type: { summary: "boolean" }, defaultValue: { summary: "true" } }
    },
    role: {
      control: "select",
      options: ["dialog", "alertdialog"],
      description: "ダイアログの役割。",
      table: {
        type: { summary: '"dialog" | "alertdialog"' },
        defaultValue: { summary: "dialog" }
      }
    },
    className: { table: { disable: true } }
  }
}

export default meta
type Story = StoryObj<typeof Dialog>

export const Default: Story = {
  render: () => (
    <Dialog trigger={<Button>ダイアログを開く</Button>} title="確認">
      <p>この操作を実行しますか？</p>
    </Dialog>
  ),
  parameters: {
    docs: {
      description: { story: "基本的なダイアログ。トリガーをクリックして開く。" }
    }
  }
}

export const WithForm: Story = {
  render: () => (
    <Dialog
      trigger={<Button>プロフィール編集</Button>}
      title="プロフィール編集"
    >
      {({ close }) => (
        <div className="space-y-4">
          <Input label="名前" placeholder="山田太郎" />
          <Input label="メールアドレス" placeholder="you@example.com" />
          <div className="flex justify-end gap-2 pt-2">
            <Button intent="secondary" variant="ghost" onPress={close}>
              キャンセル
            </Button>
            <Button onPress={close}>保存する</Button>
          </div>
        </div>
      )}
    </Dialog>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "render props で close 関数を受け取り、フォーム送信後にダイアログを閉じる。"
      }
    }
  }
}

export const AlertDialog: Story = {
  render: () => (
    <Dialog
      trigger={<Button intent="danger">削除する</Button>}
      title="本当に削除しますか？"
      role="alertdialog"
      isDismissable={false}
    >
      {({ close }) => (
        <div className="space-y-4">
          <p>この操作は取り消せません。</p>
          <div className="flex justify-end gap-2 pt-2">
            <Button intent="secondary" variant="ghost" onPress={close}>
              キャンセル
            </Button>
            <Button intent="danger" onPress={close}>
              削除する
            </Button>
          </div>
        </div>
      )}
    </Dialog>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "alertdialog はオーバーレイクリックで閉じない。破壊的操作の確認に。"
      }
    }
  }
}
