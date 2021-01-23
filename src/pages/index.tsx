import { memo } from "react";
import styles from "../styles/Home.module.css";
import SliderMain from "../components/SliderMain";
import SliderCategory from "../components/SliderCategory";
import SliderSuggestion from "../components/SliderSuggestion";

const Home = () => {
  return (
    <>
      <SliderMain />
      <SliderCategory totalImageNumber={7} numberToShow={3} />
      <SliderSuggestion />
    </>
  );
};

export default memo(Home);
