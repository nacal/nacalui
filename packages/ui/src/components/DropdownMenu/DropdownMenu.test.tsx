import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, test, vi } from "vitest"
import { DropdownMenu, DropdownMenuItem } from "./DropdownMenu"

describe("DropdownMenu", () => {
  const cases = [
    {
      name: "トリガーが表示される",
      action: async () => {},
      expected: { trigger: "メニュー" }
    },
    {
      name: "トリガークリックでメニューが開く",
      action: async () => {
        await userEvent.click(screen.getByRole("button"))
      },
      expected: { menu: true, items: ["編集", "削除"] }
    },
    {
      name: "メニューアイテムクリックで onAction が呼ばれる",
      action: async (onAction: ReturnType<typeof vi.fn>) => {
        await userEvent.click(screen.getByRole("button"))
        await userEvent.click(screen.getByRole("menuitem", { name: "編集" }))
        expect(onAction).toHaveBeenCalled()
      },
      expected: { callsOnAction: true }
    }
  ]

  test.each(cases)("$name", async ({ action, expected }) => {
    const onAction = vi.fn()
    render(
      <DropdownMenu trigger={<span>メニュー</span>}>
        <DropdownMenuItem onAction={onAction}>編集</DropdownMenuItem>
        <DropdownMenuItem>削除</DropdownMenuItem>
      </DropdownMenu>
    )

    await action(onAction)

    if (expected.trigger)
      expect(screen.getByText(expected.trigger)).toBeInTheDocument()
    if (expected.menu) expect(screen.getByRole("menu")).toBeInTheDocument()
    if (expected.items) {
      for (const item of expected.items) {
        expect(screen.getByRole("menuitem", { name: item })).toBeInTheDocument()
      }
    }
  })
})
