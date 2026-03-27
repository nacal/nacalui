import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, test, vi } from "vitest"
import { Pagination } from "./Pagination"

describe("Pagination", () => {
  const cases = [
    {
      name: "現在ページに aria-current が付く",
      props: { currentPage: 3, totalPages: 10 },
      action: async () => {},
      expected: { currentPage: "3" }
    },
    {
      name: "最初のページで前ボタンが disabled",
      props: { currentPage: 1, totalPages: 10 },
      action: async () => {},
      expected: { prevDisabled: true }
    },
    {
      name: "最後のページで次ボタンが disabled",
      props: { currentPage: 10, totalPages: 10 },
      action: async () => {},
      expected: { nextDisabled: true }
    },
    {
      name: "1ページのみの場合は非表示",
      props: { currentPage: 1, totalPages: 1 },
      action: async () => {},
      expected: { hidden: true }
    },
    {
      name: "ページ番号クリックで onPageChange が呼ばれる",
      props: { currentPage: 1, totalPages: 5 },
      action: async (onPageChange: ReturnType<typeof vi.fn>) => {
        await userEvent.click(screen.getByRole("button", { name: "3" }))
        expect(onPageChange).toHaveBeenCalledWith(3)
      },
      expected: { callsOnPageChange: true }
    }
  ]

  test.each(cases)("$name", async ({ props, action, expected }) => {
    const onPageChange = vi.fn()
    const { container } = render(
      <Pagination {...props} onPageChange={onPageChange} />
    )

    await action(onPageChange)

    if (expected.hidden) {
      expect(container.querySelector("nav")).not.toBeInTheDocument()
      return
    }
    if (expected.currentPage) {
      const current = screen.getByRole("button", { current: "page" })
      expect(current).toHaveTextContent(expected.currentPage)
    }
    if (expected.prevDisabled)
      expect(screen.getByLabelText("前のページ")).toBeDisabled()
    if (expected.nextDisabled)
      expect(screen.getByLabelText("次のページ")).toBeDisabled()
  })
})
