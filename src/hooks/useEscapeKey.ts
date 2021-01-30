import { useEffect } from "react";

type handler = () => void;

export default function useEscapeKey(handleClick: handler) {
  return useEffect(() => {
    const escapeKeyUpHandler = (e: KeyboardEvent) => {
      if (e.code === "Escape") handleClick();
    };

    document.addEventListener("keyup", escapeKeyUpHandler);
    return () => {
      document.removeEventListener("keyup", escapeKeyUpHandler);
    };
  }, []);
}
