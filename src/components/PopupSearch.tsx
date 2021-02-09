import React, { useEffect, useRef } from "react";
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
      router.push(`/catalog?text=${e.target.value}`);
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
        onKeyUp={handleKeyUp}
        className={styles.input}
        placeholder="Поиск по товарам"
      />
    </label>
  );
};

export default PopupSearch;
