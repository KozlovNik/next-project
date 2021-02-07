import { memo } from "react";

import Starred from "../components/Starred";
import classNames from "classnames";
import Feedback from "../components/Feedback";
import Button from "../components/Button";

import styles from "./ProductCard.module.css";

interface ProductCardProps {
  id: number;
  name: string;
  slug: string;
  price: number;
  className: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  className,
  slug,
  name,
  price,
}) => {
  return (
    <div className={classNames([styles.productCard], className)}>
      <Starred className={styles.heart} classLabelName={styles.label} />
      <div>
        <img className={styles.image} src={`/products/${slug}.jpg`} alt="" />
      </div>
      <Feedback />

      <div className={styles.title}>{name}</div>
      <div className={styles.price}>{price} руб.</div>
      <Button>Добавить</Button>
    </div>
  );
};

export default memo(ProductCard);
