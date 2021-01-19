import { useEscapeKey } from "../hooks/custom-hooks";
import styles from "./MenuPopup.module.css";
import CloseButton from "./CloseButton";
import { navList } from "../constants";
import classNames from "classnames";

interface MenuPopupProps {
  handleClick: () => void;
  close: boolean;
}

const MenuPopup = ({ handleClick, close }: MenuPopupProps) => {
  useEscapeKey(handleClick);

  return (
    <div className={classNames(styles.menu, close ? styles.menuHidden : "")}>
      <div className={styles.topBar}>
        <span className={styles.header}>МЕНЮ</span>
        <CloseButton handleClick={handleClick} />
      </div>
      <div className={styles.menuContent}>
        <ul className={styles.list}>
          {navList.map((text) => (
            <li key={text} className={styles.item}>
              <a
                className={styles.link}
                onClick={() => {
                  handleClick();
                }}
              >
                {text}
              </a>
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

export default MenuPopup;
