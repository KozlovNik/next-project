import {
  getCategories,
  getCategoriesTypes,
  getUser,
  getCart,
  getCartTypes,
} from "../lib/dataFunctions";
import withSession from "../lib/session";
import { UserContextTypes } from "../lib/userContext";
import useCartItemsReducer from "../hooks/useCartItemsReducer";

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

  const { cartItems, deleteCartItem, updateQuantity } = useCartItemsReducer(
    cart?.cartItems || []
  );

  return (
    <Layout user={user} categories={categories}>
      <div className={styles.wrapper}>
        {cartItems.length > 0 ? (
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
