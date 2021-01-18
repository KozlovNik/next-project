import React, { useEffect, useRef } from "react";
import styles from "./SearchPopup.module.css";
import classNames from "classnames";

interface SearchPopupProps {
  handleCloseSearch: () => {};
  close: boolean;
}

const SearchPopup = ({ handleCloseSearch, close }: SearchPopupProps) => {
  const labelRef = useRef<HTMLLabelElement>(null);

  useEffect(() => {
    if (labelRef && labelRef.current) {
      labelRef.current.focus();
    }
  }, [close]);

  useEffect(() => {
    const escapeKeyUpHandler = (e: KeyboardEvent) => {
      if (e.code === "Escape") handleCloseSearch();
    };

    const searchPopupClickHandler = (e: MouseEvent) => {
      const target =
        e.target === labelRef.current ||
        e.target === labelRef.current?.firstElementChild;

      if (!target && !close) handleCloseSearch();
    };
    document.addEventListener("click", searchPopupClickHandler);
    document.addEventListener("keyup", escapeKeyUpHandler);
    return () => {
      document.removeEventListener("click", searchPopupClickHandler);
      document.removeEventListener("keyup", escapeKeyUpHandler);
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
