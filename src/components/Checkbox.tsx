import { NextRouter } from "next/router";
import styles from "./Checkbox.module.css";

interface CheckboxProps {
  value: string;
  name: string;
  children: string;
  setQuery: React.Dispatch<React.SetStateAction<NextRouter["query"]>>;
  query: NextRouter["query"];
}

const Checkbox: React.FC<CheckboxProps> = (props) => {
  const { children, query, name, value, setQuery } = props;
  const checked = query[name]?.includes(value) ?? false;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    let qValue = query[name];
    const valArr = qValue ? qValue.toString().split(",") : [];
    let newVal = checked
      ? [...valArr, value]
      : valArr.filter((v) => v !== value);

    return setQuery((query) => ({ ...query, [name]: newVal.join(",") }));
  };

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
