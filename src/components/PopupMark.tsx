import { FormEvent, useRef, useState } from "react";
import Popup from "reactjs-popup";

import { Button } from "../shared/ui/Button";
import Pen from "./svgs/Pen";

import styles from "./PopupMark.module.css";

interface PopupMarkPropTypes {
  mark: string;
  updateFavorite: (productId: number, mark: string) => Promise<void>;
  id: number;
}

const PopupMark: React.FC<PopupMarkPropTypes> = ({
  mark,
  updateFavorite,
  id,
}) => {
  const [text, setText] = useState(mark);
  const ref = useRef<any>();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    updateFavorite(id, text);

    ref?.current.close();
  };

  return (
    <Popup
      trigger={
        <span>
          <Pen initialColor="#607399" hoverColor="#607399" />
          Ваша пометка
        </span>
      }
      className="mark"
      position="bottom left"
      closeOnDocumentClick
      ref={ref}
    >
      <form onSubmit={handleSubmit}>
        <textarea
          name="mark"
          onChange={(e) => setText(e.target.value)}
          className={styles.mark}
          value={text}
        />
        <Button type="submit">Сохранить</Button>
      </form>
    </Popup>
  );
};

export default PopupMark;
