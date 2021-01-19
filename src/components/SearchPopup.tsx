import React, { useEffect, useRef } from "react";
import styles from "./SearchPopup.module.css";
import classNames from "classnames";
import { useEscapeKey } from "../hooks/custom-hooks";

interface SearchPopupProps {
  handleCloseSearch: () => void;
  close: boolean;
}

const SearchPopup = ({ handleCloseSearch, close }: SearchPopupProps) => {
  const labelRef = useRef<HTMLLabelElement>(null);

  useEscapeKey(handleCloseSearch);

  useEffect(() => {
    if (labelRef && labelRef.current) {
      labelRef.current.focus();
    }
  }, [close]);

  useEffect(() => {
    const searchPopupClickHandler = (e: MouseEvent) => {
      const target =
        e.target === labelRef.current ||
        e.target === labelRef.current?.firstElementChild;

      if (!target && !close) handleCloseSearch();
    };
    document.addEventListener("click", searchPopupClickHandler);
    return () => {
      document.removeEventListener("click", searchPopupClickHandler);
    };
  }, [close]);

  return (
    <label
      className={classNames(
        styles.searchPopup,
        close ? styles.searchPopupHidden : ""
      )}
      ref={labelRef}
    >
      <input className={styles.input} placeholder="Поиск по товарам" />
    </label>
  );
};

export default SearchPopup;
