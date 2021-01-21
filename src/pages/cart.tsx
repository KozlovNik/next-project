import Button from "../components/Button";
import ProductCardMini from "../components/ProductCardMini";
import styles from "../styles/Cart.module.css";

const Cart = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.items}>
        <h1 className={styles.heading}>КОРЗИНА</h1>
        <ProductCardMini />
        <ProductCardMini />
        <ProductCardMini />
        <ProductCardMini />
        <ProductCardMini />
        <ProductCardMini />
        <ProductCardMini />
      </div>
      <div className={styles.order}>
        <div className={styles.heading}>ОФОРМЛЕНИЕ ЗАКАЗА</div>
        <form className={styles.form}>
          <div className={styles.block}>
            <div className={styles.sub}>ПОКУПАТЕЛЬ</div>
            <label className={styles.label}>
              <div className={styles.labelText}>
                Номер телефона <span className={styles.star}>*</span>
              </div>
              <input type="text" className={styles.input} />
            </label>
            <label className={styles.label}>
              <div className={styles.labelText}>
                Email <span className={styles.star}>*</span>
              </div>
              <input type="text" className={styles.input} />
            </label>
            <label className={styles.label}>
              <div className={styles.labelText}>
                Фамилия <span className={styles.star}>*</span>
              </div>
              <input type="text" className={styles.input} />
            </label>
            <label className={styles.label}>
              <div className={styles.labelText}>
                Имя <span className={styles.star}>*</span>
              </div>
              <input type="text" className={styles.input} />
            </label>
          </div>
          <div className={styles.hl} />
          <div className={styles.block}>
            <div className={styles.sub}>ПОЛУЧАТЕЛЬ</div>
            <div className={styles.para}>
              Добавьте получателя, если вы покупаете не для себя, или хотите,
              чтобы товар забрал другой человек.
            </div>
            <div className={styles.radioWrapper}>
              <label className={styles.radioLabel}>
                <input type="radio" name="receiver" value="лично" /> Я
                получатель
              </label>
              <label className={styles.radioLabel}>
                <input type="radio" name="receiver" value="другой человек" />{" "}
                Указать получателя
              </label>
            </div>
            <label className={styles.label}>
              <div className={styles.labelText}>
                Номер телефона <span className={styles.star}>*</span>
              </div>
              <input type="text" className={styles.input} />
            </label>
            <div className={styles.empty} />
            <label className={styles.label}>
              <div className={styles.labelText}>
                Фамилия <span className={styles.star}>*</span>
              </div>
              <input type="text" className={styles.input} />
            </label>
            <label className={styles.label}>
              <div className={styles.labelText}>
                Имя <span className={styles.star}>*</span>
              </div>
              <input type="text" className={styles.input} />
            </label>
          </div>
          <div className={styles.hl} />
          <div className={styles.block}>
            <div className={styles.sub}>ДОСТАВКА</div>
            <div className={styles.radioWrapper}>
              <label className={styles.radioLabel}>
                <input type="radio" name="delivery" value="самовывоз" />{" "}
                Самовывоз
              </label>
              <label className={styles.radioLabel}>
                <input type="radio" name="delivery" value="курьер" /> Курьер
              </label>
            </div>
            <label className={styles.label}>
              <input
                type="text"
                className={styles.input}
                placeholder="Адрес, дом, корпус"
              />
            </label>
            <div className={styles.empty} />
            <label className={styles.label}>
              <input
                type="text"
                className={styles.input}
                placeholder="Квартира / офис"
              />
            </label>
            <div className={styles.empty} />
            <label className={styles.label}>
              <input className={styles.input} />
            </label>
            <div className={styles.empty} />
          </div>
          <div className={styles.block}>
            <div className={styles.sub}>ОПЛАТА</div>
            <div className={styles.radioWrapper}>
              <label className={styles.radioLabel}>
                <input type="radio" name="payment" value="карта" />{" "}
                Онлайн-оплата картой
              </label>
              <label className={styles.radioLabel}>
                <input type="radio" name="payment" value="наличные" /> При
                получении
              </label>
            </div>
          </div>
          <div className={styles.hl} />
          <div className={styles.block}>
            <div className={styles.sub}>ЗАВЕРШЕНИЕ ЗАКАЗА</div>
            <label className={styles.textAreaLabel}>
              <input className={styles.textarea} type="text" />
            </label>
            <div className={styles.total}>Итого: 5034 руб.</div>
          </div>
          <Button className={styles.button}>Перейти к оплате </Button>
        </form>
      </div>
    </div>
  );
};

export default Cart;
