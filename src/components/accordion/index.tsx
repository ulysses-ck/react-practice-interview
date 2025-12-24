import { Content } from "./content";
import { Header } from "./header";
import { Item } from "./item";

interface Props {
  children: React.ReactNode;
}

export function Accordion(props: Readonly<Props>) {
  return <div style={{
    flex: "col",
    gap: "2rem"
  }}>{props.children}</div>;
}

Accordion.Header = Header;
Accordion.Item = Item;
Accordion.Content = Content;
