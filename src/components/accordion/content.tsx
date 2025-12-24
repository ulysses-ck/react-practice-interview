import { useItemContext } from "../../hooks/use-item-context";
import { useAccordion } from "../../providers/accordion-provider";

interface Props {
  children: React.ReactNode;
}

export function Content(props: Readonly<Props>) {
  const {currIndex} = useAccordion();
  const itemId = useItemContext();

  if (currIndex !== itemId) return null;

  return (
    <div className="accordion-content">
      {props.children}
    </div>
  );
}
