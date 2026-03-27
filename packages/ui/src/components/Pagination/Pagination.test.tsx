import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, test, vi } from "vitest"
import { Pagination } from "./Pagination"

describe("Pagination", () => {
  const renderCases = [
    {
      name: "現在ページに aria-current が付く",
      props: { currentPage: 3, totalPages: 10 },
      expected: { currentPage: "3" }
    },
    {
      name: "最初のページで前ボタンが disabled",
      props: { currentPage: 1, totalPages: 10 },
      expected: { prevDisabled: true }
    },
    {
      name: "最後のページで次ボタンが disabled",
      props: { currentPage: 10, totalPages: 10 },
      expected: { nextDisabled: true }
    },
    {
      name: "1ページのみの場合は非表示",
      props: { currentPage: 1, totalPages: 1 },
      expected: { hidden: true }
    }
  ]

  test.each(renderCases)("$name", ({ props, expected }) => {
    const onPageChange = vi.fn()
    const { container } = render(
      <Pagination {...props} onPageChange={onPageChange} />
    )

    if (expected.hidden) {
      expect(container.querySelector("nav")).not.toBeInTheDocument()
      return
    }
    if (expected.currentPage) {
      const current = screen.getByRole("button", { current: "page" })
      expect(current).toHaveTextContent(expected.currentPage)
    }
    if (expected.prevDisabled) {
      expect(screen.getByLabelText("前のページ")).toBeDisabled()
    }
    if (expected.nextDisabled) {
      expect(screen.getByLabelText("次のページ")).toBeDisabled()
    }
  })

  test("ページ番号クリックで onPageChange が呼ばれる", async () => {
    const onPageChange = vi.fn()
    render(
      <Pagination currentPage={1} totalPages={5} onPageChange={onPageChange} />
    )

    await userEvent.click(screen.getByRole("button", { name: "3" }))
    expect(onPageChange).toHaveBeenCalledWith(3)
  })
})
