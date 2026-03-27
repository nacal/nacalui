import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, test } from "vitest"
import { Accordion, AccordionItem } from "./Accordion"

describe("Accordion", () => {
  test("タイトルが表示される", () => {
    render(
      <Accordion>
        <AccordionItem title="FAQ">回答です</AccordionItem>
      </Accordion>
    )
    expect(screen.getByText("FAQ")).toBeInTheDocument()
  })

  test("defaultOpen で初期状態が開いている", () => {
    render(
      <Accordion>
        <AccordionItem title="FAQ" defaultOpen>
          回答です
        </AccordionItem>
      </Accordion>
    )
    expect(screen.getByText("回答です")).toBeVisible()
  })

  test("クリックで開閉する", async () => {
    render(
      <Accordion>
        <AccordionItem title="FAQ">回答です</AccordionItem>
      </Accordion>
    )

    await userEvent.click(screen.getByText("FAQ"))
    expect(screen.getByText("回答です")).toBeVisible()
  })
})
