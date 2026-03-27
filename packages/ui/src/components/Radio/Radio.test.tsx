import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, test, vi } from "vitest"
import { Radio, RadioGroup } from "./Radio"

describe("RadioGroup", () => {
  const cases = [
    {
      name: "ラベルが表示される",
      props: { label: "通知方法" },
      action: async () => {},
      expected: { label: "通知方法" }
    },
    {
      name: "エラーメッセージが表示される",
      props: {
        label: "通知",
        isInvalid: true,
        errorMessage: "選択してください"
      },
      action: async () => {},
      expected: { error: "選択してください" }
    },
    {
      name: "disabled で操作不可",
      props: { label: "通知", isDisabled: true },
      action: async () => {},
      expected: { disabled: true }
    },
    {
      name: "クリックで選択が変わる",
      props: { label: "通知" },
      action: async (onChange: ReturnType<typeof vi.fn>) => {
        await userEvent.click(screen.getByRole("radio", { name: "SMS" }))
        expect(onChange).toHaveBeenCalledWith("sms")
      },
      expected: { callsOnChange: true }
    }
  ]

  test.each(cases)("$name", async ({ props, action, expected }) => {
    const onChange = vi.fn()
    render(
      <RadioGroup onChange={onChange} {...props}>
        <Radio value="email">メール</Radio>
        <Radio value="sms">SMS</Radio>
      </RadioGroup>
    )

    await action(onChange)

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
})
