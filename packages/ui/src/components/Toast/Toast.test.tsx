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
  test("useToast でトーストが表示される", async () => {
    render(
      <ToastProvider>
        <ToastTrigger />
      </ToastProvider>
    )

    await userEvent.click(screen.getByRole("button", { name: "トースト表示" }))
    expect(screen.getByText("テスト通知")).toBeInTheDocument()
  })

  test("トーストに閉じるボタンがある", async () => {
    render(
      <ToastProvider>
        <ToastTrigger />
      </ToastProvider>
    )

    await userEvent.click(screen.getByRole("button", { name: "トースト表示" }))
    expect(screen.getByLabelText("閉じる")).toBeInTheDocument()
  })

  test("閉じるボタンでトーストが消える", async () => {
    render(
      <ToastProvider>
        <ToastTrigger />
      </ToastProvider>
    )

    await userEvent.click(screen.getByRole("button", { name: "トースト表示" }))
    expect(screen.getByText("テスト通知")).toBeInTheDocument()

    await userEvent.click(screen.getByLabelText("閉じる"))
    expect(screen.queryByText("テスト通知")).not.toBeInTheDocument()
  })
})
