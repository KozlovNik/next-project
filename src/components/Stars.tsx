/* eslint-disable react/no-array-index-key */
import Star from "./svgs/Star";

import styles from "./Stars.module.css";

interface StarsProps {
  rating?: number | null;
}

const Stars: React.FC<StarsProps> = ({ rating }) => {
  const stars = [...Array(5)].map((_, i) => {
    const color = !rating || i > rating - 1 ? "#C4C4C4" : "#DCE01B";
    return <Star key={i} color={color} className={styles.star} />;
  });

  return <span>{stars}</span>;
};

export default Stars;
