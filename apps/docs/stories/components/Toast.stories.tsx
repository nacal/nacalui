import { Button, ToastProvider, useToast } from "@nacalui/ui"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta = {
  title: "Components/Toast",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "トースト通知。ToastProvider + useToast() フックで任意の場所から通知を表示する。"
      }
    }
  },
  decorators: [
    Story => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    )
  ]
}

export default meta
type Story = StoryObj

function ToastDemo() {
  const { toast } = useToast()
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        onPress={() => toast({ title: "保存しました", intent: "success" })}
        intent="success"
        variant="light"
      >
        成功
      </Button>
      <Button
        onPress={() =>
          toast({
            title: "エラーが発生しました",
            description: "もう一度お試しください。",
            intent: "danger"
          })
        }
        intent="danger"
        variant="light"
      >
        エラー
      </Button>
      <Button
        onPress={() => toast({ title: "注意が必要です", intent: "warning" })}
        intent="warning"
        variant="light"
      >
        警告
      </Button>
      <Button
        onPress={() =>
          toast({
            title: "お知らせ",
            description: "新しいバージョンが利用可能です。"
          })
        }
        variant="light"
      >
        情報
      </Button>
    </div>
  )
}

export const Default: Story = {
  render: () => <ToastDemo />,
  parameters: {
    docs: {
      description: {
        story: "ボタンをクリックしてトーストを表示する。4秒後に自動で消える。"
      }
    }
  }
}
