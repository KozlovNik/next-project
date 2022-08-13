import { useState } from "react";
import fetcher from "../lib/fetchJson";

import Button from "./Button";
import Rating from "./Rating";

import styles from "./AddFeedback.module.css";

interface AddFeedbackProps {
  name: string;
  id: number;
  addFeedback: (fb: any) => void;
  close?: () => void;
}

const AddFeedback: React.FC<AddFeedbackProps> = ({
  name,
  id,
  addFeedback,
  close,
}) => {
  const [values, setValues] = useState({});
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const feedback = await fetcher("/api/feedback", {
        method: "POST",
        body: JSON.stringify({ ...values, productId: id }),
      });
      addFeedback(feedback);
      close?.();
      // eslint-disable-next-line no-empty
    } catch {}
  };

  return (
    <form className={styles.popup} onSubmit={handleSubmit}>
      <div className={styles.header}>
        Ваш отзыв о товаре &quot;{`${name}`}&quot;
      </div>
      <Rating handleChange={handleChange} />
      <textarea
        onChange={handleChange}
        name="comment"
        className={styles.comment}
      />
      <Button>Оставить отзыв</Button>
    </form>
  );
};

export default AddFeedback;
