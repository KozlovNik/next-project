import { useEffect, useRef } from "react";
import styles from "./AccountPopup.module.css";
import CloseButton from "./CloseButton";
import classNames from "classnames";

interface AccountPopupProps {
  handleClick: () => void;
  close: boolean;
}

const AccountPopup = ({ handleClick, close }: AccountPopupProps) => {
  const linkRef1 = useRef(null);
  const linkRef2 = useRef(null);
  const linkRef3 = useRef(null);
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
        <CloseButton handleClick={handleClick} />
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

export default AccountPopup;
