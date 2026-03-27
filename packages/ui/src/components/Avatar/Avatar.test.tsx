import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import { Avatar } from "./Avatar"

describe("Avatar", () => {
  const renderCases = [
    {
      name: "画像が表示される",
      props: { src: "https://example.com/avatar.jpg", alt: "User" },
      expected: { img: true, alt: "User" }
    },
    {
      name: "フォールバックイニシャルが表示される",
      props: { fallback: "YT" },
      expected: { text: "YT" }
    },
    {
      name: "src も fallback もない場合デフォルトアイコン",
      props: {},
      expected: { hasIcon: true }
    }
  ]

  test.each(renderCases)("$name", ({ props, expected }) => {
    render(<Avatar {...props} />)

    if (expected.img)
      expect(
        screen.getByRole("img", { name: expected.alt })
      ).toBeInTheDocument()
    if (expected.text)
      expect(screen.getByText(expected.text)).toBeInTheDocument()
    if (expected.hasIcon)
      expect(document.querySelector("[aria-hidden]")).toBeInTheDocument()
  })
})
