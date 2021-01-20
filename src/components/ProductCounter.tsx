// import { useDebounce } from "../hooks/custom-hooks";
import { useState } from "react";
import styles from "./ProductCounter.module.css";

const ProductCounter: React.FC = () => {
  const [counter, setCounter] = useState(1);
  return (
    <div className={styles.wrapper}>
      <span className={styles.decrease}>-</span>
      <input
        type="text"
        name="quantity"
        className={styles.quantity}
        value={counter}
      />
      <span className={styles.increase}>+</span>
    </div>
  );
};

export default ProductCounter;
