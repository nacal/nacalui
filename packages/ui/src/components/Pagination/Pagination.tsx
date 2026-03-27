import { clsx } from "clsx"

export interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
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
  if (!showLeftDots && showRightDots)
    return [...range(1, totalNumbers), "...", total]
  if (showLeftDots && !showRightDots)
    return [1, "...", ...range(total - totalNumbers + 1, total)]
  return [1, "...", ...range(leftSibling, rightSibling), "...", total]
}

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
        className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-sm text-[var(--color-fg-secondary)] hover:bg-[var(--color-bg-secondary)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        aria-label="前のページ"
      >
        <span className="i-lucide-chevron-left text-base" aria-hidden="true" />
      </button>
      {pages.map((page, i) =>
        page === "..." ? (
          <span
            // biome-ignore lint/suspicious/noArrayIndexKey: static ellipsis
            key={`dots-${i}`}
            className="w-9 h-9 flex items-center justify-center text-sm text-[var(--color-fg-tertiary)]"
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
                ? "bg-[var(--color-fg-primary)] text-white font-medium"
                : "text-[var(--color-fg-secondary)] hover:bg-[var(--color-bg-secondary)]"
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
        className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-sm text-[var(--color-fg-secondary)] hover:bg-[var(--color-bg-secondary)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        aria-label="次のページ"
      >
        <span className="i-lucide-chevron-right text-base" aria-hidden="true" />
      </button>
    </nav>
  )
}
