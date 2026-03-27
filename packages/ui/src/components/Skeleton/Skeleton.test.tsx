import { render } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import { Skeleton } from "./Skeleton"

describe("Skeleton", () => {
  const cases = [
    {
      name: "text（デフォルト）",
      props: {},
      expected: { className: "rounded-md h-4" }
    },
    {
      name: "circular",
      props: { variant: "circular" as const, width: 48, height: 48 },
      expected: { className: "rounded-full" }
    },
    {
      name: "rectangular",
      props: { variant: "rectangular" as const },
      expected: { className: "rounded-lg" }
    },
    {
      name: "width と height が style に反映される",
      props: { width: "80%", height: 100 },
      expected: { styleWidth: "80%", styleHeight: "100px" }
    }
  ]

  test.each(cases)("$name", ({ props, expected }) => {
    const { container } = render(<Skeleton {...props} />)
    const el = container.firstChild as HTMLElement

    expect(el).toHaveAttribute("aria-hidden", "true")
    if (expected.className) expect(el.className).toContain(expected.className)
    if (expected.styleWidth) expect(el.style.width).toBe(expected.styleWidth)
    if (expected.styleHeight) expect(el.style.height).toBe(expected.styleHeight)
  })
})
