import classNames from "classnames";
import { relative } from "path";
import { useState } from "react";

import styles from "./Spinner.module.css";

interface SpinnerProps {
  show: boolean;
}

const Spinner: React.FC<SpinnerProps> = ({ show }) => {
  return (
    <div className={classNames(styles.loaderWrapper, { [styles.show]: show })}>
      <span className={styles.loader} />
    </div>
  );
};

export default Spinner;
