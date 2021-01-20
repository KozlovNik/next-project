import Breadcrumbs from "../components/Breadcrumbs";
import Feedback from "../components/Feedback";
import Starred from "../components/Starred";
import Share from "../components/Share";
import ProductCounter from "../components/ProductCounter";
import Button from "../components/Button";
import AboutProduct from "../components/AboutProduct";

import styles from "../styles/Product.module.css";

const Product = () => {
  return (
    <div className={styles.wrapper}>
      <Breadcrumbs />
      <div className={styles.heading}>
        Кофе Caracolillo Caracolillo, 1000 гр.
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src="/product.jpg" alt="" />
        </div>
        <div className={styles.infoWrapper}>
          <div className={styles.icons}>
            <Feedback />
            <Starred />
            <Share />
          </div>
          <div className={styles.buyWrapper}>
            <div className={styles.price}>1230p</div>
            <ProductCounter />
            <Button>Добавить</Button>
          </div>
          <div className={styles.chars}>
            <div className={styles.charWrapper}>
              Бренд: <span className={styles.char}>Lavazza</span>
            </div>
            <div className={styles.charWrapper}>
              Материал упаковки:{" "}
              <span className={styles.char}>Многослойный пакет</span>
            </div>
            <div className={styles.charWrapper}>
              Обжарка: <span className={styles.char}>Средняя</span>
            </div>
            <div className={styles.charWrapper}>
              Особенности вкуса: <span className={styles.char}>Кислинка</span>
            </div>
            <div className={styles.charWrapper}>
              Состав: <span className={styles.char}>100% Арабика</span>
            </div>
            <div className={styles.charWrapper}>
              Страна: <span className={styles.char}>Италия</span>
            </div>
            <div className={styles.charWrapper}>
              Фасовка: <span className={styles.char}>1000гр.</span>
            </div>
          </div>
        </div>
      </div>
      <AboutProduct />
    </div>
  );
};

export default Product;
