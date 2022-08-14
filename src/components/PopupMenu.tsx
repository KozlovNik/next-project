/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from "classnames";
import Link from "next/link";
import useEscapeKey from "../hooks/useEscapeKey";
import styles from "./PopupMenu.module.css";
import { ButtonClose } from "./ButtonClose";
import { navList } from "../constants";

type HandleClick = () => void;

interface PopupMenuProps {
  handleClick: HandleClick;
  close: boolean;
}

interface ItemProps {
  onClick: HandleClick;
  title: string;
}

// fix later
const Item = ({ onClick, title }: ItemProps) => (
  <li className={styles.infoItem}>
    <button onClick={onClick} className={styles.infoLink}>
      {title}
    </button>
  </li>
);

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
              <Link href={`/catalog/${slug}`} passHref>
                <a className={styles.link} onClick={handleClick}>
                  {name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <ul className={styles.info}>
          <Item title="Доставка" onClick={handleClick} />
          <Item title="Оплата" onClick={handleClick} />
          <Item title="Контакты" onClick={handleClick} />
        </ul>
      </div>
    </div>
  );
};

export default PopupMenu;
