import { memo } from "react";

import Layout from "../components/Layout";
import SliderMain from "../components/SliderMain";
import SliderCategory from "../components/SliderCategory";
import SliderSuggestion from "../components/SliderSuggestion";

import withSession from "../lib/session";
import { getCategories, getUser } from "../lib/dataFunctions";
import { UserContextTypes } from "../lib/userContext";
import { CategoriesContextType } from "../lib/categoryContext";

interface IndexProps {
  user?: UserContextTypes;
  categories: CategoriesContextType;
}

const Index: React.FC<IndexProps> = ({ user, categories }) => {
  return (
    <Layout categories={categories} user={user}>
      <SliderMain />
      <SliderCategory totalImageNumber={7} numberToShow={3} />
      <SliderSuggestion />
    </Layout>
  );
};

export default memo(Index);

export const getServerSideProps = withSession(async ({ req }) => {
  const categories = await getCategories();

  return {
    props: { categories, user: getUser(req) },
  };
});
