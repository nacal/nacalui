import { render } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import { Skeleton } from "./Skeleton"

describe("Skeleton", () => {
  const cases = [
    {
      name: "text（デフォルト）",
      props: {},
      expectedClass: "rounded-md h-4"
    },
    {
      name: "circular",
      props: { variant: "circular" as const, width: 48, height: 48 },
      expectedClass: "rounded-full"
    },
    {
      name: "rectangular",
      props: { variant: "rectangular" as const },
      expectedClass: "rounded-lg"
    }
  ]

  test.each(cases)("$name", ({ props, expectedClass }) => {
    const { container } = render(<Skeleton {...props} />)
    const el = container.firstChild as HTMLElement

    expect(el.className).toContain(expectedClass)
    expect(el).toHaveAttribute("aria-hidden", "true")
  })

  test("width と height が style に反映される", () => {
    const { container } = render(<Skeleton width="80%" height={100} />)
    const el = container.firstChild as HTMLElement

    expect(el.style.width).toBe("80%")
    expect(el.style.height).toBe("100px")
  })
})
