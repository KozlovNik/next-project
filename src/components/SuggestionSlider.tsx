import styles from "./SuggestionSlider.module.css";
import ProductCard from "./ProductCard";
import CatArrForward from "../components/svgs/CatArrForward";
import CatArrBackward from "../components/svgs/CatArrBackward";
import WithSliderHandlers, { SliderProps } from "./hocs/WithSliderHandlers";
import WithSliderResize from "./hocs/WithSliderResize";

const SuggestionSlider: React.FC<SliderProps> = ({
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
        <div className={styles.WithSliderHandlers} style={style}>
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

export default WithSliderResize(WithSliderHandlers(SuggestionSlider));
