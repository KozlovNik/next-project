import {
  getCategories,
  GetCategoriesTypes,
  getUser,
} from "../lib/dataFunctions";
import withSession from "../lib/session";
import Layout from "../components/Layout";
import { RegisterForm } from "../shared/RegisterForm";
import { INDEX_PAGE } from "../shared/constants/routes";

interface RegisterProps {
  user?: {
    id: number;
    firstName: string;
    isLogged: boolean;
  };
  categories: GetCategoriesTypes;
}

const Register: React.FC<RegisterProps> = ({ categories, user }) => (
  <Layout categories={categories} user={user}>
    <RegisterForm />
  </Layout>
);

export default Register;

export const getServerSideProps = withSession(async ({ req }) => {
  const user = getUser(req);
  if (user) {
    return {
      redirect: {
        destination: INDEX_PAGE,
        permanent: false,
      },
    };
  }

  const categories = await getCategories();

  return {
    props: { categories },
  };
});
