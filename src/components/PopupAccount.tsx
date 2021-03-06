import { useEffect, useRef, useContext } from "react";
import ButtonClose from "./ButtonClose";
import useUser from "../hooks/useUser";
import { CloseLoginContext } from "../lib/closeLoginContext";
import { useRouter } from "next/router";

import Link from "next/link";
import classNames from "classnames";

import useEscapeKey from "../hooks/useEscapeKey";

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
        {user && user.isLogged && (
          <a
            className={styles.authLink}
            onClick={async () => {
              await logout();
              router.push("/");
            }}
          >
            Выйти из аккаунта
          </a>
        )}
        {(!user || !user.isLogged) && (
          <>
            <a className={styles.authLink} onClick={setCloseLogin}>
              Вход
            </a>
            <Link href="/register">
              <a
                className={styles.authLink}
                ref={linkRef2}
                onClick={handleClick}
              >
                Регистрация
              </a>
            </Link>
          </>
        )}

        {user && user.isLogged ? (
          <Link href="/favorites">
            <a className={styles.starred}>Закладки</a>
          </Link>
        ) : (
          <a className={styles.starred} onClick={setCloseLogin}>
            Закладки
          </a>
        )}
      </div>
    </div>
  );
};

export default PopupAccount;
