# nacalui

A personal design system and UI component library.

- Calm, monotone-based color palette
- Accessible components built on [react-aria-components](https://react-spectrum.adobe.com/react-aria/)
- [UnoCSS](https://unocss.dev/) + design tokens for styling
- Light / Dark theme support

## Setup

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

## Usage

```tsx
import { Button, Input, Card, CardBody } from "@nacalui/ui"

function Example() {
  return (
    <Card>
      <CardBody className="space-y-4">
        <Input label="Name" placeholder="John Doe" />
        <Button intent="primary">Save</Button>
      </CardBody>
    </Card>
  )
}
```

## Theming

`NacalUIProvider` supports `light`, `dark`, and `system` themes.

```tsx
import { NacalUIProvider, useTheme, Button } from "@nacalui/ui"

// "system" (follows OS preference) is the default
<NacalUIProvider defaultTheme="system">
  <App />
</NacalUIProvider>

// Change theme from within the app
function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  return (
    <Button
      variant="ghost"
      onPress={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? "Light" : "Dark"}
    </Button>
  )
}
```

## Components

| Category | Components |
|---|---|
| **Actions** | Button, Link, DropdownMenu |
| **Inputs** | Input, Textarea, Select, Checkbox, Radio, Switch |
| **Display** | Badge, Card, Alert, Avatar, Divider, Skeleton, Spinner, Progress |
| **Navigation** | Tabs, Breadcrumbs, Pagination, Accordion |
| **Overlays** | Dialog, Toast, Tooltip |

## UnoCSS Preset

Projects using UnoCSS can use design tokens as utility classes.

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

## Development

```bash
pnpm install
pnpm dev:docs     # Start Storybook
pnpm build        # Build tokens + ui
pnpm test         # Run tests
pnpm lint         # Lint with Biome
```

## Structure

```
packages/
  tokens/   # Design tokens + UnoCSS preset
  ui/       # React components
apps/
  docs/     # Storybook documentation
```

## License

MIT
