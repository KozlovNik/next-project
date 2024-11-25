import React, { useContext, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { Popup } from "reactjs-popup";

import { CloseLoginContext } from "../lib/closeLoginContext";
import { UserContextTypes } from "../lib/userContext";
import { Button } from "../shared/ui/Button";
import Stars from "./Stars";
import AddFeedback from "./AddFeedback";

import styles from "./AboutProduct.module.css";

interface AboutProductProps {
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setFeedback: any;
  user: UserContextTypes;
}

const AboutProduct: React.FC<AboutProductProps> = ({
  info,
  feedback,
  setFeedback,
  name,
  id,
  user,
}) => {
  const [tab, setTab] = useState<"about" | "feedback">("about");

  const { setCloseLogin } = useContext(CloseLoginContext);
  const [hasPost, setHasPost] = useState<boolean>(true);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);

  useEffect(() => {
    async function userHasPost() {
      const res = await fetch(`/api/feedback?productId=${id}`, {
        method: "HEAD",
      });
      if (res.ok) {
        setHasPost(true);
      } else {
        setHasPost(false);
      }
    }

    userHasPost();
  }, [feedback, hasPost]);

  let close;
  if (ref) {
    close = () => ref.current.close();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const addFeedback = (fb: any) => {
    setFeedback([fb, ...feedback]);
    setHasPost(true);
  };

  let button;
  if (hasPost) {
    button = null;
  } else {
    button = (
      <Button onClick={() => setCloseLogin(false)}>Добавить отзыв</Button>
    );
  }
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
            <div
              dangerouslySetInnerHTML={{
                __html: info,
              }}
            />
          ) : (
            <div className={styles.feedback}>
              <span className={styles.title}>Отзывы</span>
              {user && user.isLogged && !hasPost ? (
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
              ) : (
                button
              )}

              {feedback && feedback.length > 0 ? (
                <>
                  {feedback.map(
                    ({ comment, user, dateCreated, rating }, idx) => (
                      <React.Fragment key={idx}>
                        <div className={styles.name}>
                          {user.lastName} {user.firstName}
                        </div>
                        <div className={styles.date}>
                          {new Date(dateCreated).toLocaleDateString()}
                        </div>
                        <Stars rating={rating} />
                        <div className={styles.message}>{comment}</div>
                      </React.Fragment>
                    ),
                  )}
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
