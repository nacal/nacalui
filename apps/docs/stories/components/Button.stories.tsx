import type { ButtonIntent, ButtonVariant } from "@nacalui/ui"
import { Button } from "@nacalui/ui"
import type { Meta, StoryObj } from "@storybook/react"
import type { ReactNode } from "react"

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "アクションを実行するためのボタン。intent（意味）で色を、variant（見た目）でスタイルを制御する。"
      }
    }
  },
  argTypes: {
    intent: {
      control: "select",
      options: ["primary", "secondary", "danger", "success", "warning"],
      description: "ボタンの意味。色はこの値に応じて自動で決まる。",
      table: {
        type: {
          summary: '"primary" | "secondary" | "danger" | "success" | "warning"'
        },
        defaultValue: { summary: "primary" }
      }
    },
    variant: {
      control: "select",
      options: ["filled", "outline", "light", "ghost"],
      description: "ボタンの見た目のスタイル。",
      table: {
        type: { summary: '"filled" | "outline" | "light" | "ghost"' },
        defaultValue: { summary: "filled" }
      }
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "ボタンのサイズ。",
      table: {
        type: { summary: '"sm" | "md" | "lg"' },
        defaultValue: { summary: "md" }
      }
    },
    icon: {
      description: "ボタンテキストの左に表示するアイコン。",
      table: { type: { summary: "ReactNode" } }
    },
    iconRight: {
      description: "ボタンテキストの右に表示するアイコン。",
      table: { type: { summary: "ReactNode" } }
    },
    loading: {
      control: "boolean",
      description: "true の場合スピナーを表示し、自動的に disabled になる。",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" }
      }
    },
    disabled: {
      control: "boolean",
      description: "操作不可の状態にする。",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" }
      }
    },
    children: {
      control: "text",
      description: "ボタンのコンテンツ。",
      table: { type: { summary: "ReactNode" } }
    },
    className: {
      table: { disable: true }
    },
    style: {
      table: { disable: true }
    }
  },
  args: {
    children: "Button",
    intent: "primary",
    variant: "filled",
    size: "md"
  }
}

export default meta

type Story = StoryObj<typeof Button>

function _Section({
  title,
  description,
  children
}: {
  title: string
  description?: string
  children: ReactNode
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-stone-800 mb-1">{title}</h3>
      {description && (
        <p className="text-xs text-stone-500 mb-3">{description}</p>
      )}
      <div className="flex items-center flex-wrap gap-3 p-4 bg-white rounded-lg border border-stone-200">
        {children}
      </div>
    </div>
  )
}

/** Controls パネルで全 props をインタラクティブに操作するためのストーリー。 */
export const Playground: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Controls パネルで intent, variant, size 等を自由に切り替えて挙動を確認できる。"
      }
    }
  }
}

/**
 * intent は「このボタンがどんな意味を持つか」を示す。
 * primary は主要アクション、danger は破壊的操作、success は成功確認などに使う。
 */
export const Primary: Story = {
  args: { intent: "primary", children: "保存する" },
  parameters: {
    docs: {
      description: {
        story:
          "主要なアクション。1画面に1つが目安。フォームの送信やメインのCTAに使う。"
      }
    }
  }
}

export const Secondary: Story = {
  args: { intent: "secondary", variant: "outline", children: "キャンセル" },
  parameters: {
    docs: {
      description: {
        story:
          "補助的なアクション。Primary と並べて代替の選択肢を提示する場面で使う。"
      }
    }
  }
}

export const Danger: Story = {
  args: { intent: "danger", children: "削除する" },
  parameters: {
    docs: {
      description: {
        story:
          "破壊的な操作（削除、解除など）。確認ダイアログ内での使用を推奨。"
      }
    }
  }
}

export const Success: Story = {
  args: { intent: "success", children: "承認する" },
  parameters: {
    docs: {
      description: {
        story: "成功や肯定的なアクション（承認、完了など）に使う。"
      }
    }
  }
}

export const Warning: Story = {
  args: { intent: "warning", children: "注意して続ける" },
  parameters: {
    docs: {
      description: {
        story: "注意が必要なアクション。取り消し可能だが影響がある操作に使う。"
      }
    }
  }
}

/**
 * variant は「ボタンの見た目の強さ」を制御する。
 * filled が最も強く、ghost が最も控えめ。
 */
export const Filled: Story = {
  args: { variant: "filled", children: "Filled" },
  parameters: {
    docs: {
      description: {
        story:
          "塗りつぶし。最も目立つスタイル。画面内で最も重要なアクションに。"
      }
    }
  }
}

