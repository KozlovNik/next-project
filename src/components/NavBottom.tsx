import { memo, useContext } from "react";
import Link from "next/link";
import { CategoriesContext } from "../lib/categoryContext";

import styles from "./NavBottom.module.css";

const NavBottom = () => {
  const categories = useContext<any>(CategoriesContext);

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {categories.map(({ name, slug }: any) => (
          <li key={slug} className={styles.item}>
            <Link href={`/catalog/${slug}`}>
              <a className={styles.link} data-text={name}>
                {name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default memo(NavBottom);
