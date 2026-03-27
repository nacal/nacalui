import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, test } from "vitest"
import { Input } from "./Input"

describe("Input", () => {
  const renderCases = [
    {
      name: "ラベルが表示される",
      props: { label: "メール" },
      expected: { label: "メール" }
    },
    {
      name: "プレースホルダーが表示される",
      props: { label: "メール", placeholder: "you@example.com" },
      expected: { placeholder: "you@example.com" }
    },
    {
      name: "説明テキストが表示される",
      props: { label: "パスワード", description: "8文字以上" },
      expected: { description: "8文字以上" }
    },
    {
      name: "エラーメッセージが表示される",
      props: { label: "メール", isInvalid: true, errorMessage: "必須です" },
      expected: { error: "必須です" }
    },
    {
      name: "disabled で操作不可",
      props: { label: "メール", isDisabled: true },
      expected: { disabled: true }
    }
  ]

  test.each(renderCases)("$name", ({ props, expected }) => {
    render(<Input {...props} />)

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
  })

  test("ラベルと入力フィールドが紐づいている", () => {
    render(<Input label="メール" />)
    expect(screen.getByRole("textbox", { name: "メール" })).toBeInTheDocument()
  })

  test("テキスト入力ができる", async () => {
    render(<Input label="名前" />)
    const input = screen.getByRole("textbox")

    await userEvent.type(input, "山田太郎")
    expect(input).toHaveValue("山田太郎")
  })
})
