import useEscapeKey from "../hooks/useEscapeKey";
import styles from "./PopupMenu.module.css";
import ButtonClose from "./ButtonClose";
import { navList } from "../constants";
import classNames from "classnames";
import Link from "next/link";

interface PopupMenuProps {
  handleClick: () => void;
  close: boolean;
}

const PopupMenu = ({ handleClick, close }: PopupMenuProps) => {
  useEscapeKey(handleClick);

  return (
    <div className={classNames(styles.menu, close ? styles.menuHidden : "")}>
      <div className={styles.topBar}>
        <span className={styles.header}>МЕНЮ</span>
        <ButtonClose onClick={handleClick} />
      </div>
      <div className={styles.menuContent}>
        <ul className={styles.list}>
          {navList.map(({ name, slug }) => (
            <li key={name} className={styles.item}>
              <Link href={`/catalog/${slug}`}>
                <a
                  className={styles.link}
                  onClick={() => {
                    handleClick();
                  }}
                >
                  {name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <ul className={styles.info}>
          <li className={styles.infoItem}>
            <a
              onClick={() => {
                handleClick();
              }}
              className={styles.infoLink}
            >
              Доставка
            </a>
          </li>
          <li className={styles.infoItem}>
            <a
              onClick={() => {
                handleClick();
              }}
              className={styles.infoLink}
            >
              Оплата
            </a>
          </li>
          <li className={styles.infoItem}>
            <a
              onClick={() => {
                handleClick();
              }}
              className={styles.infoLink}
            >
              Контакты
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PopupMenu;
