import styles from "./SliderSuggestion.module.css";
import ProductCard from "./ProductCard";
import CatArrForward from "./svgs/CatArrForward";
import CatArrBackward from "./svgs/CatArrBackward";
import WithSliderHandlers, { SliderProps } from "./hocs/WithSliderHandlers";
import WithSliderResize from "./hocs/WithSliderResize";
import TitleBlock from "./TitleBlock";

const SliderSuggestion: React.FC<SliderProps> = ({
  style,
  goBackward,
  goForward,
  productData,
}) => {
  console.log("products", productData);
  return (
    <>
      <TitleBlock title="РЕКОМЕНДАЦИИ">
        <CatArrBackward onClick={goBackward} className={styles.arrow} />
        <CatArrForward onClick={goForward} className={styles.arrow} />
      </TitleBlock>

      <div className={styles.slider}>
        <div className={styles.WithSliderHandlers} style={style}>
          {productData &&
            productData.products.map((product) => <ProductCard {...product} />)}
        </div>
      </div>
    </>
  );
};

export default WithSliderResize(WithSliderHandlers(SliderSuggestion));
