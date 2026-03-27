import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import { Spinner } from "./Spinner"

describe("Spinner", () => {
  const cases = [
    {
      name: "デフォルトでスクリーンリーダー用ラベルが付く",
      props: {},
      expected: { status: true, label: "読み込み中" }
    },
    {
      name: "カスタムラベル",
      props: { label: "送信中" },
      expected: { label: "送信中" }
    }
  ]

  test.each(cases)("$name", ({ props, expected }) => {
    render(<Spinner {...props} />)

    if (expected.status) expect(screen.getByRole("status")).toBeInTheDocument()
    if (expected.label)
      expect(screen.getByText(expected.label)).toBeInTheDocument()
  })
})
