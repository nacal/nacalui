import { Link } from "@nacalui/ui"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Link> = {
  title: "Components/Link",
  component: Link,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "テキストリンク。default, muted, underline の3バリアント。"
      }
    }
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "muted", "underline"],
      description: "リンクの見た目。",
      table: {
        type: { summary: '"default" | "muted" | "underline"' },
        defaultValue: { summary: "default" }
      }
    },
    className: { table: { disable: true } }
  }
}

export default meta
type Story = StoryObj<typeof Link>

export const Default: Story = {
  args: { children: "リンクテキスト", href: "#" },
  parameters: {
    docs: { description: { story: "デフォルトスタイル。控えめな下線付き。" } }
  }
}

export const Muted: Story = {
  args: { variant: "muted", children: "補足リンク", href: "#" },
  parameters: {
    docs: {
      description: { story: "薄い色で下線なし。フッターやサイドバー向け。" }
    }
  }
}

export const Underline: Story = {
  args: { variant: "underline", children: "強調リンク", href: "#" },
  parameters: {
    docs: { description: { story: "常に下線表示。本文中のリンクに。" } }
  }
}

export const Variants: Story = {
  render: () => (
    <div className="flex gap-6 items-center">
      <Link href="#">Default</Link>
      <Link href="#" variant="muted">
        Muted
      </Link>
      <Link href="#" variant="underline">
        Underline
      </Link>
    </div>
  ),
  parameters: { docs: { description: { story: "3バリアントの比較。" } } }
}
