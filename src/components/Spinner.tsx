import classNames from "classnames";
import styles from "./Spinner.module.css";

interface SpinnerProps {
  show: boolean;
}

const Spinner: React.FC<SpinnerProps> = ({ show }) => (
  <div className={classNames(styles.loaderWrapper, { [styles.show]: show })}>
    <span className={styles.loader} />
  </div>
);

export default Spinner;
