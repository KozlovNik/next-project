import styles from "./Error.module.css";

interface ErrorProps {
  children: React.ReactNode;
}

const Error: React.FC<ErrorProps> = ({ children }) => (
  <div className={styles.error}>{children}</div>
);

export default Error;
