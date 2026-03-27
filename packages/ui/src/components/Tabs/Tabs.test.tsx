import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, test } from "vitest"
import { Tab, TabList, TabPanel, Tabs } from "./Tabs"

describe("Tabs", () => {
  const renderTabs = () =>
    render(
      <Tabs defaultSelectedKey="a">
        <TabList aria-label="テスト">
          <Tab id="a">タブA</Tab>
          <Tab id="b">タブB</Tab>
        </TabList>
        <TabPanel id="a">パネルA</TabPanel>
        <TabPanel id="b">パネルB</TabPanel>
      </Tabs>
    )

  const cases = [
    {
      name: "タブが表示される",
      action: async () => {},
      expected: { tabs: ["タブA", "タブB"] }
    },
    {
      name: "デフォルト選択のパネルが表示される",
      action: async () => {},
      expected: { visiblePanel: "パネルA" }
    },
    {
      name: "タブクリックでパネルが切り替わる",
      action: async () => {
        await userEvent.click(screen.getByRole("tab", { name: "タブB" }))
      },
      expected: { visiblePanel: "パネルB" }
    },
    {
      name: "tablist ロールが存在する",
      action: async () => {},
      expected: { hasTablist: true }
    }
  ]

  test.each(cases)("$name", async ({ action, expected }) => {
    renderTabs()

    await action()

    if (expected.tabs) {
      for (const tab of expected.tabs) {
        expect(screen.getByRole("tab", { name: tab })).toBeInTheDocument()
      }
    }
    if (expected.visiblePanel)
      expect(screen.getByText(expected.visiblePanel)).toBeVisible()
    if (expected.hasTablist)
      expect(screen.getByRole("tablist")).toBeInTheDocument()
  })
})
