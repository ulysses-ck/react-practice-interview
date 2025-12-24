import { useAccordion } from "../../providers/accordion-provider";
import "./accordion.css"

interface Props {
  children: React.ReactNode;
  id: string;
}

export function Item(props: Readonly<Props>) {
  const { currIndex, setCurrIndex } = useAccordion();

  const handleOnClick = () => {
    setCurrIndex(props.id);
  };

  return (
    <button
      style={{
        border: "1px #000 solid",
        outline: "none",
      }}
      onClick={handleOnClick}
      className={props.id === currIndex ? "active" : ""}
    >
      {props.children}
    </button>
  );
}
