import { NextRouter, useRouter } from "next/router";
import styles from "./Radio.module.css";

interface RadioProps {
  value: string;
  name: string;
  children: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  query: NextRouter["query"];
}

const Radio: React.FC<RadioProps> = (props) => {
  const { children, query, name, value, onChange } = props;
  const checked = value === query[name]?.toString();
  return (
    <label className={styles.inputContainer}>
      <input
        type="radio"
        onChange={onChange}
        name={name}
        value={value}
        checked={checked}
      />
      {children}
      <span className={styles.checkmark} />
    </label>
  );
};

export default Radio;
