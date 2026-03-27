import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader
} from "@nacalui/ui"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "コンテンツをグループ化するコンテナ。CardHeader, CardBody, CardFooter で構成する。"
      }
    }
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["elevated", "outlined", "filled"],
      description: "カードの見た目。",
      table: {
        type: { summary: '"elevated" | "outlined" | "filled"' },
        defaultValue: { summary: "elevated" }
      }
    },
    className: { table: { disable: true } },
    style: { table: { disable: true } }
  },
  args: {
    variant: "elevated"
  }
}

export default meta

type Story = StoryObj<typeof Card>

/** 基本的なカード構成。 */
export const Default: Story = {
  render: args => (
    <Card {...args} className="w-80">
      <CardHeader>
        <h3 className="text-lg font-semibold text-stone-900">タイトル</h3>
      </CardHeader>
      <CardBody>
        <p className="text-sm text-stone-600">
          カードのコンテンツがここに入ります。テキスト、画像、フォームなど自由に配置できます。
        </p>
      </CardBody>
      <CardFooter>
        <Button size="sm">アクション</Button>
        <Button size="sm" intent="secondary" variant="ghost">
          キャンセル
        </Button>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "CardHeader, CardBody, CardFooter で構造化する基本パターン。"
      }
    }
  }
}

/** 3つのバリアント。 */
export const Variants: Story = {
  render: () => (
    <div className="flex gap-4">
      {(["elevated", "outlined", "filled"] as const).map(variant => (
        <Card key={variant} variant={variant} className="w-60">
          <CardBody>
            <h4 className="text-sm font-semibold text-stone-800 mb-1 capitalize">
              {variant}
            </h4>
            <p className="text-xs text-stone-500">
              {variant === "elevated" && "シャドウで浮き上がる。デフォルト。"}
              {variant === "outlined" && "ボーダーのみ。フラットな印象。"}
              {variant === "filled" && "薄い背景色。セクション分けに。"}
            </p>
          </CardBody>
        </Card>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "elevated（シャドウ）, outlined（ボーダー）, filled（背景色）の3バリアント。"
      }
    }
  }
}

/** Badge と組み合わせた実用例。 */
export const WithBadge: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-stone-900">プロジェクト</h3>
          <Badge intent="success">公開中</Badge>
        </div>
      </CardHeader>
      <CardBody>
        <p className="text-sm text-stone-600">
          nacalui
          のデザインシステム。コンポーネントライブラリとドキュメントを含む。
        </p>
      </CardBody>
      <CardFooter>
        <Button size="sm" variant="outline">
          詳細を見る
        </Button>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "Badge をヘッダーに配置してステータスを表示する実用パターン。"
      }
    }
  }
}
