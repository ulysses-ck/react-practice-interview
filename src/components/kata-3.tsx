import { useEffect, useState } from "react";

export function Kata3() {
  const [seconds, setSeconds] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const start = () => setIsRunning(true);
  const stop = () => setIsRunning(false);
  const reset = () => setSeconds(0);

  useEffect(() => {
    let idInterval: number;
    if (isRunning) {
      idInterval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    return () => {
      clearInterval(idInterval);
    };
  }, [isRunning]);

  return (
    <div>
      <button onClick={start} disabled={isRunning}>
        {seconds > 0 ? "Resume" : "Start"}
      </button>
      <button onClick={stop} disabled={!isRunning}>
        Stop
      </button>
      <button onClick={reset} disabled={isRunning}>
        Reset
      </button>


      <h3>
        seconds: {seconds}
      </h3>
    </div>
  );
}
