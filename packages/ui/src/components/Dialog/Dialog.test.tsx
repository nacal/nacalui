import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, test } from "vitest"
import { Button } from "../Button/Button"
import { Dialog } from "./Dialog"

describe("Dialog", () => {
  test("トリガーが表示される", () => {
    render(
      <Dialog trigger={<Button>開く</Button>} title="テスト">
        コンテンツ
      </Dialog>
    )
    expect(screen.getByRole("button", { name: "開く" })).toBeInTheDocument()
  })

  test("トリガークリックでダイアログが開く", async () => {
    render(
      <Dialog trigger={<Button>開く</Button>} title="確認">
        メッセージ
      </Dialog>
    )

    await userEvent.click(screen.getByRole("button", { name: "開く" }))
    expect(screen.getByRole("dialog")).toBeInTheDocument()
    expect(screen.getByText("確認")).toBeInTheDocument()
    expect(screen.getByText("メッセージ")).toBeInTheDocument()
  })

  test("閉じるボタンが表示される", async () => {
    render(
      <Dialog trigger={<Button>開く</Button>} title="テスト">
        コンテンツ
      </Dialog>
    )

    await userEvent.click(screen.getByRole("button", { name: "開く" }))
    expect(screen.getByLabelText("閉じる")).toBeInTheDocument()
  })
})
