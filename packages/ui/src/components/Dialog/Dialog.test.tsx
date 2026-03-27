import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, test } from "vitest"
import { Button } from "../Button/Button"
import { Dialog } from "./Dialog"

describe("Dialog", () => {
  const cases = [
    {
      name: "トリガーが表示される",
      action: async () => {},
      expected: { trigger: "開く" }
    },
    {
      name: "トリガークリックでダイアログが開く",
      action: async () => {
        await userEvent.click(screen.getByRole("button", { name: "開く" }))
      },
      expected: { dialog: true, title: "確認", content: "メッセージ" }
    },
    {
      name: "閉じるボタンが表示される",
      action: async () => {
        await userEvent.click(screen.getByRole("button", { name: "開く" }))
      },
      expected: { closeButton: true }
    }
  ]

  test.each(cases)("$name", async ({ action, expected }) => {
    render(
      <Dialog trigger={<Button>開く</Button>} title="確認">
        メッセージ
      </Dialog>
    )

    await action()

    if (expected.trigger)
      expect(
        screen.getByRole("button", { name: expected.trigger })
      ).toBeInTheDocument()
    if (expected.dialog)
      expect(screen.getByRole("dialog")).toBeInTheDocument()
    if (expected.title)
      expect(screen.getByText(expected.title)).toBeInTheDocument()
    if (expected.content)
      expect(screen.getByText(expected.content)).toBeInTheDocument()
    if (expected.closeButton)
      expect(screen.getByLabelText("閉じる")).toBeInTheDocument()
  })
})
