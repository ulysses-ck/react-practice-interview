import { useState } from "react";

export function Kata1() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decrement = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  const incrementDouble = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const asyncIncrement = () => {
    setTimeout(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000)
  }

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={incrementDouble}>Increment Double</button>
      <button onClick={asyncIncrement}>Async Increment</button>
      <span>counter: {counter}</span>
    </div>
  );
}
