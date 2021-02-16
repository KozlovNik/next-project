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
} from "../lib/dataFunctions";
import { UserContextTypes } from "../lib/userContext";
import { useRouter } from "next/router";

import Breadcrumbs from "../components/Breadcrumbs";
import Sidebar from "../components/Sidebar";
import CatalogContent from "../components/CatalogContent";
import Layout from "../components/Layout";

import styles from "../styles/Catalog.module.css";

export interface CatalogProps {
  productData: getProductDataTypes;
  user?: UserContextTypes;
  categories: getCategoriesTypes;
  countries: getCountriesTypes;
  brands: getBrandsTypes;
}

const Catalog: React.FC<CatalogProps> = ({ categories, user, ...rest }) => {
  const {
    query: { categorySlug },
  } = useRouter();

  return (
    <Layout categories={categories} user={user}>
      <CatalogContent {...rest} />
    </Layout>
  );
};

export default Catalog;

export const getServerSideProps = withSession(
  async ({ req, query: { categorySlug: category, ...rest } }) => {
    const productData = await getProductData({ category, ...rest });
    const categories = await getCategories();
    const countries = await getCountries();
    const brands = await getBrands();

    return {
      props: { categories, productData, brands, countries, user: getUser(req) },
    };
  }
);
