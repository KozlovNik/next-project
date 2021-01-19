import { useState } from "react";
import { navList } from "../constants";
import styles from "./Sidebar.module.css";
import classNames from "classnames";

const Sidebar = () => {
  const [show, setActive] = useState(false);

  return (
    <nav className={styles.sidebar}>
      <h3
        className={classNames(styles.heading, show ? styles.active : "")}
        onClick={() => setActive((a) => !a)}
      >
        КАТАЛОГ
      </h3>
      <ul className={classNames(styles.list, show ? "" : styles.hidden)}>
        {navList.map((text) => (
          <li key={text} className={styles.item}>
            <a className={styles.link}>{text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
