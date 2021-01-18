import React from "react";
import styles from "./CloseButton.module.css";

interface CloseButtonProps {
  handleClick: () => void;
}

const CloseButton = ({ handleClick }: CloseButtonProps) => {
  return <div onClick={() => handleClick()} className={styles.closeButton} />;
};

export default CloseButton;
