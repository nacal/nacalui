import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, test } from "vitest"
import { Textarea } from "./Textarea"

describe("Textarea", () => {
  const cases = [
    {
      name: "ラベルが表示される",
      props: { label: "コメント" },
      action: async () => {},
      expected: { label: "コメント" }
    },
    {
      name: "エラーメッセージが表示される",
      props: { label: "コメント", isInvalid: true, errorMessage: "必須です" },
      action: async () => {},
      expected: { error: "必須です" }
    },
    {
      name: "disabled で操作不可",
      props: { label: "コメント", isDisabled: true },
      action: async () => {},
      expected: { disabled: true }
    },
    {
      name: "テキスト入力ができる",
      props: { label: "コメント" },
      action: async () => {
        await userEvent.type(screen.getByRole("textbox"), "テスト入力")
      },
      expected: { value: "テスト入力" }
    }
  ]

  test.each(cases)("$name", async ({ props, action, expected }) => {
    render(<Textarea {...props} />)

    await action()

    if (expected.label)
      expect(screen.getByText(expected.label)).toBeInTheDocument()
    if (expected.error)
      expect(screen.getByText(expected.error)).toBeInTheDocument()
    if (expected.disabled) expect(screen.getByRole("textbox")).toBeDisabled()
    if (expected.value)
      expect(screen.getByRole("textbox")).toHaveValue(expected.value)
  })
})
