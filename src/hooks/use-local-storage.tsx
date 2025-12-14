import { useEffect, useState } from "react";

export function useLocalStorage (key: string, value: string) {
    const currValue = localStorage.getItem(key);
    const [actualValue, setActualValue] = useState<string>(currValue ?? value);

    useEffect(() => {
        localStorage.setItem(key, actualValue)
    }, [
        actualValue
    ])

    return {
        actualValue,
        setActualValue,
    }
}