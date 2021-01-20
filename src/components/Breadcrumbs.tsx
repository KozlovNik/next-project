import React from "react";
import styles from "./Breadcrumbs.module.css";

const Breadcrumbs = () => {
  return (
    <div className={styles.breadcrumbs}>
      <span className={styles.link}>Главная</span> •{" "}
      <span className={styles.link}>Каталог</span> •{" "}
      <span className={styles.active}>Молотый кофе</span>
    </div>
  );
};

export default Breadcrumbs;
