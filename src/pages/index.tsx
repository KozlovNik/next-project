import withSession from "../lib/session";
import {
  getCategories,
  getUser,
  getProductData,
  GetProductDataTypes,
  GetCategoriesTypes,
  getCart,
  GetCartTypes,
} from "../lib/dataFunctions";
import { UserContextTypes } from "../lib/userContext";
import useCartItemsReducer from "../hooks/useCartItemsReducer";

import Layout from "../components/Layout";
import { MainSlider } from "../components/Sliders";
import SliderCategory from "../components/SliderCategory";
import SliderSuggestion from "../components/SliderSuggestion";

interface IndexProps {
  user?: UserContextTypes;
  categories: GetCategoriesTypes;
  productData: GetProductDataTypes;
  cart: GetCartTypes;
}

const Index: React.FC<IndexProps> = ({
  user,
  categories,
  productData,
  cart,
}) => {
  const { cartItems, handleAddToCart } = useCartItemsReducer(
    cart?.cartItems || []
  );

  return (
    <Layout categories={categories} user={user}>
      <MainSlider />
      <SliderCategory totalImageNumber={7} numberToShow={3} />
      <SliderSuggestion
        handleAddToCart={handleAddToCart}
        cartItems={cartItems}
        productData={productData}
      />
    </Layout>
  );
};

export default Index;

export const getServerSideProps = withSession(async ({ req, res }) => {
  const productData = await getProductData();
  const categories = await getCategories();
  const cart = await getCart({ req, res });

  return {
    props: { categories, productData, cart, user: getUser(req) },
  };
});
