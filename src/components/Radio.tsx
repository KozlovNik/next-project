import styles from "./Radio.module.css";

interface RadioProps {
  value: string;
  name: string;
  children: string;
}

const Radio: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  value,
  name,
  children,
}) => {
  return (
    <label className={styles.inputContainer}>
      <input type="radio" name={name} value={value} /> {children}
      <span className={styles.checkmark} />
    </label>
  );
};

export default Radio;
