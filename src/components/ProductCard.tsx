import React from "react";
import styles from "./ProductCard.module.css";
import Star from "../components/svgs/Star";

const ProductCard = () => {
  return (
    <div className={styles.productCard}>
      <img className={styles.image} src="/product.jpg" alt="" />
      <Star width={28} />
    </div>
  );
};

export default ProductCard;
