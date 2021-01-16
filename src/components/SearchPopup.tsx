import React, { useEffect, useRef } from "react";
import styles from "./SearchPopup.module.css";
import classNames from "classnames";

interface SearchPopupProps {
  handleClick: () => {};
  close: boolean;
}

const SearchPopup = ({ handleClick, close }: SearchPopupProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const labelRef = useRef<HTMLLabelElement | null>(null);

  useEffect(() => {
    if (labelRef && labelRef.current) {
      labelRef.current.focus();
    }
  }, [close]);

  useEffect(() => {
    const searchPopupClickHandler = (e: MouseEvent) => {
      if (
        e.target !== inputRef.current &&
        e.target !== labelRef.current &&
        !close
      ) {
        handleClick();
      }
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
      <input
        ref={inputRef}
        className={styles.input}
        placeholder="Поиск по товарам"
      />
    </label>
  );
};

export default SearchPopup;
