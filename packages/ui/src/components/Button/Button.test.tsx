import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, test, vi } from "vitest"
import { Button } from "./Button"

describe("Button", () => {
  const cases = [
    {
      name: "デフォルトで primary filled として表示",
      props: { children: "保存" },
      action: async () => {},
      expected: { text: "保存", role: "button" }
    },
    {
      name: "intent=danger でテキストが表示される",
      props: { intent: "danger" as const, children: "削除" },
      action: async () => {},
      expected: { text: "削除" }
    },
    {
      name: "isDisabled で操作不可",
      props: { isDisabled: true, children: "保存" },
      action: async () => {},
      expected: { disabled: true }
    },
    {
      name: "loading でスピナー表示 + disabled",
      props: { loading: true, children: "保存中" },
      action: async () => {},
      expected: { disabled: true, hasSpinner: true }
    },
    {
      name: "クリックで onPress が呼ばれる",
      props: { children: "保存" },
      action: async (onPress: ReturnType<typeof vi.fn>) => {
        await userEvent.click(screen.getByRole("button", { name: "保存" }))
        expect(onPress).toHaveBeenCalledOnce()
      },
      expected: { callsOnPress: true }
    },
    {
      name: "isDisabled の場合 onPress が呼ばれない",
      props: { isDisabled: true, children: "保存" },
      action: async (onPress: ReturnType<typeof vi.fn>) => {
        await userEvent.click(screen.getByRole("button"))
        expect(onPress).not.toHaveBeenCalled()
      },
      expected: { callsOnPress: true }
    },
    {
      name: "icon を左に表示する",
      props: {
        icon: <span data-testid="icon">+</span>,
        children: "追加"
      },
      action: async () => {},
      expected: { icon: true, text: "追加" }
    },
    {
      name: "loading 時は icon ではなくスピナーを表示する",
      props: {
        loading: true,
        icon: <span data-testid="icon">+</span>,
        children: "保存中"
      },
      action: async () => {},
      expected: { iconHidden: true }
    }
  ]

  test.each(cases)("$name", async ({ props, action, expected }) => {
    const onPress = vi.fn()
    render(<Button onPress={onPress} {...props} />)
    const btn = screen.getByRole("button")

    await action(onPress)

    if (expected.text) expect(btn).toHaveTextContent(expected.text)
    if (expected.disabled) expect(btn).toBeDisabled()
    if (expected.hasSpinner)
      expect(btn.querySelector("[aria-hidden]")).toBeInTheDocument()
    if (expected.icon)
      expect(screen.getByTestId("icon")).toBeInTheDocument()
    if (expected.iconHidden)
      expect(screen.queryByTestId("icon")).not.toBeInTheDocument()
  })
})
