import { NextRouter } from "next/router";
import styles from "./PriceInput.module.css";

interface PriceInputProps {
  children: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  query: NextRouter["query"];
}

const PriceInput: React.FC<PriceInputProps> = ({
  children,
  query,
  name,
  ...rest
}) => {
  let queryValue = query[name];
  return (
    <label className={styles.inputContainer}>
      {children}
      <input type="number" value={queryValue} name={name} {...rest} />
    </label>
  );
};

export default PriceInput;
