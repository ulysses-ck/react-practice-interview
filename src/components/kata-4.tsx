import { useLocalStorage } from "../hooks/use-local-storage";

export function Kata4() {
  const [ actualValue, setActualValue ] = useLocalStorage("text-input", "");

  return (
    <div>
      <label htmlFor="text-input">Text input</label>
      <input
        type="text"
        value={actualValue}
        onChange={(e) => setActualValue(e.currentTarget.value)}
      />
    </div>
  );
}
