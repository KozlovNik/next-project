import { NextRouter } from "next/router";
import styles from "./Checkbox.module.css";

interface CheckboxProps {
  value: string;
  name: string;
  children: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  query: NextRouter["query"];
}

const Checkbox: React.FC<CheckboxProps> = (props) => {
  const { children, query, name, value, onChange } = props;
  const checked = query[name]?.includes(value) ?? false;

  return (
    <label className={styles.inputContainer}>
      <input
        checked={checked}
        name={name}
        type="checkbox"
        onChange={onChange}
        value={value}
      />
      {children}
      <span className={styles.checkmark} />
    </label>
  );
};

export default Checkbox;
