import withSession from "../../lib/session";
import {
  getProductData,
  getUser,
  getCategories,
  getCountries,
  getBrands,
  getCategoriesTypes,
  getProductDataTypes,
  getCountriesTypes,
  getBrandsTypes,
  getCart,
  getCartTypes,
  getFavorites,
  getFavoritesIds,
} from "../../lib/dataFunctions";
import { UserContextTypes } from "../../lib/userContext";
import { useRouter } from "next/router";

import Breadcrumbs from "../../components/Breadcrumbs";
import Sidebar from "../../components/Sidebar";
import CatalogContent from "../../components/CatalogContent";
import Layout from "../../components/Layout";

import styles from "../../styles/Catalog.module.css";
import useCartItemsReducer from "../../hooks/useCartItemsReducer";
import { useState } from "react";

export interface CatalogProps {
  productData: getProductDataTypes;
  user?: UserContextTypes;
  categories: getCategoriesTypes;
  countries: getCountriesTypes;
  brands: getBrandsTypes;
  cart: getCartTypes;
  favorites: number[];
}

const Catalog: React.FC<CatalogProps> = ({
  categories,
  user,
  cart,
  favorites,
  ...rest
}) => {
  const {
    query: { categorySlug },
  } = useRouter();

  const { cartItems, handleAddToCart } = useCartItemsReducer(
    cart?.cartItems || []
  );

  const [favoritesIds, setFavoritesIds] = useState(favorites);

  const handleToggleStarred = async (id: number) => {
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
      <div className={styles.wrapper}>
        <Breadcrumbs
          category={categories.find(({ slug }) => categorySlug === slug)}
        />
        <Sidebar />
        <CatalogContent
          handleAddToCart={handleAddToCart}
          favoritesIds={favoritesIds}
          handleToggleStarred={handleToggleStarred}
          cartItems={cartItems}
          {...rest}
        />
      </div>
    </Layout>
  );
};

export default Catalog;

export const getServerSideProps = withSession(
  async ({ req, query: { categorySlug: category, ...rest }, res }) => {
    const user = getUser(req);
    const productData = await getProductData({ category, ...rest });
    const categories = await getCategories();
    const countries = await getCountries();
    const brands = await getBrands();
    const cart = await getCart({ req, res });

    let favorites = null;
    if (user && user.isLogged) {
      favorites = await getFavorites(user.id);
    }

    // console.log('cart', categories)

    return {
      props: {
        categories,
        productData,
        brands,
        countries,
        user,
        cart,
        favorites: getFavoritesIds(favorites),
      },
    };
  }
);
