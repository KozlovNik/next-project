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
} from "../../lib/dataFunctions";
import { UserContextTypes } from "../../lib/userContext";
import { useRouter } from "next/router";

import Breadcrumbs from "../../components/Breadcrumbs";
import Sidebar from "../../components/Sidebar";
import CatalogContent from "../../components/CatalogContent";
import Layout from "../../components/Layout";

import styles from "../../styles/Catalog.module.css";
import useCartItemsReducer from "../../hooks/useCartItemsReducer";

export interface CatalogProps {
  productData: getProductDataTypes;
  user?: UserContextTypes;
  categories: getCategoriesTypes;
  countries: getCountriesTypes;
  brands: getBrandsTypes;
  cart: getCartTypes;
}

const Catalog: React.FC<CatalogProps> = ({
  categories,
  user,
  cart,
  ...rest
}) => {
  const {
    query: { categorySlug },
  } = useRouter();

  const { cartItems, handleAddToCart } = useCartItemsReducer(
    cart?.cartItems || []
  );

  return (
    <Layout categories={categories} user={user}>
      <div className={styles.wrapper}>
        <Breadcrumbs
          category={categories.find(({ slug }) => categorySlug === slug)}
        />
        <Sidebar />
        <CatalogContent
          handleAddToCart={handleAddToCart}
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
    const productData = await getProductData({ category, ...rest });
    const categories = await getCategories();
    const countries = await getCountries();
    const brands = await getBrands();
    const cart = await getCart({ req, res });

    return {
      props: {
        categories,
        productData,
        brands,
        countries,
        user: getUser(req),
        cart,
      },
    };
  }
);
