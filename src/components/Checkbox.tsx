import styles from "./Checkbox.module.css";

interface CheckboxProps {
  value: string;
  name: string;
  children: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ children, name, value }) => {
  return (
    <label className={styles.inputContainer}>
      <input type="checkbox" name={name} value={value} /> {children}
      <span className={styles.checkmark} />
    </label>
  );
};

export default Checkbox;
