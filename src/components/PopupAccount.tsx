import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import classNames from "classnames";
import { CloseButton } from "./CloseButton";
import useUser from "../hooks/useUser";

import styles from "./PopupAccount.module.css";

interface PopupAccountProps {
  handleClick: () => void;
  close: boolean;
  setCloseLogin: () => void;
}

const PopupAccount = ({
  handleClick,
  close,
  setCloseLogin,
}: PopupAccountProps) => {
  const linkRef1 = useRef(null);
  const linkRef2 = useRef(null);
  const linkRef3 = useRef(null);

  const { logout, user } = useUser();
  const router = useRouter();

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
        <CloseButton onClick={handleClick} />
      </div>
      <div className={styles.menuContent} ref={linkRef2}>
        {user && user.isLogged && (
          <button
            className={styles.authLink}
            onClick={async () => {
              await logout();
              router.push("/");
            }}
          >
            Выйти из аккаунта
          </button>
        )}
        {(!user || !user.isLogged) && (
          <>
            <button className={styles.authLink} onClick={setCloseLogin}>
              Вход
            </button>
            <Link
              onClick={handleClick}
              ref={linkRef2}
              className={styles.authLink}
              href="/register"
            >
              Регистрация
            </Link>
          </>
        )}

        {user && user.isLogged ? (
          <Link className={styles.starred} href="/favorites">
            Закладки
          </Link>
        ) : (
          <a href="/" className={styles.starred} onClick={setCloseLogin}>
            Закладки
          </a>
        )}
      </div>
    </div>
  );
};

export default PopupAccount;
