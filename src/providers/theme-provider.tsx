import { createContext, useContext, useMemo, useState } from "react";

interface Props {
  children: React.ReactNode;
}

type TTheme = "light" | "dark";

type IContext = {
  theme: string;
  setTheme: (theme: TTheme) => void;
};

const ThemeContext = createContext<IContext | null>(null);

export function ThemeProvider(props: Readonly<Props>) {
  const [theme, setTheme] = useState<TTheme>("light");

  const value = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within in a ThemeProvider");
  }

  return context;
};
