import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, test } from "vitest"
import { Textarea } from "./Textarea"

describe("Textarea", () => {
  const renderCases = [
    {
      name: "ラベルが表示される",
      props: { label: "コメント" },
      expected: { label: "コメント" }
    },
    {
      name: "エラーメッセージが表示される",
      props: { label: "コメント", isInvalid: true, errorMessage: "必須です" },
      expected: { error: "必須です" }
    },
    {
      name: "disabled で操作不可",
      props: { label: "コメント", isDisabled: true },
      expected: { disabled: true }
    }
  ]

  test.each(renderCases)("$name", ({ props, expected }) => {
    render(<Textarea {...props} />)

    if (expected.label)
      expect(screen.getByText(expected.label)).toBeInTheDocument()
    if (expected.error)
      expect(screen.getByText(expected.error)).toBeInTheDocument()
    if (expected.disabled) expect(screen.getByRole("textbox")).toBeDisabled()
  })

  test("テキスト入力ができる", async () => {
    render(<Textarea label="コメント" />)
    const textarea = screen.getByRole("textbox")

    await userEvent.type(textarea, "テスト入力")
    expect(textarea).toHaveValue("テスト入力")
  })
})
