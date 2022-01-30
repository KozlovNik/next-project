import { NextRouter } from "next/router";
import styles from "./PriceInput.module.css";

interface PriceInputProps {
  children: string;
  setQuery: React.Dispatch<React.SetStateAction<NextRouter["query"]>>;
  name: string;
  query: NextRouter["query"];
}

const PriceInput: React.FC<PriceInputProps> = ({
  setQuery,
  children,
  query,
  name,
  ...rest
}) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery((q) => ({ ...q, [e.target.name]: e.target.value }));
  };
  return (
    <label className={styles.inputContainer}>
      {children}
      <input
        type="text"
        value={query[name] || ""}
        onChange={onChange}
        name={name}
        {...rest}
      />
    </label>
  );
};

export default PriceInput;
