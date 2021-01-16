import { useState, useRef } from "react";
import styles from "./CategorySlider.module.css";
import ForwardArrow from "../components/svgs/ForwardArrow";
import BackwardArrow from "../components/svgs/BackwardArrow";
import classNames from "classnames";

const imgArr = [1, 2, 3, 4, 5, 6, 7];

import React from "react";

const ImageSlide = ({ i }: { i: any }) => {
  const [showShadow, setShowShadow] = useState(false);
  return (
    <a key={i} className={styles.imageWrapper}>
      <img
        onMouseEnter={() => setShowShadow(true)}
        onMouseLeave={() => setShowShadow(false)}
        className={classNames(styles.image, { [styles.shadow]: showShadow })}
        src={`/category-slider/${i}.jpg`}
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
      <div className={styles.imageTitle}>{i}</div>
    </a>
  );
};

const CategorySlider = () => {
  const [counter, setCounter] = useState(0);

  const style = { transform: `translateX(${-counter * 100}%)` };
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>КАТЕГОРИИ</h2>
      <div className={styles.slider}>
        <BackwardArrow
          width={24}
          initialColor="RGB(195,195,195,0.5)"
          hoverColor="RGB(195,195,195,0.7)"
          className={classNames(styles.backward, {
            [styles.arrowHidden]: counter < 1,
          })}
          onClick={() => {
            setCounter((count) => (count < 1 ? count : count - 1));
          }}
        />
        <ForwardArrow
          width={24}
          initialColor="RGB(195,195,195,0.5)"
          hoverColor="RGB(195,195,195,0.7)"
          onClick={() => {
            setCounter((count) => (count > 3 ? count : count + 1));
          }}
          className={classNames(styles.forward, {
            [styles.arrowHidden]: counter > 3,
          })}
        />

        <div className={styles.sliderWrapper} style={style}>
          {imgArr.map((i) => (
            <ImageSlide key={i} i={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySlider;
