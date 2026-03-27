import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, test } from "vitest"
import { Input } from "./Input"

describe("Input", () => {
  const cases = [
    {
      name: "ラベルが表示される",
      props: { label: "メール" },
      action: async () => {},
      expected: { label: "メール" }
    },
    {
      name: "プレースホルダーが表示される",
      props: { label: "メール", placeholder: "you@example.com" },
      action: async () => {},
      expected: { placeholder: "you@example.com" }
    },
    {
      name: "説明テキストが表示される",
      props: { label: "パスワード", description: "8文字以上" },
      action: async () => {},
      expected: { description: "8文字以上" }
    },
    {
      name: "エラーメッセージが表示される",
      props: { label: "メール", isInvalid: true, errorMessage: "必須です" },
      action: async () => {},
      expected: { error: "必須です" }
    },
    {
      name: "disabled で操作不可",
      props: { label: "メール", isDisabled: true },
      action: async () => {},
      expected: { disabled: true }
    },
    {
      name: "ラベルと入力フィールドが紐づいている",
      props: { label: "メール" },
      action: async () => {},
      expected: { labeledInput: "メール" }
    },
    {
      name: "テキスト入力ができる",
      props: { label: "名前" },
      action: async () => {
        await userEvent.type(screen.getByRole("textbox"), "山田太郎")
      },
      expected: { value: "山田太郎" }
    }
  ]

  test.each(cases)("$name", async ({ props, action, expected }) => {
    render(<Input {...props} />)

    await action()

    if (expected.label)
      expect(screen.getByText(expected.label)).toBeInTheDocument()
    if (expected.placeholder)
      expect(
        screen.getByPlaceholderText(expected.placeholder)
      ).toBeInTheDocument()
    if (expected.description)
      expect(screen.getByText(expected.description)).toBeInTheDocument()
    if (expected.error)
      expect(screen.getByText(expected.error)).toBeInTheDocument()
    if (expected.disabled) expect(screen.getByRole("textbox")).toBeDisabled()
    if (expected.labeledInput)
      expect(
        screen.getByRole("textbox", { name: expected.labeledInput })
      ).toBeInTheDocument()
    if (expected.value)
      expect(screen.getByRole("textbox")).toHaveValue(expected.value)
  })
})
