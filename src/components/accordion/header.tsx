import { useItemContext } from "../../hooks/use-item-context";
import { useAccordion } from "../../providers/accordion-provider";

interface Props {
  children: React.ReactNode;
}

export function Header(props: Readonly<Props>) {
  const { setCurrIndex, currIndex } = useAccordion();
  const itemId = useItemContext();

  return (
    <button onClick={() => setCurrIndex(currIndex === itemId ? "" : itemId)}>
      {props.children}
    </button>
  );
}
