import AwesomeDebouncePromise from "awesome-debounce-promise";
import { useState } from "react";
import useConstant from "use-constant";
import styles from "./ProductCounter.module.css";

interface ProductCounterProps {
  quantity: number;
  id: number;
  updateQuantity: (id: number, quantity: number) => void;
}

const ProductCounter: React.FC<ProductCounterProps> = ({
  id,
  updateQuantity,
  quantity,
}) => {
  const [counter, setCounter] = useState(quantity);

  const debouncedFunction = useConstant(() =>
    AwesomeDebouncePromise(updateQuantity, 500)
  );

  const decrease = async () => {
    if (counter > 1) {
      setCounter(counter - 1);
      await debouncedFunction(id, counter - 1);
    }
  };

  const increase = async () => {
    if (counter < 100) {
      setCounter(counter + 1);
      await debouncedFunction(id, counter + 1);
    }
  };
  return (
    <div className={styles.wrapper}>
      <span className={styles.decrease} onClick={decrease}>
        -
      </span>
      <input
        type="text"
        name="quantity"
        className={styles.quantity}
        value={counter}
        readOnly
      />
      <span onClick={increase} className={styles.increase}>
        +
      </span>
    </div>
  );
};

export default ProductCounter;
