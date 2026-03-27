import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, test, vi } from "vitest"
import { Button } from "./Button"

describe("Button", () => {
  const renderCases = [
    {
      name: "デフォルトで primary filled として表示",
      props: { children: "保存" },
      expected: { text: "保存", role: "button" }
    },
    {
      name: "intent=danger でテキストが表示される",
      props: { intent: "danger" as const, children: "削除" },
      expected: { text: "削除" }
    },
    {
      name: "isDisabled で操作不可",
      props: { isDisabled: true, children: "保存" },
      expected: { disabled: true }
    },
    {
      name: "loading でスピナー表示 + disabled",
      props: { loading: true, children: "保存中" },
      expected: { disabled: true, hasSpinner: true }
    }
  ]

  test.each(renderCases)("$name", ({ props, expected }) => {
    render(<Button {...props} />)
    const btn = screen.getByRole("button")

    if (expected.text) expect(btn).toHaveTextContent(expected.text)
    if (expected.disabled) expect(btn).toBeDisabled()
    if (expected.hasSpinner)
      expect(btn.querySelector("[aria-hidden]")).toBeInTheDocument()
  })

  test("クリックで onPress が呼ばれる", async () => {
    const onPress = vi.fn()
    render(<Button onPress={onPress}>保存</Button>)

    await userEvent.click(screen.getByRole("button", { name: "保存" }))
    expect(onPress).toHaveBeenCalledOnce()
  })

  test("isDisabled の場合 onPress が呼ばれない", async () => {
    const onPress = vi.fn()
    render(
      <Button isDisabled onPress={onPress}>
        保存
      </Button>
    )

    await userEvent.click(screen.getByRole("button"))
    expect(onPress).not.toHaveBeenCalled()
  })

  test("icon を左に表示する", () => {
    render(<Button icon={<span data-testid="icon">+</span>}>追加</Button>)

    expect(screen.getByTestId("icon")).toBeInTheDocument()
    expect(screen.getByRole("button")).toHaveTextContent("追加")
  })

  test("loading 時は icon ではなくスピナーを表示する", () => {
    render(
      <Button loading icon={<span data-testid="icon">+</span>}>
        保存中
      </Button>
    )

    expect(screen.queryByTestId("icon")).not.toBeInTheDocument()
  })
})
