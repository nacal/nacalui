import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, test, vi } from "vitest"
import { Checkbox } from "./Checkbox"

describe("Checkbox", () => {
  const renderCases = [
    {
      name: "ラベルが表示される",
      props: { children: "同意する" },
      expected: { label: "同意する" }
    },
    {
      name: "デフォルトでチェック済み",
      props: { defaultSelected: true, children: "選択済み" },
      expected: { checked: true }
    },
    {
      name: "disabled で操作不可",
      props: { isDisabled: true, children: "無効" },
      expected: { disabled: true }
    }
  ]

  test.each(renderCases)("$name", ({ props, expected }) => {
    render(<Checkbox {...props} />)
    const checkbox = screen.getByRole("checkbox")

    if (expected.label)
      expect(screen.getByText(expected.label)).toBeInTheDocument()
    if (expected.checked) expect(checkbox).toBeChecked()
    if (expected.disabled) expect(checkbox).toBeDisabled()
  })

  test("クリックでチェック状態が変わる", async () => {
    const onChange = vi.fn()
    render(<Checkbox onChange={onChange}>同意する</Checkbox>)

    await userEvent.click(screen.getByRole("checkbox"))
    expect(onChange).toHaveBeenCalledWith(true)
  })
})
