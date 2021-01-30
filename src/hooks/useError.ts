import { useState } from "react";

export default function useError(initialState: string) {
  const [error, setError] = useState(initialState);

  function setIntervalError(msg: string) {
    setError(() => msg);
    setTimeout(() => setError(() => ""), 5000);
  }

  return [error, setIntervalError] as const;
}
