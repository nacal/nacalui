import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, test } from "vitest"
import { Tooltip } from "./Tooltip"

describe("Tooltip", () => {
  test("トリガーが表示される", () => {
    render(
      <Tooltip content="ヒント">
        <span>ホバー対象</span>
      </Tooltip>
    )
    expect(screen.getByText("ホバー対象")).toBeInTheDocument()
  })

  test("初期状態でツールチップは非表示", () => {
    render(
      <Tooltip content="ヒント">
        <span>ホバー対象</span>
      </Tooltip>
    )
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument()
  })
})
