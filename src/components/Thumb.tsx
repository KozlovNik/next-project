import styles from "./Thumb.module.css";

const Thumb = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        <span className={styles.hr} />
        <span className={styles.hr} />
        <span className={styles.hr} />
      </div>
    </div>
  );
};

export default Thumb;
