import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, test, vi } from "vitest"
import { Switch } from "./Switch"

describe("Switch", () => {
  const cases = [
    {
      name: "ラベルが表示される",
      props: { children: "ダークモード" },
      action: async () => {},
      expected: { label: "ダークモード" }
    },
    {
      name: "デフォルトでオン",
      props: { defaultSelected: true, children: "通知" },
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
      name: "クリックでトグルされる",
      props: { children: "通知" },
      action: async (onChange: ReturnType<typeof vi.fn>) => {
        await userEvent.click(screen.getByRole("switch"))
        expect(onChange).toHaveBeenCalledWith(true)
      },
      expected: { callsOnChange: true }
    }
  ]

  test.each(cases)("$name", async ({ props, action, expected }) => {
    const onChange = vi.fn()
    render(<Switch onChange={onChange} {...props} />)
    const sw = screen.getByRole("switch")

    await action(onChange)

    if (expected.label)
      expect(screen.getByText(expected.label)).toBeInTheDocument()
    if (expected.checked) expect(sw).toBeChecked()
    if (expected.disabled) expect(sw).toBeDisabled()
  })
})
