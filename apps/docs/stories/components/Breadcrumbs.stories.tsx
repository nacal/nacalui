import { BreadcrumbItem, Breadcrumbs } from "@nacalui/ui"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Breadcrumbs> = {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "パンくずリスト。ページ階層を示すナビゲーション。"
      }
    }
  },
  argTypes: { className: { table: { disable: true } } }
}

export default meta
type Story = StoryObj<typeof Breadcrumbs>

export const Default: Story = {
  render: () => (
    <Breadcrumbs>
      <BreadcrumbItem href="#">ホーム</BreadcrumbItem>
      <BreadcrumbItem href="#">プロジェクト</BreadcrumbItem>
      <BreadcrumbItem>nacalui</BreadcrumbItem>
    </Breadcrumbs>
  ),
  parameters: {
    docs: {
      description: {
        story: "基本的なパンくずリスト。最後の項目が現在のページ。"
      }
    }
  }
}

export const Long: Story = {
  render: () => (
    <Breadcrumbs>
      <BreadcrumbItem href="#">ホーム</BreadcrumbItem>
      <BreadcrumbItem href="#">設定</BreadcrumbItem>
      <BreadcrumbItem href="#">アカウント</BreadcrumbItem>
      <BreadcrumbItem>セキュリティ</BreadcrumbItem>
    </Breadcrumbs>
  ),
  parameters: { docs: { description: { story: "深い階層のパンくずリスト。" } } }
}
