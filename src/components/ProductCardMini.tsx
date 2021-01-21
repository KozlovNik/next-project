import React from "react";
import ButtonClose from "./ButtonClose";
import ProductCounter from "./ProductCounter";
import styles from "./ProductCardMini.module.css";

const ProductCartMini = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src="/product.jpg" />
      </div>
      <div className={styles.mid}>
        <div className={styles.name}>
          Кофе Caracolillo Caracolillo, 1000 гр.
        </div>
        <div className={styles.pricePerProduct}>120 руб./шт.</div>
        <div className={styles.price}>120 руб.</div>
      </div>
      <div className={styles.right}>
        <ButtonClose color="#B6B6B6" />
        <ProductCounter />
      </div>
    </div>
  );
};

export default ProductCartMini;
