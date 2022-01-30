import { Product } from "@prisma/client";
import WithSliderHandlers, {
  WithSliderHandlersProps,
} from "./hocs/WithSliderHandlers";

import ProductCard from "./ProductCard";
import CatArrForward from "./svgs/CatArrForward";
import CatArrBackward from "./svgs/CatArrBackward";
import WithSliderResize from "./hocs/WithSliderResize";
import TitleBlock from "./TitleBlock";

import styles from "./SliderSuggestion.module.css";

export interface SliderProps extends WithSliderHandlersProps {
  goForward: () => void;
  goBackward: () => void;
  style: {
    transform: string;
  };
  handleAddToCart: (id: number) => void;
  cartItems?: {
    id: number;
    quantity: number;
    product: Product;
  }[];
}

const SliderSuggestion: React.FC<SliderProps> = ({
  style,
  goBackward,
  goForward,
  productData,
  cartItems,
  handleAddToCart,
}) => (
  <>
    <TitleBlock title="РЕКОМЕНДАЦИИ">
      <CatArrBackward onClick={goBackward} className={styles.arrow} />
      <CatArrForward onClick={goForward} className={styles.arrow} />
    </TitleBlock>

    <div className={styles.slider}>
      <div className={styles.WithSliderHandlers} style={style}>
        {productData &&
          productData.products.map((product) => (
            <ProductCard
              key={product.id}
              handleAddToCart={handleAddToCart}
              inCart={
                cartItems?.some((i) => i.product.id === product.id) ?? false
              }
              {...product}
            />
          ))}
      </div>
    </div>
  </>
);

export default WithSliderResize(WithSliderHandlers(SliderSuggestion));
