import { memo } from "react";
import Layout from "../components/Layout";
import SliderMain from "../components/SliderMain";
import SliderCategory from "../components/SliderCategory";
import SliderSuggestion from "../components/SliderSuggestion";

const Home = () => {
  return (
    <Layout>
      <SliderMain />
      <SliderCategory totalImageNumber={7} numberToShow={3} />
      <SliderSuggestion />
    </Layout>
  );
};

export default memo(Home);
