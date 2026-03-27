import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, test } from "vitest"
import { Accordion, AccordionItem } from "./Accordion"

describe("Accordion", () => {
  const cases = [
    {
      name: "タイトルが表示される",
      props: {},
      action: async () => {},
      expected: { title: "FAQ" }
    },
    {
      name: "defaultOpen で初期状態が開いている",
      props: { defaultOpen: true },
      action: async () => {},
      expected: { contentVisible: "回答です" }
    },
    {
      name: "クリックで開閉する",
      props: {},
      action: async () => {
        await userEvent.click(screen.getByText("FAQ"))
      },
      expected: { contentVisible: "回答です" }
    }
  ]

  test.each(cases)("$name", async ({ props, action, expected }) => {
    render(
      <Accordion>
        <AccordionItem title="FAQ" {...props}>
          回答です
        </AccordionItem>
      </Accordion>
    )

    await action()

    if (expected.title)
      expect(screen.getByText(expected.title)).toBeInTheDocument()
    if (expected.contentVisible)
      expect(screen.getByText(expected.contentVisible)).toBeVisible()
  })
})
