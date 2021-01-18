import styles from "./SuggestionSlider.module.css";
import ProductCard from "./ProductCard";
import CatArrForward from "../components/svgs/CatArrForward";
import CatArrBackward from "../components/svgs/CatArrBackward";
import WithSliderHandlers, { SliderProps } from "./hocs/WithSliderHandlers";
import WithSliderResize from "./hocs/WithSliderResize";
import TitleBlock from "./TitleBlock";

const SuggestionSlider: React.FC<SliderProps> = ({
  style,
  goBackward,
  goForward,
}) => {
  return (
    <>
      <TitleBlock title="РЕКОМЕНДАЦИИ">
        <CatArrBackward onClick={goBackward} className={styles.arrow} />
        <CatArrForward onClick={goForward} className={styles.arrow} />
      </TitleBlock>

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
