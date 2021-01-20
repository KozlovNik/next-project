import classNames from "classnames";
import { useState } from "react";
import styles from "./AboutProduct.module.css";
import Button from "./Button";
import Stars from "./Stars";

const AboutProduct = () => {
  const [tab, setTab] = useState<"about" | "feedback">("about");
  return (
    <div className={styles.wrapper}>
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
            <div className={styles.aboutTab}>
              Saquella Bar Italia 100% Arabica исключительная смесь из лучших
              сортов кофе Арабика из Центральной Америки (Гватемала как основа,
              а также Колумбия, Бразилия и Гондурас). Эти виды кофе выращиваются
              на высокогорных плантациях с их богатой, насыщенной вулканическим
              пеплом, почвой. В Гватемале до сих пор выращивается старая
              арабика, которая отличается от современных сортов глубиной и
              насыщенностью вкуса. Собирается вручную. Уникальные глубокие,
              многогранные вкусовые и ароматические характеристики. Желтая
              упаковка - новый дизайн 2019 года.
            </div>
          ) : (
            <div className={styles.feedback}>
              <span className={styles.title}>Отзывы</span>
              <Button>Добавить отзыв</Button>
              <div className={styles.name}>Иванов Иван</div>
              <div className={styles.date}>21.01.2021</div>
              <Stars />
              <div className={styles.message}>
                Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
                сгенерировать несколько абзацев более менее осмысленного текста
                рыбы на русском языке, а начинающему оратору отточить навык
                публичных выступлений в домашних условиях. При создании
                генератора мы использовали небезизвестный универсальный код
                речей. Текст генерируется абзацами случайным образом от двух до
                десяти предложений в абзаце, что позволяет сделать текст более
                привлекательным и живым для визуально-слухового восприятия.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutProduct;
