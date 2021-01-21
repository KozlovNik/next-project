import { useEffect, useRef } from "react";
import styles from "./PopupAccount.module.css";
import ButtonClose from "./ButtonClose";
import classNames from "classnames";
import { useEscapeKey } from "../hooks/custom-hooks";

interface PopupAccountProps {
  handleClick: () => void;
  close: boolean;
}

const PopupAccount = ({ handleClick, close }: PopupAccountProps) => {
  const linkRef1 = useRef(null);
  const linkRef2 = useRef(null);
  const linkRef3 = useRef(null);

  useEscapeKey(handleClick);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        e.target !== linkRef1.current &&
        e.target !== linkRef2.current &&
        e.target !== linkRef3.current &&
        !close
      ) {
        handleClick();
      }
    };
    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, [close]);
  return (
    <div className={classNames(styles.menu, close ? styles.menuHidden : "")}>
      <div className={styles.topBar} ref={linkRef1}>
        <span className={styles.header} ref={linkRef3}>
          ЛИЧНЫЙ КАБИНЕТ
        </span>
        <ButtonClose onClick={handleClick} />
      </div>
      <div className={styles.menuContent} ref={linkRef2}>
        <a className={styles.authLink}>Вход</a>
        <a className={styles.authLink} ref={linkRef2}>
          Регистрация
        </a>
        <a className={styles.starred}>Закладки</a>
      </div>
    </div>
  );
};

export default PopupAccount;