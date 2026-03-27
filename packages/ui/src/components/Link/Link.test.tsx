import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import { Link } from "./Link"

describe("Link", () => {
  const cases = [
    {
      name: "テキストが表示される",
      props: { href: "#", children: "リンク" },
      expected: { text: "リンク" }
    },
    {
      name: "default バリアントで下線が付く",
      props: { href: "#", children: "リンク" },
      expected: { hasUnderline: true }
    },
    {
      name: "muted バリアント",
      props: { href: "#", variant: "muted" as const, children: "補足" },
      expected: { text: "補足" }
    }
  ]

  test.each(cases)("$name", ({ props, expected }) => {
    render(<Link {...props} />)
    const link = screen.getByRole("link")

    if (expected.text) expect(link).toHaveTextContent(expected.text)
    if (expected.hasUnderline) expect(link.className).toContain("underline")
  })
})
