import { Input } from "@nacalui/ui"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "テキスト入力フィールド。ラベル、説明、エラーメッセージ、アイコンをサポート。"
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
      description: "入力フィールドの下に表示する説明テキスト。",
      table: { type: { summary: "string" } }
    },
    errorMessage: {
      control: "text",
      description: "エラーメッセージ。isInvalid と併用する。",
      table: { type: { summary: "string" } }
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "入力フィールドのサイズ。",
      table: {
        type: { summary: '"sm" | "md" | "lg"' },
        defaultValue: { summary: "md" }
      }
    },
    placeholder: {
      control: "text",
      description: "プレースホルダーテキスト。",
      table: { type: { summary: "string" } }
    },
    isDisabled: {
      control: "boolean",
      description: "操作不可の状態にする。",
      table: { type: { summary: "boolean" } }
    },
    isRequired: {
      control: "boolean",
      description: "必須フィールドにする。",
      table: { type: { summary: "boolean" } }
    },
    className: { table: { disable: true } },
    style: { table: { disable: true } }
  },
  args: {
    label: "メールアドレス",
    placeholder: "you@example.com",
    size: "md"
  }
}

export default meta

type Story = StoryObj<typeof Input>

/** Controls パネルで全 props をインタラクティブに操作できる。 */
export const Playground: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Controls パネルで label, size, placeholder 等を切り替えて確認できる。"
      }
    }
  }
}

/** ラベルは自動的に入力フィールドと紐づく。 */
export const WithLabel: Story = {
  args: { label: "名前", placeholder: "山田太郎" },
  parameters: {
    docs: {
      description: {
        story: "ラベルは react-aria により入力フィールドと自動的に紐づく。"
      }
    }
  }
}

/** 説明テキストで入力内容のヒントを提示する。 */
export const WithDescription: Story = {
  args: {
    label: "パスワード",
    type: "password",
    placeholder: "••••••••",
    description: "8文字以上で入力してください。"
  },
  parameters: {
    docs: {
      description: {
        story: "入力フィールドの下に補足情報を表示する。"
      }
    }
  }
}

/** エラー状態では赤いボーダーとエラーメッセージを表示する。 */
export const WithError: Story = {
  args: {
    label: "メールアドレス",
    placeholder: "you@example.com",
    isInvalid: true,
    errorMessage: "メールアドレスの形式が正しくありません。"
  },
  parameters: {
    docs: {
      description: {
        story: "isInvalid + errorMessage でバリデーションエラーを表示。"
      }
    }
  }
}

/** 左アイコンで入力内容のヒントを視覚的に示す。 */
export const WithIcon: Story = {
  args: {
    label: "検索",
    placeholder: "キーワードを入力...",
    icon: <span className="i-lucide-search text-base" />
  },
  parameters: {
    docs: {
      description: {
        story: "icon prop でテキストフィールドの左にアイコンを表示する。"
      }
    }
  }
}

/** サイズは3段階。 */
export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Input label="Small" size="sm" placeholder="sm" />
      <Input label="Medium" size="md" placeholder="md" />
      <Input label="Large" size="lg" placeholder="lg" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "sm, md, lg の3サイズ。Button のサイズと揃えて使える。"
      }
    }
  }
}

export const Disabled: Story = {
  args: {
    label: "メールアドレス",
    value: "readonly@example.com",
    isDisabled: true
  },
  parameters: {
    docs: {
      description: {
        story: "操作不可の状態。背景がグレーになり、cursor が not-allowed に。"
      }
    }
  }
}
