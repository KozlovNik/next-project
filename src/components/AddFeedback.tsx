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
    setValues((values) => ({ ...values, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log(values, id)
      const feedback = await fetcher("/api/feedback", {
        method: "POST",
        body: JSON.stringify({ ...values, productId: id }),
      });
      addFeedback(feedback);
      close && close();
    } catch {}
  };

  return (
    <form className={styles.popup} onSubmit={handleSubmit}>
      <div className={styles.header}>Ваш отзыв о товаре "{`${name}`}"</div>
      <Rating handleChange={handleChange} />
      <textarea
        onChange={handleChange}
        name="comment"
        className={styles.comment}
      />
      <Button style={{ width: "100%" }}>Оставить отзыв</Button>
    </form>
  );
};

export default AddFeedback;
