import { memo } from "react";

import Starred from "../components/Starred";
import classNames from "classnames";
import Feedback from "../components/Feedback";
import Button from "../components/Button";

import Link from "next/link";

import styles from "./ProductCard.module.css";

interface ProductCardProps {
  id: number;
  name: string;
  slug: string;
  price: number;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  className,
  slug,
  name,
  price,
}) => {
  const link = `/products/${slug}`;
  const onClick = () => {};
  return (
    <div className={classNames([styles.productCard], className)}>
      <Starred className={styles.heart} classLabelName={styles.label} />
      <Link href={link}>
        <a>
          <img className={styles.image} src={`${link}.jpg`} alt="" />
        </a>
      </Link>
      <Feedback />

      <Link href={link}>
        <a className={styles.title}>{name}</a>
      </Link>
      <div className={styles.price}>{price} руб.</div>
      <Button onClick={onClick}>Добавить</Button>
    </div>
  );
};

export default memo(ProductCard);
