import React, { useEffect, useRef, useState } from "react";
import styles from "./PopupSearch.module.css";
import classNames from "classnames";
import useEscapeKey from "../hooks/useEscapeKey";
import { useRouter } from "next/router";

interface PopupSearchProps {
  handleCloseSearch: () => void;
  close: boolean;
}

const PopupSearch = ({ handleCloseSearch, close }: PopupSearchProps) => {
  const labelRef = useRef<HTMLLabelElement>(null);

  useEscapeKey(handleCloseSearch);

  const router = useRouter();

  const [value, setValue] = useState("");

  useEffect(() => {
    if (labelRef && labelRef.current) {
      labelRef.current.focus();
    }
  }, [close]);

  useEffect(() => {
    const PopupSearchClickHandler = (e: MouseEvent) => {
      const target =
        e.target === labelRef.current ||
        e.target === labelRef.current?.firstElementChild;

      if (!target && !close) handleCloseSearch();
    };
    document.addEventListener("click", PopupSearchClickHandler);
    return () => {
      document.removeEventListener("click", PopupSearchClickHandler);
    };
  }, [close]);

  const handleKeyUp = (e: React.KeyboardEvent) => {
    if (e.code === "Enter") {
      handleCloseSearch();
      setValue("");
      router.push(`/catalog?text=${value}`);
    }
  };

  return (
    <label
      className={classNames(
        styles.PopupSearch,
        close ? styles.PopupSearchHidden : ""
      )}
      ref={labelRef}
    >
      <input
        onChange={(e) => setValue(e.target.value)}
        onKeyUp={handleKeyUp}
        className={styles.input}
        placeholder="Поиск по товарам"
        value={value}
      />
    </label>
  );
};

export default PopupSearch;
