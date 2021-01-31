import styles from "./Error.module.css";

interface ErrorProps {
  children: React.ReactNode;
}

const Error: React.FC<ErrorProps> = ({ children }) => {
  return <div className={styles.error}>{children}</div>;
};

export default Error;
