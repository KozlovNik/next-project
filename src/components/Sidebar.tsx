import { useState } from "react";
import classNames from "classnames";
import { useRouter } from "next/router";
import Link from "next/link";

import styles from "./Sidebar.module.css";
import { navList } from "../constants";

const Sidebar: React.FC = () => {
  const router = useRouter();
  const [active, setActive] = useState(false);

  return (
    <nav className={styles.sidebar}>
      <h3
        className={classNames(styles.heading, active ? styles.active : "")}
        onClick={() => setActive((a) => !a)}
      >
        КАТАЛОГ
      </h3>
      <ul className={classNames(styles.list, active ? "" : styles.hidden)}>
        {navList.map(({ name, slug }: any) => (
          <li key={slug} className={styles.item}>
            <Link href={`/catalog/${slug}`}>
              <a
                className={classNames(styles.link, {
                  [styles.linkActive]: router.query.categorySlug === slug,
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
