import { Accordion, AccordionItem } from "@nacalui/ui"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "アコーディオン。コンテンツの折りたたみ/展開。HTML details/summary ベース。"
      }
    }
  },
  argTypes: { className: { table: { disable: true } } }
}

export default meta
type Story = StoryObj<typeof Accordion>

export const Default: Story = {
  render: () => (
    <Accordion className="w-96">
      <AccordionItem title="アカウント設定">
        アカウントの基本情報を管理できます。メールアドレスやパスワードの変更が可能です。
      </AccordionItem>
      <AccordionItem title="通知設定">
        メール通知やプッシュ通知の設定を変更できます。
      </AccordionItem>
      <AccordionItem title="プライバシー">
        プロフィールの公開範囲やデータの取り扱いについて設定できます。
      </AccordionItem>
    </Accordion>
  ),
  parameters: {
    docs: {
      description: {
        story: "基本的なアコーディオン。クリックで展開/折りたたみ。"
      }
    }
  }
}

export const DefaultOpen: Story = {
  render: () => (
    <Accordion className="w-96">
      <AccordionItem title="よくある質問" defaultOpen>
        このセクションはデフォルトで開いています。
      </AccordionItem>
      <AccordionItem title="お問い合わせ">
        サポートチームにお問い合わせください。
      </AccordionItem>
    </Accordion>
  ),
  parameters: {
    docs: {
      description: { story: "defaultOpen で初期状態を開いた状態にできる。" }
    }
  }
}
