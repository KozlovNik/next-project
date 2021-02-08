import { useState, useContext } from "react";
import classNames from "classnames";
import { CategoriesContext } from "../lib/categoryContext";

import Link from "next/link";

import styles from "./Sidebar.module.css";

interface SidebarProps {
  categorySlug?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ categorySlug }) => {
  const [show, setActive] = useState(false);
  const categories = useContext(CategoriesContext);

  return (
    <nav className={styles.sidebar}>
      <h3
        className={classNames(styles.heading, show ? styles.active : "")}
        onClick={() => setActive((a) => !a)}
      >
        КАТАЛОГ
      </h3>
      <ul className={classNames(styles.list, show ? "" : styles.hidden)}>
        {categories.map(({ name, slug }) => (
          <li key={slug} className={styles.item}>
            <Link href={`/catalog/${slug}`}>
              <a
                className={classNames(styles.link, {
                  [styles.linkActive]: categorySlug === slug,
                })}
              >
                {name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
