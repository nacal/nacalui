import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import { Card, CardBody, CardFooter, CardHeader } from "./Card"

describe("Card", () => {
  const cases = [
    {
      name: "elevated（デフォルト）",
      props: { variant: undefined },
      expected: { className: "shadow-base" }
    },
    {
      name: "outlined",
      props: { variant: "outlined" as const },
      expected: { className: "border-stone-200" }
    },
    {
      name: "filled",
      props: { variant: "filled" as const },
      expected: { className: "bg-stone-50" }
    },
    {
      name: "CardHeader, CardBody, CardFooter が表示される",
      props: {},
      expected: { slots: ["ヘッダー", "ボディ", "フッター"] }
    }
  ]

  test.each(cases)("$name", ({ props, expected }) => {
    render(
      <Card variant={props.variant} data-testid="card">
        <CardHeader>ヘッダー</CardHeader>
        <CardBody>ボディ</CardBody>
        <CardFooter>フッター</CardFooter>
      </Card>
    )

    if (expected.className)
      expect(screen.getByTestId("card").className).toContain(expected.className)
    if (expected.slots) {
      for (const slot of expected.slots) {
        expect(screen.getByText(slot)).toBeInTheDocument()
      }
    }
  })
})
