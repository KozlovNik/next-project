/* eslint-disable react/no-array-index-key */
import { useState } from "react";

import Star from "./svgs/Star";

import styles from "./Rating.module.css";

interface RatingProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Rating: React.FC<RatingProps> = ({ handleChange }) => {
  const [rating, setRating] = useState<number | null>(null);
  const [hover, setHover] = useState<number | null>(null);

  return (
    <div className={styles.rating}>
      {[...Array(5)].map((_, i) => {
        const ratingValue = i + 1;
        const color =
          (hover || rating || 0) < ratingValue
            ? "#c4c4c4"
            : "rgb(220, 224, 27)";
        return (
          <label
            key={i}
            onMouseEnter={() => setHover(i + 1)}
            onMouseLeave={() => setHover(null)}
          >
            <input
              className={styles.input}
              onChange={(e) => {
                setRating(Number(e.target.value));
                handleChange(e);
              }}
              type="radio"
              name="rating"
              value={i + 1}
            />
            <Star color={color} className={styles.star} />
          </label>
        );
      })}
    </div>
  );
};

export default Rating;
