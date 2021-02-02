import { memo } from "react";
import Layout from "../components/Layout";
import SliderMain from "../components/SliderMain";
import SliderCategory from "../components/SliderCategory";
import SliderSuggestion from "../components/SliderSuggestion";
import withSession from "../lib/session";
import { UserContextTypes } from "../lib/userContext";

interface HomeProps {
  user: UserContextTypes;
}

const Home: React.FC<HomeProps> = ({ user }) => {
  return (
    <Layout value={user}>
      <SliderMain />
      <SliderCategory totalImageNumber={7} numberToShow={3} />
      <SliderSuggestion />
    </Layout>
  );
};

export default memo(Home);

export const getServerSideProps = withSession(async ({ req }) => {
  const user = req.session.get("user");
  if (user) {
    return { props: { user: req.session.get("user") } };
  }

  return {
    props: {},
  };
});
