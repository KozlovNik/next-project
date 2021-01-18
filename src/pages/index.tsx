import { memo } from "react";
import styles from "../styles/Home.module.css";
import MainSlider from "../components/MainSlider";
import CategorySlider from "../components/CategorySlider";
import SuggestionSlider from "../components/SuggestionSlider";

const Home = () => {
  return (
    <div className={styles.home}>
      <MainSlider />
      <CategorySlider totalImageNumber={7} numberToShow={3} />
      <SuggestionSlider />
    </div>
  );
};

export default memo(Home);
