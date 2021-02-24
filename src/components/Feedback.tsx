import { totalRating } from "../lib/utilFunctions";
import { useRouter } from "next/router";

import Stars from "./Stars";
import SplitPane from "./SplitPane";

interface FeedbackProps {
  feedback: {
    comment: string;
    rating: number;
    user: {
      firstName: string;
      lastName: string;
    };
    dateCreated: Date;
  }[];
  slug?: string;
}

const Feedback: React.FC<FeedbackProps> = ({ feedback, slug }) => {
  const rating = totalRating(feedback);
  const router = useRouter();
  let label;
  if (!feedback || feedback.length === 0) {
    label = "Нет отзывов";
  } else if (feedback.length === 1) {
    label = "1 Отзыв";
  } else {
    label = `${feedback.length} Отзыва`;
  }
  return (
    <SplitPane
      handleClick={
        rating
          ? () => {
              router.push(`/products/${slug}#feedback`);
            }
          : undefined
      }
      label={label}
      icon={<Stars rating={rating} />}
    />
  );
};

export default Feedback;
