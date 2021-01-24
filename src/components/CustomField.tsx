import { useField } from "formik";

import styles from "./CustomField.module.css";

interface CustomFieldProps {
  label?: string;
  type?: "text" | "password" | "number";
  name: string;
  placeholder?: string;
}

const CustomField: React.FC<CustomFieldProps> = ({
  label,
  type = "text",
  placeholder,
  ...props
}) => {
  const [field, meta] = useField(props);
  return (
    <label className={styles.label}>
      {label && (
        <div className={styles.labelText}>
          {label} <span className={styles.star}>*</span>
        </div>
      )}
      {meta.touched && meta.error ? (
        <div className={styles.errorMsg}>{meta.error}</div>
      ) : null}
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        {...field}
        {...props}
      />
    </label>
  );
};

export default CustomField;
