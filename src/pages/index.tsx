import { memo } from "react";

import Layout from "../components/Layout";
import SliderMain from "../components/SliderMain";
import SliderCategory from "../components/SliderCategory";
import SliderSuggestion from "../components/SliderSuggestion";

import withSession from "../lib/session";
import { UserContextTypes } from "../lib/userContext";
import {
  CategoriesContextType,
  CategoriesContext,
} from "../lib/categoryContext";

import { prisma } from "../lib/prismaClient";

interface IndexProps {
  user?: UserContextTypes;
  categories: CategoriesContextType;
}

const Index: React.FC<IndexProps> = ({ user, categories }) => {
  return (
    <Layout value={user}>
      <SliderMain />
      <CategoriesContext.Provider value={categories}>
        <SliderCategory totalImageNumber={7} numberToShow={3} />
      </CategoriesContext.Provider>

      <SliderSuggestion />
    </Layout>
  );
};

export default memo(Index);

export const getServerSideProps = withSession(async ({ req }) => {
  const user = req.session.get("user");
  const categories = await prisma.category.findMany();
  let data: IndexProps;
  data = { categories };

  if (user) {
    data = { ...data, user };
  }

  return {
    props: data,
  };
});
