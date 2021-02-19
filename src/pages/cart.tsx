import { useState } from "react";
import {
  getCategories,
  getCategoriesTypes,
  getUser,
  getCart,
  getCartTypes,
} from "../lib/dataFunctions";
import fetcher from "../lib/fetchJson";
import withSession from "../lib/session";
import { UserContextTypes } from "../lib/userContext";

import Layout from "../components/Layout";
import Order from "../components/Order";
import Cart from "../components/Cart";

import styles from "../styles/Cart.module.css";

interface CartProps {
  user?: UserContextTypes;
  categories: getCategoriesTypes;
  cart: getCartTypes;
}

const CartPage: React.FC<CartProps> = (props) => {
  const { user, categories, cart } = props;

  const [cartItems, setCartItems] = useState(cart?.cartItems);

  let content;

  const deleteCartItem = async (itemId: number) => {
    await fetcher(`/api/cartItems/${itemId}`, { method: "DELETE" });
    const newCartItems = cartItems?.filter(({ id }) => id !== itemId);
    setCartItems(newCartItems);
  };

  const updateQuantity = async (itemId: number, quantity: number) => {
    try {
      const cartItem = await fetcher(`/api/cartItems/${itemId}`, {
        method: "PUT",
        body: JSON.stringify({ quantity }),
      });
      const newCartItems = cartItems?.map(({ id, ...rest }) =>
        id === cartItem.id ? cartItem : { id, ...rest }
      );
      setCartItems(newCartItems);
    } catch {}
  };

  return (
    <Layout user={user} categories={categories}>
      <div className={styles.wrapper}>
        {cartItems && cartItems.length > 0 ? (
          <>
            <Cart
              cartItems={cartItems}
              deleteCartItem={deleteCartItem}
              updateQuantity={updateQuantity}
            />
            <Order />
          </>
        ) : (
          <h1 className="heading">ВАША КОРЗИНА ПУСТА</h1>
        )}
      </div>
    </Layout>
  );
};

export const getServerSideProps = withSession(async ({ req, res }) => {
  const cart = await getCart({ req, res });
  const categories = await getCategories();

  return {
    props: { categories, user: getUser(req), cart },
  };
});

export default CartPage;
