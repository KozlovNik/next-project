import { Product } from "@prisma/client";
import Link from "next/link";

import { CloseButton } from "./CloseButton";
import ProductCounter from "./ProductCounter";

import styles from "./ProductCardMini.module.css";

interface ProductCardMiniProps {
  quantity: number;
  product: Product;
  deleteCartItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
}

const ProductCardMini: React.FC<ProductCardMiniProps> = (props) => {
  const {
    quantity,
    product: { name, price, slug, id },
    deleteCartItem,
    updateQuantity,
  } = props;

  const link = `/products/${slug}`;

  return (
    <div className={styles.wrapper}>
      <Link href={link}>
        <a className={styles.imageWrapper}>
          <img alt="" className={styles.image} src={`${link}.jpg`} />
        </a>
      </Link>
      <div className={styles.mid}>
        <Link href={link}>
          <a className={styles.name}>{name}</a>
        </Link>
        <div className={styles.pricePerProduct}>{price} руб./шт.</div>
        <div className={styles.price}>{quantity * price} руб.</div>
      </div>
      <div className={styles.right}>
        <CloseButton onClick={() => deleteCartItem(id)} />
        <ProductCounter
          id={id}
          quantity={quantity}
          updateQuantity={updateQuantity}
        />
      </div>
    </div>
  );
};

export default ProductCardMini;
