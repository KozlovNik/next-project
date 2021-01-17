import styles from "./SuggestionSlider.module.css";
import ProductCard from "./ProductCard";
import CatArrForward from "../components/svgs/CatArrForward";
import CatArrBackward from "../components/svgs/CatArrBackward";
import SliderWrapper, {
  WithDataComponentProps,
} from "../components/hocs/SliderWrapper";

const SuggestionSlider: React.FC<WithDataComponentProps> = ({
  style,
  goBackward,
  goForward,
}) => {
  return (
    <>
      <div className={styles.titleBlock}>
        <h2 className={styles.title}>РЕКОМЕНДАЦИИ</h2>
        <CatArrBackward onClick={goBackward} className={styles.arrow} />
        <CatArrForward onClick={goForward} className={styles.arrow} />
      </div>

      <div className={styles.slider}>
        <div className={styles.sliderWrapper} style={style}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </>
  );
};

export default SliderWrapper(SuggestionSlider);
