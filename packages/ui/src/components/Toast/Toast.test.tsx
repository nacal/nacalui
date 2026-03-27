import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, test } from "vitest"
import { ToastProvider, useToast } from "./Toast"

function ToastTrigger() {
  const { toast } = useToast()
  return (
    <button type="button" onClick={() => toast({ title: "テスト通知" })}>
      トースト表示
    </button>
  )
}

describe("Toast", () => {
  const cases = [
    {
      name: "useToast でトーストが表示される",
      action: async () => {
        await userEvent.click(
          screen.getByRole("button", { name: "トースト表示" })
        )
      },
      expected: { text: "テスト通知" }
    },
    {
      name: "トーストに閉じるボタンがある",
      action: async () => {
        await userEvent.click(
          screen.getByRole("button", { name: "トースト表示" })
        )
      },
      expected: { closeButton: true }
    },
    {
      name: "閉じるボタンでトーストが消える",
      action: async () => {
        await userEvent.click(
          screen.getByRole("button", { name: "トースト表示" })
        )
        await userEvent.click(screen.getByLabelText("閉じる"))
      },
      expected: { textHidden: "テスト通知" }
    }
  ]

  test.each(cases)("$name", async ({ action, expected }) => {
    render(
      <ToastProvider>
        <ToastTrigger />
      </ToastProvider>
    )

    await action()

    if (expected.text)
      expect(screen.getByText(expected.text)).toBeInTheDocument()
    if (expected.closeButton)
      expect(screen.getByLabelText("閉じる")).toBeInTheDocument()
    if (expected.textHidden)
      expect(screen.queryByText(expected.textHidden)).not.toBeInTheDocument()
  })
})
