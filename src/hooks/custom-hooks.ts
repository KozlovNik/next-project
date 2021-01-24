import { useEffect, useState } from "react";
import AwesomeDebouncePromise from "awesome-debounce-promise";
import useConstant from "use-constant";

type handler = () => void;

export const useEscapeKey = (handleClick: handler) => {
  return useEffect(() => {
    const escapeKeyUpHandler = (e: KeyboardEvent) => {
      console.log(e.currentTarget)
      if (e.code === "Escape") handleClick();
    };

    document.addEventListener("keyup", escapeKeyUpHandler);
    return () => {
      document.removeEventListener("keyup", escapeKeyUpHandler);
    };
  }, []);
};

export const useDebounce = (
  action: (...args: any[]) => any,
  quantity: number | undefined
) => {
  const [stateQuantity, setStateQuantity] = useState<number | "" | undefined>(
    quantity
  );

  const debouncedFunction = useConstant(() =>
    AwesomeDebouncePromise(action, 500)
  );
  return {
    debouncedFunction,
    stateQuantity,
    setStateQuantity,
  };
};
