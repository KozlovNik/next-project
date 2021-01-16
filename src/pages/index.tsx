import styles from "../styles/Home.module.css";
import MainSlider from "../components/MainSlider";
import CategorySlider from "../components/CategorySlider";
import SuggestionSlider from "../components/SuggestionSlider";

export default function Home() {
  return (
    <div className={styles.home}>
      <MainSlider />
      <CategorySlider />
      <SuggestionSlider />
    </div>
  );
}
