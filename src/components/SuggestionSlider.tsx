import React from "react";
import styles from "./SuggestionSlider.module.css";
import ProductCard from "./ProductCard";

const SuggestionSlider = () => {
  return (
    <>
      <h2 className={styles.title}>РЕКОМЕНДАЦИИ</h2>
      <div className={styles.slider}>
        <ProductCard />
      </div>
    </>
  );
};

export default SuggestionSlider;
