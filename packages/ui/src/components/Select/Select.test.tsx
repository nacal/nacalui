import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import { Select, SelectItem } from "./Select"

describe("Select", () => {
  const renderCases = [
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
    }
  ]

  test.each(renderCases)("$name", ({ props, expected }) => {
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
  })

  test("トリガーボタンが存在する", () => {
    render(
      <Select label="フルーツ" placeholder="選択">
        <SelectItem id="apple">りんご</SelectItem>
      </Select>
    )
    expect(screen.getByRole("button")).toBeInTheDocument()
  })
})
