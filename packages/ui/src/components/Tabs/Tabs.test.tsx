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

  test("タブが表示される", () => {
    renderTabs()
    expect(screen.getByRole("tab", { name: "タブA" })).toBeInTheDocument()
    expect(screen.getByRole("tab", { name: "タブB" })).toBeInTheDocument()
  })

  test("デフォルト選択のパネルが表示される", () => {
    renderTabs()
    expect(screen.getByText("パネルA")).toBeVisible()
  })

  test("タブクリックでパネルが切り替わる", async () => {
    renderTabs()

    await userEvent.click(screen.getByRole("tab", { name: "タブB" }))
    expect(screen.getByText("パネルB")).toBeVisible()
  })

  test("tablist ロールが存在する", () => {
    renderTabs()
    expect(screen.getByRole("tablist")).toBeInTheDocument()
  })
})
