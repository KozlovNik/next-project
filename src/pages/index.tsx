import styles from "../styles/Home.module.css";
import MainSlider from "../components/MainSlider";
import CategorySlider from "../components/CategorySlider";



export default function Home() {
  
  

  return (
    <div className={styles.home}>
      <MainSlider />
      <CategorySlider />
    </div>
  );
}
