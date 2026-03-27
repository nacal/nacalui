import { Tab, TabList, TabPanel, Tabs } from "@nacalui/ui"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "タブナビゲーション。関連コンテンツをパネルで切り替える。キーボード矢印キー対応。"
      }
    }
  },
  argTypes: {
    className: { table: { disable: true } }
  }
}

export default meta
type Story = StoryObj<typeof Tabs>

export const Default: Story = {
  render: () => (
    <Tabs defaultSelectedKey="tab1" className="w-96">
      <TabList aria-label="設定">
        <Tab id="tab1">一般</Tab>
        <Tab id="tab2">通知</Tab>
        <Tab id="tab3">セキュリティ</Tab>
      </TabList>
      <TabPanel id="tab1">
        <p className="text-sm text-stone-600">一般設定のコンテンツ。</p>
      </TabPanel>
      <TabPanel id="tab2">
        <p className="text-sm text-stone-600">通知設定のコンテンツ。</p>
      </TabPanel>
      <TabPanel id="tab3">
        <p className="text-sm text-stone-600">セキュリティ設定のコンテンツ。</p>
      </TabPanel>
    </Tabs>
  ),
  parameters: {
    docs: {
      description: {
        story: "基本的なタブ。TabList + Tab + TabPanel で構成する。"
      }
    }
  }
}

export const ManyTabs: Story = {
  render: () => (
    <Tabs defaultSelectedKey="overview" className="w-full max-w-lg">
      <TabList aria-label="プロジェクト">
        <Tab id="overview">概要</Tab>
        <Tab id="tasks">タスク</Tab>
        <Tab id="members">メンバー</Tab>
        <Tab id="settings">設定</Tab>
      </TabList>
      <TabPanel id="overview">
        <p className="text-sm text-stone-600">プロジェクトの概要情報。</p>
      </TabPanel>
      <TabPanel id="tasks">
        <p className="text-sm text-stone-600">タスク一覧。</p>
      </TabPanel>
      <TabPanel id="members">
        <p className="text-sm text-stone-600">メンバー一覧。</p>
      </TabPanel>
      <TabPanel id="settings">
        <p className="text-sm text-stone-600">プロジェクト設定。</p>
      </TabPanel>
    </Tabs>
  ),
  parameters: { docs: { description: { story: "タブが多い場合の例。" } } }
}
