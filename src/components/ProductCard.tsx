import { memo } from "react";

import Starred from "../components/Starred";
import classNames from "classnames";
import Feedback from "../components/Feedback";
import ButtonAddToCart from "../components/ButtonAddToCart";

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
  feedback?: any;
  handleToggleStarred: (id: number) => void;
  favoritesIds: number[];
}

const ProductCard: React.FC<ProductCardProps> = ({
  className,
  slug,
  name,
  price,
  inCart,
  handleAddToCart,
  id,
  feedback,
  handleToggleStarred,
  favoritesIds,
}) => {
  const link = `/products/${slug}`;
  return (
    <div className={classNames([styles.productCard], className)}>
      <Starred
        isStarred={favoritesIds?.includes(id) ?? false}
        handleToggleStarred={() => {
          handleToggleStarred(id);
        }}
        className={styles.heart}
        classLabelName={styles.label}
      />
      <Link href={link}>
        <a>
          <img className={styles.image} src={`${link}.jpg`} alt="" />
        </a>
      </Link>
      <Feedback feedback={feedback} slug={slug} />

      <Link href={link}>
        <a className={styles.title}>{name}</a>
      </Link>
      <div className={styles.price}>{price} руб.</div>
      <ButtonAddToCart
        inCart={inCart}
        handleAddToCart={async () => await handleAddToCart(id)}
      />
    </div>
  );
};

export default memo(ProductCard);
