import withSession from "../lib/session";
import {
  getCategories,
  getUser,
  getProductData,
  getProductDataTypes,
  getCategoriesTypes,
} from "../lib/dataFunctions";
import { UserContextTypes } from "../lib/userContext";

import Layout from "../components/Layout";
import SliderMain from "../components/SliderMain";
import SliderCategory from "../components/SliderCategory";
import SliderSuggestion from "../components/SliderSuggestion";

interface IndexProps {
  user?: UserContextTypes;
  categories: getCategoriesTypes;
  productData: getProductDataTypes;
}

const Index: React.FC<IndexProps> = ({ user, categories, productData }) => {
  
  return (
    <Layout categories={categories} user={user}>
      <SliderMain />
      <SliderCategory totalImageNumber={7} numberToShow={3} />
      <SliderSuggestion productData={productData}/>
    </Layout>
  );
};

export default Index;

export const getServerSideProps = withSession(async ({ req }) => {
  const productData = await getProductData();
  const categories = await getCategories();

  return {
    props: { categories, productData, user: getUser(req) },
  };
});
