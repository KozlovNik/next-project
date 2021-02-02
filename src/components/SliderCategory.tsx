import { useState, memo, useContext } from "react";

import classNames from "classnames";

import ForwardArrow from "./svgs/ForwardArrow";
import BackwardArrow from "./svgs/BackwardArrow";
import WithSliderHandlers, { SliderProps } from "./hocs/WithSliderHandlers";
import TitleBlock from "./TitleBlock";

import styles from "./SliderCategory.module.css";

import { CategoriesContext } from "../lib/categoryContext";

interface ImageSlideProps {
  slug: string;
  name: string;
}

const ImageSlide: React.FC<ImageSlideProps> = memo(({ name, slug }) => {
  const [showShadow, setShowShadow] = useState(false);
  return (
    <a className={styles.imageWrapper}>
      <img
        onMouseEnter={() => setShowShadow(true)}
        onMouseLeave={() => setShowShadow(false)}
        className={classNames(styles.image, { [styles.shadow]: showShadow })}
        src={`/category-slider/${slug}.jpg`}
      />
      <div
        className={styles.hl}
        onMouseEnter={() => setShowShadow(true)}
        onMouseLeave={() => setShowShadow(false)}
      />
      <div
        className={styles.vl}
        onMouseEnter={() => setShowShadow(true)}
        onMouseLeave={() => setShowShadow(false)}
      />
      <div className={styles.imageTitle}>{name}</div>
    </a>
  );
});

const SliderCategory: React.FC<SliderProps> = ({
  style,
  counter,
  goBackward,
  goForward,
}) => {
  const categories = useContext(CategoriesContext);
  
  return (
    <div className={styles.wrapper}>
      <TitleBlock title="КАТЕГОРИИ" />
      <div className={styles.slider}>
        <BackwardArrow
          width={24}
          initialColor="RGB(195,195,195,0.5)"
          hoverColor="RGB(195,195,195,0.7)"
          className={classNames(styles.backward, {
            [styles.arrowHidden]: counter < 1,
          })}
          onClick={goBackward}
        />
        <ForwardArrow
          width={24}
          initialColor="RGB(195,195,195,0.5)"
          hoverColor="RGB(195,195,195,0.7)"
          onClick={goForward}
          className={classNames(styles.forward, {
            [styles.arrowHidden]: counter > 3,
          })}
        />

        <div className={styles.WithSliderHandlers} style={style}>
          {categories &&
            categories.map(({ name, slug }) => (
              <ImageSlide key={slug} name={name} slug={slug} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default WithSliderHandlers(SliderCategory);
