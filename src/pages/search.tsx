/* eslint-disable no-empty */
import { useState } from "react";
import withSession from "../lib/session";
import {
  getProductData,
  getUser,
  getCategories,
  getCountries,
  getBrands,
  GetCategoriesTypes,
  GetProductDataTypes,
  GetCountriesTypes,
  GetBrandsTypes,
  GetCartTypes,
  getFavoritesIds,
  getFavorites,
} from "../lib/dataFunctions";
import { UserContextTypes } from "../lib/userContext";

import CatalogContent from "../components/CatalogContent";
import Layout from "../components/Layout";
import useCartItemsReducer from "../hooks/useCartItemsReducer";

export interface CatalogProps {
  productData: GetProductDataTypes;
  user?: UserContextTypes;
  categories: GetCategoriesTypes;
  countries: GetCountriesTypes;
  brands: GetBrandsTypes;
  cart: GetCartTypes;
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
      } catch (ex) {}
    } else {
      try {
        await fetch(`/api/favorites`, {
          method: "POST",
          body: JSON.stringify({ productId: id }),
        });
        setFavoritesIds([...favoritesIds, id]);
      } catch (ex) {}
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
  async ({ req, query: { categorySlug: category, ...rest } }) => {
    const user = getUser(req);
    const productData = await getProductData({ category, ...rest });
    const categories = await getCategories();
    const countries = await getCountries();
    const brands = await getBrands();

    let favorites = null;
    if (user?.isLogged) {
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
