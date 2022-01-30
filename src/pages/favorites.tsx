import {
  getCategories,
  GetCategoriesTypes,
  getUser,
  GetCartTypes,
  getFavorites,
  GetFavoritesTypes,
} from "../lib/dataFunctions";
import withSession from "../lib/session";
import { UserContextTypes } from "../lib/userContext";

import Layout from "../components/Layout";
import Favorites from "../components/Favorites";

interface CartProps {
  user?: UserContextTypes;
  categories: GetCategoriesTypes;
  cart: GetCartTypes;
  favorites: GetFavoritesTypes;
}

const FavoritesPage: React.FC<CartProps> = (props) => {
  const { user, categories, favorites } = props;

  return (
    <Layout user={user} categories={categories}>
      <Favorites favorites={favorites} />
    </Layout>
  );
};

export const getServerSideProps = withSession(async ({ req }) => {
  const user = getUser(req);
  if (!user) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const categories = await getCategories();

  const favorites = await getFavorites(user.id);

  return {
    props: { categories, user, favorites },
  };
});

export default FavoritesPage;
