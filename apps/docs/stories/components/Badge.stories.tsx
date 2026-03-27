import type { BadgeIntent, BadgeVariant } from "@nacalui/ui"
import { Badge } from "@nacalui/ui"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "ステータスやカテゴリを示す小さなラベル。intent で色を、variant で見た目を制御する。"
      }
    }
  },
  argTypes: {
    intent: {
      control: "select",
      options: ["primary", "secondary", "danger", "success", "warning"],
      description: "バッジの意味。色はこの値に応じて自動で決まる。",
      table: {
        type: {
          summary: '"primary" | "secondary" | "danger" | "success" | "warning"'
        },
        defaultValue: { summary: "primary" }
      }
    },
    variant: {
      control: "select",
      options: ["filled", "light", "outline"],
      description: "バッジの見た目のスタイル。",
      table: {
        type: { summary: '"filled" | "light" | "outline"' },
        defaultValue: { summary: "light" }
      }
    },
    size: {
      control: "select",
      options: ["sm", "md"],
      description: "バッジのサイズ。",
      table: {
        type: { summary: '"sm" | "md"' },
        defaultValue: { summary: "sm" }
      }
    },
    children: {
      control: "text",
      description: "バッジのコンテンツ。",
      table: { type: { summary: "ReactNode" } }
    },
    className: { table: { disable: true } },
    style: { table: { disable: true } }
  },
  args: {
    children: "Badge",
    intent: "primary",
    variant: "light",
    size: "sm"
  }
}

export default meta

type Story = StoryObj<typeof Badge>

export const Playground: Story = {}

/** ステータスを示す代表的な使い方。 */
export const Intents: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Badge intent="primary">デフォルト</Badge>
      <Badge intent="secondary">下書き</Badge>
      <Badge intent="success">公開中</Badge>
      <Badge intent="warning">レビュー中</Badge>
      <Badge intent="danger">エラー</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "intent でステータスの意味を伝える。最もよく使うパターン。"
      }
    }
  }
}

/** intent × variant のマトリクス。 */
export const IntentVariantMatrix: Story = {
  tags: ["!autodocs"],
  render: () => {
    const intents: BadgeIntent[] = [
      "primary",
      "secondary",
      "danger",
      "success",
      "warning"
    ]
    const variants: BadgeVariant[] = ["filled", "light", "outline"]
    return (
      <div className="space-y-3">
        {intents.map(intent => (
          <div key={intent} className="flex items-center gap-2">
            <span className="text-xs font-mono text-stone-400 w-20">
              {intent}
            </span>
            {variants.map(variant => (
              <Badge key={variant} intent={intent} variant={variant}>
                {variant}
              </Badge>
            ))}
          </div>
        ))}
      </div>
    )
  }
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "sm はインラインテキスト、md はカード内や強調表示に。"
      }
    }
  }
}
