import React from "react";
import styles from "./ProductFilter.module.css";

const ProductFilter = ({ label }: any) => {
  return <div className={styles.label}>{label} </div>;
};

export default ProductFilter;
