import { createContext, useContext } from "react";

export const ItemContext = createContext<string | null>(null);

export const useItemContext = () => {
  const context = useContext(ItemContext);
  if (!context) throw new Error("Component must be used within Accordion.Item");
  return context;
};