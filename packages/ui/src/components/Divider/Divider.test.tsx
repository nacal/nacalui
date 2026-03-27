import { render } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import { Divider } from "./Divider"

describe("Divider", () => {
  const cases = [
    {
      name: "水平方向（デフォルト）",
      props: {},
      expectedClass: "w-full h-px"
    },
    {
      name: "垂直方向",
      props: { orientation: "vertical" as const },
      expectedClass: "h-full w-px"
    }
  ]

  test.each(cases)("$name", ({ props, expectedClass }) => {
    const { container } = render(<Divider {...props} />)
    const hr = container.querySelector("hr")

    expect(hr).toBeInTheDocument()
    expect(hr?.className).toContain(expectedClass)
  })
})
