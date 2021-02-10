import styles from "./FilterForm.module.css";

interface FilterFormProps {
  render: () => React.ReactElement;
}

const FilterForm: React.FC<FilterFormProps> = ({ render }) => {
  return (
    <form className={styles.form}>
      <div>{render()}</div>
      <div className={styles.buttons}>
        <button className={styles.reset}>Сбросить</button>
        <button className={styles.apply}>Применить</button>
      </div>
    </form>
  );
};

export default FilterForm;
