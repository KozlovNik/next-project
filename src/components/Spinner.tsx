import React from "react";
import styles from "./Spinner.module.css";

const Spinner: React.FC = () => {
  return (
    <div className={styles.loaderWrapper}>
      <span className={styles.loader} />
    </div>
  );
};

export default Spinner;
