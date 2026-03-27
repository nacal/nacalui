import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import { BreadcrumbItem, Breadcrumbs } from "./Breadcrumbs"

describe("Breadcrumbs", () => {
  test("全アイテムが表示される", () => {
    render(
      <Breadcrumbs>
        <BreadcrumbItem href="#">ホーム</BreadcrumbItem>
        <BreadcrumbItem href="#">設定</BreadcrumbItem>
        <BreadcrumbItem>現在</BreadcrumbItem>
      </Breadcrumbs>
    )
    expect(screen.getByText("ホーム")).toBeInTheDocument()
    expect(screen.getByText("設定")).toBeInTheDocument()
    expect(screen.getByText("現在")).toBeInTheDocument()
  })

  test("ナビゲーションランドマークが存在する", () => {
    render(
      <Breadcrumbs>
        <BreadcrumbItem>ホーム</BreadcrumbItem>
      </Breadcrumbs>
    )
    expect(screen.getByRole("list")).toBeInTheDocument()
  })
})
