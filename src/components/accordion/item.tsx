import { ItemContext } from "../../hooks/use-item-context";

interface Props {
  children: React.ReactNode;
  id: string;
}

export function Item(props: Readonly<Props>) {
  return <ItemContext.Provider value={props.id}>
    <div>{props.children}</div>
  </ItemContext.Provider>;
}
