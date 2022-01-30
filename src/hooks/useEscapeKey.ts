import { useEffect } from "react";

type Handler = () => void;

export default function useEscapeKey(handleClick: Handler) {
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
