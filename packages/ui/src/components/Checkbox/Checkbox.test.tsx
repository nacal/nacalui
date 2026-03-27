import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, test, vi } from "vitest"
import { Checkbox } from "./Checkbox"

describe("Checkbox", () => {
  const cases = [
    {
      name: "ラベルが表示される",
      props: { children: "同意する" },
      action: async () => {},
      expected: { label: "同意する" }
    },
    {
      name: "デフォルトでチェック済み",
      props: { defaultSelected: true, children: "選択済み" },
      action: async () => {},
      expected: { checked: true }
    },
    {
      name: "disabled で操作不可",
      props: { isDisabled: true, children: "無効" },
      action: async () => {},
      expected: { disabled: true }
    },
    {
      name: "クリックでチェック状態が変わる",
      props: { children: "同意する" },
      action: async (onChange: ReturnType<typeof vi.fn>) => {
        await userEvent.click(screen.getByRole("checkbox"))
        expect(onChange).toHaveBeenCalledWith(true)
      },
      expected: { callsOnChange: true }
    }
  ]

  test.each(cases)("$name", async ({ props, action, expected }) => {
    const onChange = vi.fn()
    render(<Checkbox onChange={onChange} {...props} />)
    const checkbox = screen.getByRole("checkbox")

    await action(onChange)

    if (expected.label)
      expect(screen.getByText(expected.label)).toBeInTheDocument()
    if (expected.checked) expect(checkbox).toBeChecked()
    if (expected.disabled) expect(checkbox).toBeDisabled()
  })
})
