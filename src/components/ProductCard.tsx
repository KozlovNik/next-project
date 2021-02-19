import { memo } from "react";
import { useRouter } from "next/router";

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
  inCart: boolean;
  handleAddToCart: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  className,
  slug,
  name,
  price,
  inCart,
  handleAddToCart,
  id,
}) => {
  const link = `/products/${slug}`;
  const router = useRouter();
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
      {inCart ? (
        <Button onClick={() => router.push("/cart")}>Перейти в корзину</Button>
      ) : (
        <Button onClick={() => handleAddToCart(id)}>Добавить</Button>
      )}
    </div>
  );
};

export default memo(ProductCard);
