import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  const [actualValue, setActualValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);

      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);

      return initialValue instanceof Function ? initialValue() : initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(actualValue));
    } catch (error) {
      console.error(error);
    }
  }, [key, actualValue]);

  return [actualValue, setActualValue] as const;
}
