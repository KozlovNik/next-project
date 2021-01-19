import { useState, memo } from "react";
import styles from "./ProductCard.module.css";
import Star from "../components/svgs/Star";
import Heart from "../components/svgs/Heart";
import classNames from "classnames";

interface ProductCartProps {
  className?: string;
}

const ProductCard: React.FC<ProductCartProps> = ({ className }) => {
  const [rating, setRating] = useState(2);
  return (
    <div className={classNames([styles.productCard], className)}>
      <Heart className={styles.heart} />
      <div>
        <img className={styles.image} src="/product.jpg" alt="" />
      </div>

      <div className={styles.feedback__wrapper}>
        <span className={styles.stars}>
          {[...Array(5)].map((_, i) => {
            return (
              <Star
                key={i}
                initialColor={i > rating ? "#C4C4C4" : "#DCE01B"}
                hoverColor="#DCE01B"
                className={styles.star}
              />
            );
          })}
        </span>
        <span className={styles.feedback}>Нет отзывов</span>
      </div>
      <div className={styles.title}>Кофе Caracolillo Caracolillo, 1000 гр.</div>
      <div className={styles.price}>1230 руб.</div>
      <button className={styles.button}>Добавить</button>
    </div>
  );
};

export default memo(ProductCard);
