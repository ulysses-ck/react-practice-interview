import { createContext, useContext, useMemo, useState } from "react";

interface Props {
  children: React.ReactNode;
}

interface IContext {
  currIndex: string;
  setCurrIndex: (newIndex: string) => void;
}

const AccordionContext = createContext<IContext | null>(null);

export function AccordionProvider(props: Readonly<Props>) {
  const [currIndex, setCurrIndex] = useState<string>("");

  const value = useMemo(
    () => ({
      currIndex,
      setCurrIndex,
    }),
    [currIndex]
  );

  return (
    <AccordionContext.Provider value={value}>
      {props.children}
    </AccordionContext.Provider>
  );
}

export const useAccordion = () => {
    const context = useContext(AccordionContext);

    if(!context) {
        throw new Error("useAccordion must be used within in a AccordionProvider")
    }

    return context;
}