export const Outline: Story = {
  args: { variant: "outline", children: "Outline" },
  parameters: {
    docs: {
      description: {
        story:
          "枠線のみ。Filled と並べて補助的なアクションを示す場面や、フォームのキャンセルに。"
      }
    }
  }
}

export const Light: Story = {
  args: { variant: "light", intent: "success", children: "承認済み" },
  parameters: {
    docs: {
      description: {
        story:
          "薄い背景色。タグ的な用途、フィルター、軽いアクションに。ステータス表示にも適している。"
      }
    }
  }
}

export const Ghost: Story = {
  args: { variant: "ghost", children: "詳細を見る" },
  parameters: {
    docs: {
      description: {
        story:
          "背景なし。ツールバー、インライン操作、密集するUIで視覚的ノイズを減らしたい場面で。"
      }
    }
  }
}

/** サイズは3段階。sm はテーブル内など省スペース、lg はCTAやモバイル向け。 */
export const Small: Story = {
  args: { size: "sm", children: "Small" },
  parameters: {
    docs: {
      description: {
        story: "省スペースな場面（テーブル行内の操作、タグの横など）で使う。"
      }
    }
  }
}

export const Large: Story = {
  args: { size: "lg", children: "Large" },
  parameters: {
    docs: {
      description: {
        story:
          "CTA やモバイルのタッチターゲットに。最小 48px の高さでタッチ操作しやすい。"
      }
    }
  }
}

/** アイコンはボタンテキストの左右に配置できる。アイコンのみの場合は aria-label が必須。 */
export const WithLeftIcon: Story = {
  args: {
    children: "追加する",
    icon: <span className="i-lucide-plus text-base" />
  },
  parameters: {
    docs: {
      description: {
        story:
          "左アイコンでアクションの意味を補強する。アイコンは aria-hidden で装飾として扱われる。"
      }
    }
  }
}

export const WithRightIcon: Story = {
  args: {
    variant: "outline",
    children: "次へ",
    iconRight: <span className="i-lucide-arrow-right text-base" />
  },
  parameters: {
    docs: {
      description: {
        story: "右アイコンで方向性や外部遷移を示す。"
      }
    }
  }
}

export const IconOnly: Story = {
  args: {
    variant: "ghost",
    intent: "secondary",
    "aria-label": "閉じる",
    children: <span className="i-lucide-x text-base" />
  },
  parameters: {
    docs: {
      description: {
        story:
          "アイコンのみのボタン。aria-label が必須。ツールバーや密集UIで使う。"
      }
    }
  }
}

/** loading は非同期処理中の状態。スピナーが表示され、自動的に disabled になる。 */
export const Loading: Story = {
  args: { loading: true, children: "保存中..." },
  parameters: {
    docs: {
      description: {
        story:
          "非同期処理中はスピナーを表示し、二重送信を防ぐ。loading=true で自動的に disabled になる。"
      }
    }
  }
}

export const Disabled: Story = {
  args: { disabled: true, children: "操作不可" },
  parameters: {
    docs: {
      description: {
        story: "操作不可の状態。opacity が下がり、pointer-events が無効になる。"
      }
    }
  }
}

/**
 * 全 intent × variant の組み合わせ一覧。
 * デザインレビューや色の整合性確認に使う。通常の開発では参照不要。
 */
export const IntentVariantMatrix: Story = {
  tags: ["!autodocs"],
  render: () => {
    const intents: { name: ButtonIntent; label: string }[] = [
      { name: "primary", label: "Primary" },
      { name: "secondary", label: "Secondary" },
      { name: "danger", label: "Danger" },
      { name: "success", label: "Success" },
      { name: "warning", label: "Warning" }
    ]
    const variants: { name: ButtonVariant; label: string }[] = [
      { name: "filled", label: "Filled" },
      { name: "outline", label: "Outline" },
      { name: "light", label: "Light" },
      { name: "ghost", label: "Ghost" }
    ]

    return (
      <div className="space-y-1">
        <div className="grid grid-cols-5 gap-3 px-4 pb-2">
          <div />
          {variants.map(v => (
            <div
              key={v.name}
              className="text-xs font-mono text-stone-400 text-center"
            >
              {v.label}
            </div>
          ))}
        </div>
        {intents.map(intent => (
          <div
            key={intent.name}
            className="grid grid-cols-5 gap-3 items-center p-3 rounded-lg bg-white border border-stone-100"
          >
            <div className="text-xs font-mono text-stone-500">
              {intent.label}
            </div>
            {variants.map(v => (
              <div key={v.name} className="flex justify-center">
                <Button intent={intent.name} variant={v.name}>
                  Button
                </Button>
              </div>
            ))}
          </div>
        ))}
      </div>
    )
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: "全 intent × variant の組み合わせ一覧。デザインレビュー用。"
      }
    }
  }
}
