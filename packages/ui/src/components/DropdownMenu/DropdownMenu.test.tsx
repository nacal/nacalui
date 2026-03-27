import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, test, vi } from "vitest"
import { DropdownMenu, DropdownMenuItem } from "./DropdownMenu"

describe("DropdownMenu", () => {
  test("トリガーが表示される", () => {
    render(
      <DropdownMenu trigger={<span>メニュー</span>}>
        <DropdownMenuItem>編集</DropdownMenuItem>
      </DropdownMenu>
    )
    expect(screen.getByText("メニュー")).toBeInTheDocument()
  })

  test("トリガークリックでメニューが開く", async () => {
    render(
      <DropdownMenu trigger={<span>メニュー</span>}>
        <DropdownMenuItem>編集</DropdownMenuItem>
        <DropdownMenuItem>削除</DropdownMenuItem>
      </DropdownMenu>
    )

    await userEvent.click(screen.getByRole("button"))
    expect(screen.getByRole("menu")).toBeInTheDocument()
    expect(screen.getByRole("menuitem", { name: "編集" })).toBeInTheDocument()
    expect(screen.getByRole("menuitem", { name: "削除" })).toBeInTheDocument()
  })

  test("メニューアイテムクリックで onAction が呼ばれる", async () => {
    const onAction = vi.fn()
    render(
      <DropdownMenu trigger={<span>メニュー</span>}>
        <DropdownMenuItem onAction={onAction}>編集</DropdownMenuItem>
      </DropdownMenu>
    )

    await userEvent.click(screen.getByRole("button"))
    await userEvent.click(screen.getByRole("menuitem", { name: "編集" }))
    expect(onAction).toHaveBeenCalled()
  })
})
