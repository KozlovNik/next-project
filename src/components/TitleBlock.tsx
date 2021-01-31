import React, { memo } from "react";
import styles from "./TitleBlock.module.css";

interface TitleBlockProps {
  children?: React.ReactNode;
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

export default memo(TitleBlock);
