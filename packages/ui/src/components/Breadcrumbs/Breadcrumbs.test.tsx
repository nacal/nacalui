import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import { BreadcrumbItem, Breadcrumbs } from "./Breadcrumbs"

describe("Breadcrumbs", () => {
  const cases = [
    {
      name: "全アイテムが表示される",
      expected: { items: ["ホーム", "設定", "現在"] }
    },
    {
      name: "ナビゲーションランドマークが存在する",
      expected: { hasList: true }
    }
  ]

  test.each(cases)("$name", ({ expected }) => {
    render(
      <Breadcrumbs>
        <BreadcrumbItem href="#">ホーム</BreadcrumbItem>
        <BreadcrumbItem href="#">設定</BreadcrumbItem>
        <BreadcrumbItem>現在</BreadcrumbItem>
      </Breadcrumbs>
    )

    if (expected.items) {
      for (const item of expected.items) {
        expect(screen.getByText(item)).toBeInTheDocument()
      }
    }
    if (expected.hasList)
      expect(screen.getByRole("list")).toBeInTheDocument()
  })
})
