import { useState } from "react";
import Star from "./svgs/Star";

import styles from "./Stars.module.css";

const Stars = () => {
  const [rating] = useState(2);

  const stars = [...Array(5)].map((_, i) => {
    const color = i > rating ? "#C4C4C4" : "#DCE01B";
    return (
      <Star
        key={i}
        initialColor={color}
        hoverColor={color}
        className={styles.star}
      />
    );
  });

  return <span>{stars}</span>;
};

export default Stars;
