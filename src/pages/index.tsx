import { memo } from "react";
import styles from "../styles/Home.module.css";
import MainSlider from "../components/MainSlider";
import CategorySlider from "../components/CategorySlider";
import SuggestionSlider from "../components/SuggestionSlider";

const Home = () => {
  return (
    <>
      <MainSlider />
      <CategorySlider totalImageNumber={7} numberToShow={3} />
      <SuggestionSlider />
    </>
  );
};

export default memo(Home);
