import { getCartTypes } from "../lib/dataFunctions";
import { Product } from "@prisma/client";

import ProductCardMini from "./ProductCardMini";

import styles from "./Cart.module.css";

interface CartProps {
  cartItems: {
    id: number;
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
}) => {
  return (
    <div className={styles.items}>
      <h1 className="heading">КОРЗИНА</h1>
      {cartItems &&
        cartItems.map((props) => (
          <ProductCardMini
            deleteCartItem={deleteCartItem}
            updateQuantity={updateQuantity}
            key={props.id}
            {...props}
          />
        ))}
    </div>
  );
};

export default Cart;
