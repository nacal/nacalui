import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import { Card, CardBody, CardFooter, CardHeader } from "./Card"

describe("Card", () => {
  const variantCases = [
    {
      name: "elevated（デフォルト）",
      variant: undefined,
      expectedClass: "shadow-base"
    },
    {
      name: "outlined",
      variant: "outlined" as const,
      expectedClass: "border-stone-200"
    },
    { name: "filled", variant: "filled" as const, expectedClass: "bg-stone-50" }
  ]

  test.each(variantCases)("$name が正しくレンダリング", ({
    variant,
    expectedClass
  }) => {
    render(
      <Card variant={variant} data-testid="card">
        <CardBody>コンテンツ</CardBody>
      </Card>
    )
    expect(screen.getByTestId("card").className).toContain(expectedClass)
  })

  test("CardHeader, CardBody, CardFooter が表示される", () => {
    render(
      <Card>
        <CardHeader>ヘッダー</CardHeader>
        <CardBody>ボディ</CardBody>
        <CardFooter>フッター</CardFooter>
      </Card>
    )
    expect(screen.getByText("ヘッダー")).toBeInTheDocument()
    expect(screen.getByText("ボディ")).toBeInTheDocument()
    expect(screen.getByText("フッター")).toBeInTheDocument()
  })
})
