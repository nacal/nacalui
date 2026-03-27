import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import { Select, SelectItem } from "./Select"

describe("Select", () => {
  const cases = [
    {
      name: "ラベルが表示される",
      props: { label: "フルーツ" },
      expected: { label: "フルーツ" }
    },
    {
      name: "説明テキストが表示される",
      props: {
        label: "フルーツ",
        description: "好きなフルーツを選んでください"
      },
      expected: { description: "好きなフルーツを選んでください" }
    },
    {
      name: "エラーメッセージが表示される",
      props: {
        label: "フルーツ",
        isInvalid: true,
        errorMessage: "選択してください"
      },
      expected: { error: "選択してください" }
    },
    {
      name: "トリガーボタンが存在する",
      props: { label: "フルーツ", placeholder: "選択" },
      expected: { hasButton: true }
    }
  ]

  test.each(cases)("$name", ({ props, expected }) => {
    render(
      <Select {...props}>
        <SelectItem id="apple">りんご</SelectItem>
        <SelectItem id="banana">バナナ</SelectItem>
      </Select>
    )

    if (expected.label)
      expect(screen.getByText(expected.label)).toBeInTheDocument()
    if (expected.description)
      expect(screen.getByText(expected.description)).toBeInTheDocument()
    if (expected.error)
      expect(screen.getByText(expected.error)).toBeInTheDocument()
    if (expected.hasButton)
      expect(screen.getByRole("button")).toBeInTheDocument()
  })
})
