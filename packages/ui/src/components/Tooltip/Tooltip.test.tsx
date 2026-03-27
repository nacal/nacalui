import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import { Tooltip } from "./Tooltip"

describe("Tooltip", () => {
  const cases = [
    {
      name: "トリガーが表示される",
      expected: { trigger: "ホバー対象" }
    },
    {
      name: "初期状態でツールチップは非表示",
      expected: { tooltipHidden: true }
    }
  ]

  test.each(cases)("$name", ({ expected }) => {
    render(
      <Tooltip content="ヒント">
        <span>ホバー対象</span>
      </Tooltip>
    )

    if (expected.trigger)
      expect(screen.getByText(expected.trigger)).toBeInTheDocument()
    if (expected.tooltipHidden)
      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument()
  })
})
