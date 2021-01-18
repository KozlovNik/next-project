import React from "react";
import styles from "./TitleBlock.module.css";

interface TitleBlockProps {
  children?: JSX.Element | JSX.Element[];
  title: string;
}

const TitleBlock: React.FC<TitleBlockProps> = ({ children, title }) => {
  return (
    <div className={styles.titleBlock}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  );
};

export default TitleBlock;
