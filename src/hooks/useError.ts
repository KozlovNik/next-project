import { useState } from "react";

export default function useError() {
  const [error, setError] = useState("");

  function setIntervalError(msg: string) {
    setError(() => msg);
    setTimeout(() => setError(() => ""), 5000);
  }

  return [error, setIntervalError] as const;
}
