import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import { Alert } from "./Alert"

describe("Alert", () => {
  const renderCases = [
    {
      name: "コンテンツが表示される",
      props: { children: "お知らせです" },
      expected: { text: "お知らせです", role: "alert" }
    },
    {
      name: "タイトル付きで表示される",
      props: { title: "エラー", children: "失敗しました" },
      expected: { title: "エラー", text: "失敗しました" }
    },
    {
      name: "intent=danger で表示される",
      props: { intent: "danger" as const, children: "削除されます" },
      expected: { text: "削除されます" }
    }
  ]

  test.each(renderCases)("$name", ({ props, expected }) => {
    render(<Alert {...props} />)

    if (expected.role)
      expect(screen.getByRole(expected.role)).toBeInTheDocument()
    if (expected.title)
      expect(screen.getByText(expected.title)).toBeInTheDocument()
    if (expected.text)
      expect(screen.getByText(expected.text)).toBeInTheDocument()
  })
})
