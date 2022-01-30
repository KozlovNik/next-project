import { Product } from "@prisma/client";

import ProductCardMini from "./ProductCardMini";

import styles from "./Cart.module.css";

interface CartProps {
  cartItems: {
    quantity: number;
    product: Product;
  }[];
  deleteCartItem: (itemId: number) => void;
  updateQuantity: (itemId: number, quantity: number) => void;
}

const Cart: React.FC<CartProps> = ({
  cartItems,
  deleteCartItem,
  updateQuantity,
}) => (
  <div className={styles.items}>
    <h1 className="heading">КОРЗИНА</h1>
    {cartItems &&
      cartItems.map((props) => (
        <ProductCardMini
          deleteCartItem={deleteCartItem}
          updateQuantity={updateQuantity}
          key={props.product.id}
          {...props}
        />
      ))}
  </div>
);

export default Cart;
