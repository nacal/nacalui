import { clsx } from "clsx"

export interface PaginationProps {
  /** 現在のページ（1始まり）。 */
  currentPage: number
  /** 総ページ数。 */
  totalPages: number
  /** ページ変更コールバック。 */
  onPageChange: (page: number) => void
  /** 前後に表示するページ数。 @default 1 */
  siblingCount?: number
  className?: string
}

function range(start: number, end: number): number[] {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i)
}

function getPages(
  current: number,
  total: number,
  siblings: number
): (number | "...")[] {
  const totalNumbers = siblings * 2 + 3
  if (total <= totalNumbers + 2) return range(1, total)

  const leftSibling = Math.max(current - siblings, 1)
  const rightSibling = Math.min(current + siblings, total)
  const showLeftDots = leftSibling > 2
  const showRightDots = rightSibling < total - 1

  if (!showLeftDots && showRightDots) {
    const leftRange = range(1, totalNumbers)
    return [...leftRange, "...", total]
  }
  if (showLeftDots && !showRightDots) {
    const rightRange = range(total - totalNumbers + 1, total)
    return [1, "...", ...rightRange]
  }
  return [1, "...", ...range(leftSibling, rightSibling), "...", total]
}

/**
 * ページネーション。ページ送りナビゲーション。
 *
 * @summary 現在ページ、前後ボタン、ページ番号で構成する。
 */
export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  className
}: PaginationProps) {
  if (totalPages <= 1) return null

  const pages = getPages(currentPage, totalPages, siblingCount)

  return (
    <nav
      aria-label="ページネーション"
      className={clsx("flex items-center gap-1", className)}
    >
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-sm text-stone-600 hover:bg-stone-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        aria-label="前のページ"
      >
        <span className="i-lucide-chevron-left text-base" aria-hidden="true" />
      </button>
      {pages.map((page, i) =>
        page === "..." ? (
          <span
            // biome-ignore lint/suspicious/noArrayIndexKey: static ellipsis
            key={`dots-${i}`}
            className="w-9 h-9 flex items-center justify-center text-sm text-stone-400"
          >
            ...
          </span>
        ) : (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            className={clsx(
              "inline-flex items-center justify-center w-9 h-9 rounded-lg text-sm transition-colors",
              page === currentPage
                ? "bg-stone-900 text-white font-medium"
                : "text-stone-600 hover:bg-stone-100"
            )}
            aria-current={page === currentPage ? "page" : undefined}
          >
            {page}
          </button>
        )
      )}
      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-sm text-stone-600 hover:bg-stone-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        aria-label="次のページ"
      >
        <span className="i-lucide-chevron-right text-base" aria-hidden="true" />
      </button>
    </nav>
  )
}
