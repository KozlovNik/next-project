import withSession from "../lib/session";
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
  getCartTypes,
  getFavoritesIds,
  getCart,
  getFavorites,
} from "../lib/dataFunctions";
import { UserContextTypes } from "../lib/userContext";

import CatalogContent from "../components/CatalogContent";
import Layout from "../components/Layout";
import useCartItemsReducer from "../hooks/useCartItemsReducer";
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
      <CatalogContent
        handleAddToCart={handleAddToCart}
        favoritesIds={favoritesIds}
        cartItems={cartItems}
        handleToggleStarred={handleToggleStarred}
        {...rest}
      />
    </Layout>
  );
};

export default Catalog;

export const getServerSideProps = withSession(
  async ({ req, res, query: { categorySlug: category, ...rest } }) => {
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

    return {
      props: {
        categories,
        productData,
        brands,
        countries,
        user,
        favorites: getFavoritesIds(favorites),
      },
    };
  }
);
