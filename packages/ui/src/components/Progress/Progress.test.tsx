import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import { Progress } from "./Progress"

describe("Progress", () => {
  const cases = [
    {
      name: "progressbar ロールが存在する",
      props: { value: 50 },
      expected: { role: "progressbar" }
    },
    {
      name: "ラベルが表示される",
      props: { value: 50, label: "アップロード中" },
      expected: { label: "アップロード中" }
    },
    {
      name: "値が表示される",
      props: { value: 75, label: "進捗", showValue: true },
      expected: { valueText: true }
    }
  ]

  test.each(cases)("$name", ({ props, expected }) => {
    render(<Progress {...props} />)

    if (expected.role)
      expect(screen.getByRole(expected.role)).toBeInTheDocument()
    if (expected.label)
      expect(screen.getByText(expected.label)).toBeInTheDocument()
    if (expected.valueText)
      expect(screen.getByRole("progressbar")).toHaveAttribute(
        "aria-valuenow",
        "75"
      )
  })
})
