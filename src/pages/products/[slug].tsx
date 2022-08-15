/* eslint-disable no-empty */
import Error from "next/error";
import { useState } from "react";
import useCartItemsReducer from "../../hooks/useCartItemsReducer";
import {
  getCart,
  getCategories,
  GetCategoriesTypes,
  getProduct,
  getUser,
  GetProductTypes,
  GetCartTypes,
  getFavorites,
  getFavoritesIds,
} from "../../lib/dataFunctions";
import withSession from "../../lib/session";
import { UserContextTypes } from "../../lib/userContext";

import Breadcrumbs from "../../components/Breadcrumbs";
import Feedback from "../../components/Feedback";
import Starred from "../../components/Starred";
import Share from "../../components/Share";
import ProductCounter from "../../components/ProductCounter";
import ButtonAddToCart from "../../components/ButtonAddToCart";
import AboutProduct from "../../components/AboutProduct";
import Layout from "../../components/Layout";

import styles from "../../styles/Product.module.css";

interface ProductProps {
  product?: GetProductTypes;
  user?: UserContextTypes;
  categories: GetCategoriesTypes;
  cart: GetCartTypes;
  favorites: number[];
}

const Product: React.FC<ProductProps> = ({
  product,
  user,
  categories,
  cart,
  favorites,
}) => {
  const { cartItems, handleAddToCart, updateQuantity } = useCartItemsReducer(
    cart?.cartItems ?? []
  );
  const [feedback, setFeedback] = useState(product?.feedback || []);

  const cartItem = cartItems.filter((i) => i.product.id === product?.id)[0];

  const [favoritesIds, setFavoritesIds] = useState(favorites);

  if (!product) {
    return <Error statusCode={404} />;
  }

  const {
    id,
    name,
    slug,
    brand,
    price,
    material,
    roasting,
    ingredients,
    country,
    weight,
    about,
    category,
  } = product;

  const handleToggleStarred = async () => {
    if (favoritesIds.includes(id)) {
      try {
        await fetch(`/api/favorites/${id}`, { method: "DELETE" });
        setFavoritesIds(favoritesIds.filter((i) => i !== id));
      } catch {}
    } else {
      try {
        await fetch(`/api/favorites`, {
          method: "POST",
          body: JSON.stringify({ productId: id }),
        });
        setFavoritesIds([...favoritesIds, id]);
      } catch {}
    }
  };

  return (
    <Layout categories={categories} user={user}>
      <Breadcrumbs category={category} product={{ name, slug }} />
      <div className="heading">{name}</div>
      <div className={styles.contentWrapper}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={`/products/${slug}.jpg`} alt="" />
        </div>
        <div className={styles.infoWrapper}>
          <div className={styles.icons}>
            <Feedback slug={slug} feedback={feedback} />
            <Starred
              handleToggleStarred={handleToggleStarred}
              isStarred={favoritesIds.includes(id)}
            />
            <Share />
          </div>
          <div className={styles.buyWrapper}>
            <div className={styles.price}>{price} руб.</div>
            {cartItem && (
              <ProductCounter
                {...cartItem}
                id={id}
                updateQuantity={updateQuantity}
              />
            )}
            <ButtonAddToCart
              inCart={!!cartItem}
              handleAddToCart={() => handleAddToCart(id)}
            />
          </div>
          <div className={styles.chars}>
            <div className={styles.charWrapper}>
              Бренд: <span className={styles.char}>{brand.name}</span>
            </div>
            <div className={styles.charWrapper}>
              Материал упаковки: <span className={styles.char}>{material}</span>
            </div>
            {roasting && (
              <div className={styles.charWrapper}>
                Обжарка: <span className={styles.char}>{roasting}</span>
              </div>
            )}
            {ingredients && (
              <div className={styles.charWrapper}>
                Состав: <span className={styles.char}>{ingredients}</span>
              </div>
            )}
            <div className={styles.charWrapper}>
              Страна: <span className={styles.char}>{country.name}</span>
            </div>
            {weight && (
              <div className={styles.charWrapper}>
                Фасовка: <span className={styles.char}>{weight} г.</span>
              </div>
            )}
          </div>
        </div>
      </div>
      <AboutProduct
        feedback={feedback}
        setFeedback={setFeedback}
        name={name}
        id={id}
        info={about}
        user={user}
      />
    </Layout>
  );
};

export const getServerSideProps = withSession(async ({ req, query, res }) => {
  const user = getUser(req);
  const product = await getProduct(query.slug);
  const categories = await getCategories();
  const cart = await getCart({ req, res });
  let favorites = null;
  if (user?.id) {
    favorites = await getFavorites(user.id);
  }

  return {
    props: {
      categories,
      product: JSON.parse(JSON.stringify(product)),
      user,
      cart,
      favorites: getFavoritesIds(favorites),
    },
  };
});

export default Product;
