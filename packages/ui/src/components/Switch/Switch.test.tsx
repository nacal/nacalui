import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, test, vi } from "vitest"
import { Switch } from "./Switch"

describe("Switch", () => {
  const renderCases = [
    {
      name: "ラベルが表示される",
      props: { children: "ダークモード" },
      expected: { label: "ダークモード" }
    },
    {
      name: "デフォルトでオン",
      props: { defaultSelected: true, children: "通知" },
      expected: { checked: true }
    },
    {
      name: "disabled で操作不可",
      props: { isDisabled: true, children: "無効" },
      expected: { disabled: true }
    }
  ]

  test.each(renderCases)("$name", ({ props, expected }) => {
    render(<Switch {...props} />)
    const sw = screen.getByRole("switch")

    if (expected.label)
      expect(screen.getByText(expected.label)).toBeInTheDocument()
    if (expected.checked) expect(sw).toBeChecked()
    if (expected.disabled) expect(sw).toBeDisabled()
  })

  test("クリックでトグルされる", async () => {
    const onChange = vi.fn()
    render(<Switch onChange={onChange}>通知</Switch>)

    await userEvent.click(screen.getByRole("switch"))
    expect(onChange).toHaveBeenCalledWith(true)
  })
})
