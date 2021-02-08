import { memo, useContext } from "react";
import { CategoriesContext } from "../lib/categoryContext";
import Link from "next/link";

import styles from "./NavBottom.module.css";

const NavBottom = () => {
  const categories = useContext(CategoriesContext);
  const navList = [...categories, { name: "Акции", slug: "akcii" }];

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {navList.map(({ name, slug }) => (
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
