# nacalui

個人プロジェクト向けのデザインシステム・UIコンポーネントライブラリ。

- 落ち着いたモノトーンベースのカラーパレット
- [react-aria-components](https://react-spectrum.adobe.com/react-aria/) ベースのアクセシビリティ
- [UnoCSS](https://unocss.dev/) + デザイントークンによるスタイリング
- Light / Dark テーマ対応

## セットアップ

```bash
pnpm add @nacalui/ui
```

```tsx
import { NacalUIProvider } from "@nacalui/ui"
import "@nacalui/ui/styles"

function App() {
  return (
    <NacalUIProvider>
      <YourApp />
    </NacalUIProvider>
  )
}
```

## 使い方

```tsx
import { Button, Input, Card, CardBody } from "@nacalui/ui"

function Example() {
  return (
    <Card>
      <CardBody className="space-y-4">
        <Input label="名前" placeholder="山田太郎" />
        <Button intent="primary">保存する</Button>
      </CardBody>
    </Card>
  )
}
```

## テーマ

`NacalUIProvider` は `light` / `dark` / `system` のテーマをサポートします。

```tsx
import { NacalUIProvider, useTheme, Button } from "@nacalui/ui"

// system（OS設定に追従）がデフォルト
<NacalUIProvider defaultTheme="system">
  <App />
</NacalUIProvider>

// アプリ内からテーマを変更
function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  return (
    <Button
      variant="ghost"
      onPress={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? "☀️" : "🌙"}
    </Button>
  )
}
```

## コンポーネント

| カテゴリ | コンポーネント |
|---|---|
| **アクション** | Button, Link, DropdownMenu |
| **入力** | Input, Textarea, Select, Checkbox, Radio, Switch |
| **表示** | Badge, Card, Alert, Avatar, Divider, Skeleton, Spinner, Progress |
| **ナビゲーション** | Tabs, Breadcrumbs, Pagination, Accordion |
| **オーバーレイ** | Dialog, Toast, Tooltip |

## UnoCSS プリセット

UnoCSS を使うプロジェクトではデザイントークンをユーティリティクラスとして使えます。

```bash
pnpm add -D @nacalui/tokens unocss
```

```ts
// uno.config.ts
import { presetNacalui } from "@nacalui/tokens/uno-preset"
import { defineConfig, presetUno } from "unocss"

export default defineConfig({
  presets: [presetUno(), presetNacalui()],
})
```

## 開発

```bash
pnpm install
pnpm dev:docs     # Storybook を起動
pnpm build        # tokens + ui をビルド
pnpm test         # テストを実行
pnpm lint         # Biome で lint
```

## パッケージ構成

```
packages/
  tokens/   # デザイントークン + UnoCSS プリセット
  ui/       # React コンポーネント
apps/
  docs/     # Storybook ドキュメント
```

## ライセンス

MIT
