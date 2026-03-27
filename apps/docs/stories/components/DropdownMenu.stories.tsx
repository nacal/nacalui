import {
  Button,
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuSeparator
} from "@nacalui/ui"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof DropdownMenu> = {
  title: "Components/DropdownMenu",
  component: DropdownMenu,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "ドロップダウンメニュー。アクション一覧を表示する。キーボード操作対応。"
      }
    }
  },
  argTypes: { className: { table: { disable: true } } }
}

export default meta
type Story = StoryObj<typeof DropdownMenu>

export const Default: Story = {
  render: () => (
    <DropdownMenu
      trigger={
        <Button variant="outline" intent="secondary">
          メニュー
        </Button>
      }
    >
      <DropdownMenuItem onAction={() => {}}>編集</DropdownMenuItem>
      <DropdownMenuItem onAction={() => {}}>複製</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem isDanger onAction={() => {}}>
        削除
      </DropdownMenuItem>
    </DropdownMenu>
  ),
  parameters: {
    docs: { description: { story: "基本的なドロップダウンメニュー。" } }
  }
}

export const WithIcons: Story = {
  render: () => (
    <DropdownMenu
      trigger={
        <Button variant="ghost" intent="secondary">
          <span className="i-lucide-more-horizontal text-lg" />
        </Button>
      }
    >
      <DropdownMenuItem onAction={() => {}}>
        <span className="i-lucide-edit text-sm mr-2" aria-hidden="true" />
        編集
      </DropdownMenuItem>
      <DropdownMenuItem onAction={() => {}}>
        <span className="i-lucide-copy text-sm mr-2" aria-hidden="true" />
        複製
      </DropdownMenuItem>
      <DropdownMenuItem onAction={() => {}}>
        <span className="i-lucide-download text-sm mr-2" aria-hidden="true" />
        ダウンロード
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem isDanger onAction={() => {}}>
        <span className="i-lucide-trash-2 text-sm mr-2" aria-hidden="true" />
        削除
      </DropdownMenuItem>
    </DropdownMenu>
  ),
  parameters: { docs: { description: { story: "アイコン付きメニュー項目。" } } }
}
