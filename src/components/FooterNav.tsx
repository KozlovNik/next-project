import React from "react";
import styles from "./FooterNav.module.css";

interface FooterNavProps {
  items: string[];
  heading: string;
}

const FooterNav: React.FC<FooterNavProps> = ({ heading, items }) => {
  return (
    <div className={styles.nav}>
      <h3 className={styles.heading}>{heading}</h3>
      <ul className={styles.list}>
        {items.map((text) => (
          <li key={text} className={styles.item}>
            <a className={styles.link}>{text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterNav;
