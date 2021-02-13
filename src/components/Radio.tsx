import { NextRouter } from "next/router";
import styles from "./Radio.module.css";

interface RadioProps {
  value: string;
  name: string;
  children: string;
  query: NextRouter["query"];
  setQuery: React.Dispatch<React.SetStateAction<NextRouter["query"]>>;
}

const Radio: React.FC<RadioProps> = (props) => {
  const { children, query, name, value, setQuery } = props;
  const checked = value === query[name]?.toString();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery((query) => ({ ...query, [e.target.name]: e.target.value }));
  };
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
