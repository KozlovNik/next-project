import React from "react";
import styles from "./CloseButton.module.css";

interface CloseButtonProps {
  handleClick: () => {};
}

const CloseButton = ({ handleClick }: CloseButtonProps) => {
  return <div onClick={() => handleClick()} className={styles.closeButton} />;
};

export default CloseButton;
