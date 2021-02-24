import {
  getCategories,
  getCategoriesTypes,
  getUser,
  getCartTypes,
} from "../lib/dataFunctions";
import withSession from "../lib/session";
import { UserContextTypes } from "../lib/userContext";
import classNames from "classnames";

import Layout from "../components/Layout";
import Basket from "../components/svgs/Basket";
import CartMini from "../components/svgs/CartMini";
import Pen from "../components/svgs/Pen";

import styles from "../styles/Favorites.module.css";

interface CartProps {
  user?: UserContextTypes;
  categories: getCategoriesTypes;
  cart: getCartTypes;
}

const CartPage: React.FC<CartProps> = (props) => {
  const { user, categories } = props;

  return (
    <Layout user={user} categories={categories}>
      <h1 className="heading">ВАШИ ЗАКЛАДКИ</h1>
      <div className={styles.para}>Товаров в закладках</div>
      <div className={styles.wrapper}>
        <div className={styles.tableHeading}>
          <div className={styles.hCell}>Название товара</div>
          <div className={styles.hCell}>Цена</div>
          <div className={styles.hCell}>Комментарий</div>
          <div className={styles.hCell}>Добавить в корзину/удалить</div>
        </div>
        <div className={styles.row}>
          <div className={classNames(styles.cell, styles.name)}>
            Молотый кофе Decaffeinato без кофеина, вакуумная упаковка 250 г,
            Lavazza
          </div>
          <div className={styles.cell}>100р.</div>
          <div className={classNames(styles.cell, styles.name)}>Ваша пометка</div>
          <div className={styles.cell}>d</div>
        </div>
        <div className={styles.row}>
          <div className={classNames(styles.cell, styles.name)}>
            Кофе Caracolillo Caracolillo, 1000 гр.
          </div>
          <div className={styles.cell}>100р.</div>
          <div className={classNames(styles.cell, styles.name)}>
            <Pen initialColor="#607399" hoverColor="#607399" />
            Ваша пометка
          </div>
          <div className={styles.cell}>
            <CartMini className={styles.img} />
            <Basket className={styles.img} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps = withSession(async ({ req, res }) => {
  const categories = await getCategories();

  return {
    props: { categories, user: getUser(req) },
  };
});

export default CartPage;
