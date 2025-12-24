import { AccordionProvider } from "../providers/accordion-provider";
import { Accordion } from "./accordion";

export function Kata8() {
  return (
    <AccordionProvider>
      <Accordion>
        <Accordion.Item id={"1"}>
          <Accordion.Header>Accordion Header 1</Accordion.Header>
          <Accordion.Content>Accordion Content 1</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item id={"2"}>
          <Accordion.Header>Accordion Header 2</Accordion.Header>
          <Accordion.Content>Accordion Content 2</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item id={"3"}>
            <div>
                Asd
            </div>
          <Accordion.Header>Accordion Header 3</Accordion.Header>
          <div>
            adssad
          </div>
          <Accordion.Content>Accordion Content 3</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </AccordionProvider>
  );
}
