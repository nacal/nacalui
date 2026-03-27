import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, test, vi } from "vitest"
import { Radio, RadioGroup } from "./Radio"

describe("RadioGroup", () => {
  const renderCases = [
    {
      name: "ラベルが表示される",
      props: { label: "通知方法" },
      expected: { label: "通知方法" }
    },
    {
      name: "エラーメッセージが表示される",
      props: {
        label: "通知",
        isInvalid: true,
        errorMessage: "選択してください"
      },
      expected: { error: "選択してください" }
    },
    {
      name: "disabled で操作不可",
      props: { label: "通知", isDisabled: true },
      expected: { disabled: true }
    }
  ]

  test.each(renderCases)("$name", ({ props, expected }) => {
    render(
      <RadioGroup {...props}>
        <Radio value="a">A</Radio>
        <Radio value="b">B</Radio>
      </RadioGroup>
    )

    if (expected.label)
      expect(screen.getByText(expected.label)).toBeInTheDocument()
    if (expected.error)
      expect(screen.getByText(expected.error)).toBeInTheDocument()
    if (expected.disabled) {
      for (const radio of screen.getAllByRole("radio")) {
        expect(radio).toBeDisabled()
      }
    }
  })

  test("クリックで選択が変わる", async () => {
    const onChange = vi.fn()
    render(
      <RadioGroup label="通知" onChange={onChange}>
        <Radio value="email">メール</Radio>
        <Radio value="sms">SMS</Radio>
      </RadioGroup>
    )

    await userEvent.click(screen.getByRole("radio", { name: "SMS" }))
    expect(onChange).toHaveBeenCalledWith("sms")
  })
})
