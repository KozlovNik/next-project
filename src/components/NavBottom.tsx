import { memo } from "react";
import { navList } from "../constants";
import styles from "./NavBottom.module.css";

const NavBottom = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {navList.map((text) => (
          <li key={text} className={styles.item}>
            <a className={styles.link} data-text={text}>
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default memo(NavBottom);
