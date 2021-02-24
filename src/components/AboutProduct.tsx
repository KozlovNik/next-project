import React, { useRef } from "react";
import classNames from "classnames";
import { useState } from "react";
import { Popup } from "reactjs-popup";

import Button from "./Button";
import Stars from "./Stars";
import AddFeedback from "./AddFeedback";

import styles from "./AboutProduct.module.css";

interface AboutProduct {
  info: string;
  feedback: {
    comment: string;
    rating: number;
    user: {
      firstName: string;
      lastName: string;
    };
    dateCreated: Date;
  }[];
  name: string;
  id: number;
}

const AboutProduct: React.FC<AboutProduct> = ({ info, feedback, name, id }) => {
  const [tab, setTab] = useState<"about" | "feedback">("about");
  const [data, setData] = useState(feedback);

  const ref = useRef<any>(null);

  let close;
  if (ref) {
    close = () => ref.current.close();
  }

  const addFeedback = (fb: any) => {
    setData([fb, ...data]);
  };
  return (
    <div className={styles.wrapper} id="feedback">
      <span
        onClick={() => setTab("about")}
        className={classNames(styles.tabLabel, {
          [styles.active]: tab === "about",
        })}
      >
        О товаре
      </span>
      <span
        onClick={() => setTab("feedback")}
        className={classNames(styles.tabLabel, {
          [styles.active]: tab === "feedback",
        })}
      >
        Отзывы
      </span>
      <div className={styles.tab}>
        <div className={styles.tabWrapper}>
          {tab === "about" ? (
            <>
              <div
                dangerouslySetInnerHTML={{
                  __html: info,
                }}
              ></div>
            </>
          ) : (
            <div className={styles.feedback}>
              <span className={styles.title}>Отзывы</span>
              <Popup
                trigger={
                  <span>
                    <Button>Добавить отзыв</Button>
                  </span>
                }
                className="pop"
                position="bottom right"
                closeOnDocumentClick
                ref={ref}
              >
                <AddFeedback
                  close={close}
                  addFeedback={addFeedback}
                  name={name}
                  id={id}
                />
              </Popup>

              {data && data.length > 0 ? (
                <>
                  {data.map(({ comment, user, dateCreated, rating }, id) => (
                    <React.Fragment key={id}>
                      <div className={styles.name}>
                        {user.lastName} {user.firstName}
                      </div>
                      <div className={styles.date}>
                        {new Date(dateCreated).toLocaleDateString()}
                      </div>
                      <Stars rating={rating} />
                      <div className={styles.message}>{comment}</div>
                    </React.Fragment>
                  ))}
                </>
              ) : (
                <div className={styles.noFeedback}>Нет отзывов</div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutProduct;
