import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import { Badge } from "./Badge"

describe("Badge", () => {
  const renderCases = [
    {
      name: "テキストが表示される",
      props: { children: "公開中" },
      expected: { text: "公開中" }
    },
    {
      name: "intent=success でレンダリング",
      props: { intent: "success" as const, children: "成功" },
      expected: { text: "成功" }
    },
    {
      name: "variant=filled でレンダリング",
      props: { variant: "filled" as const, children: "New" },
      expected: { text: "New" }
    },
    {
      name: "variant=outline でボーダーが付く",
      props: { variant: "outline" as const, children: "Draft" },
      expected: { text: "Draft", hasBorder: true }
    }
  ]

  test.each(renderCases)("$name", ({ props, expected }) => {
    render(<Badge {...props} />)
    const badge = screen.getByText(expected.text)

    expect(badge).toBeInTheDocument()
    if (expected.hasBorder) expect(badge.className).toContain("border")
  })
})
