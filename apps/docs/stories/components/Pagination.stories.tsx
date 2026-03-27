import { Pagination } from "@nacalui/ui"
import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: { component: "ページネーション。ページ送りナビゲーション。" }
    }
  },
  argTypes: {
    currentPage: {
      control: "number",
      description: "現在のページ。",
      table: { type: { summary: "number" } }
    },
    totalPages: {
      control: "number",
      description: "総ページ数。",
      table: { type: { summary: "number" } }
    },
    siblingCount: {
      control: "number",
      description: "前後に表示するページ数。",
      table: { type: { summary: "number" }, defaultValue: { summary: "1" } }
    },
    className: { table: { disable: true } }
  }
}

export default meta
type Story = StoryObj<typeof Pagination>

function PaginationDemo({ totalPages = 10 }: { totalPages?: number }) {
  const [page, setPage] = useState(1)
  return (
    <Pagination
      currentPage={page}
      totalPages={totalPages}
      onPageChange={setPage}
    />
  )
}

export const Default: Story = {
  render: () => <PaginationDemo />,
  parameters: {
    docs: { description: { story: "基本的なページネーション。10ページ。" } }
  }
}

export const ManyPages: Story = {
  render: () => <PaginationDemo totalPages={50} />,
  parameters: {
    docs: {
      description: {
        story: "ページ数が多い場合は省略記号（...）が表示される。"
      }
    }
  }
}

export const FewPages: Story = {
  render: () => <PaginationDemo totalPages={3} />,
  parameters: { docs: { description: { story: "ページ数が少ない場合。" } } }
}
