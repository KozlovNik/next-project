import { useEffect, useState } from "react";
import classNames from "classnames";
import Link from "next/link";

import styles from "./SliderMain.module.css";

const imgArr = [1, 2, 3];

const SliderMain = () => {
  const [counter, setCounter] = useState(0);
  const [id, setId] = useState<NodeJS.Timeout>();

  const intervalHandler = () => {
    if (id) clearInterval(id);
    return setInterval(() => {
      return setCounter((c) => (c > 1 ? 0 : c + 1));
    }, 5000);
  };

  useEffect(() => {
    setId(intervalHandler);
  }, []);

  const style = {
    transform: `translateX(${counter * -100}%)`,
  };

  return (
    <div className={styles.slider}>
      <div className={styles.WithSliderHandlers} style={style}>
        {imgArr.map((ind) => (
          <img
            key={ind}
            className={styles.image}
            src={`/main-slider/${ind}.jpg`}
            alt=""
          />
        ))}
      </div>
      <Link href="/catalog">
        <a className={styles.toCatalog}>
          <span className={styles.toCatalogWrapper}>ПЕРЕЙТИ В КАТАЛОГ</span>
        </a>
      </Link>

      <div className={styles.circles}>
        {imgArr.map((ind) => (
          <div
            key={ind}
            onClick={() => {
              setCounter(ind - 1);
              setId(intervalHandler);
            }}
            className={classNames(styles.circle, {
              [styles.circleActive]: ind - 1 === counter,
            })}
            data-ind={ind}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderMain;
