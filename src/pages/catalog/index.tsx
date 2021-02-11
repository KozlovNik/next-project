import CatalogPage from "../../components/CatalogPage";

import withSession from "../../lib/session";
import {
  getProductData,
  getUser,
  getCategories,
} from "../../lib/dataFunctions";

import { CatalogPageProps } from "../../components/CatalogPage";

const Catalog: React.FC<CatalogPageProps> = (props) => {
  return <CatalogPage {...props} />;
};

export default Catalog;

export const getServerSideProps = withSession(async ({ req, query }) => {
  const productData = await getProductData({
    category: query.categorySlug,
    page: query.page,
  });
  const categories = await getCategories();

  return {
    props: { categories, productData, user: getUser(req) },
  };
});
