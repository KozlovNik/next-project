import { memo } from "react";
import styles from "./ProductCard.module.css";
import Starred from "../components/Starred";
import classNames from "classnames";
import Feedback from "../components/Feedback";
import Button from "../components/Button";

interface ProductCartProps {
  className?: string;
}

const ProductCard: React.FC<ProductCartProps> = ({ className }) => {
  return (
    <div className={classNames([styles.productCard], className)}>
      <Starred className={styles.heart} classLabelName={styles.label} />
      <div>
        <img className={styles.image} src="/product.jpg" alt="" />
      </div>
      <Feedback />

      <div className={styles.title}>Кофе Caracolillo Caracolillo, 1000 гр.</div>
      <div className={styles.price}>1230 руб.</div>
      <Button>Добавить</Button>
    </div>
  );
};

export default memo(ProductCard);
