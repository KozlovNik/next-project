import useFavoritesReducer from "../hooks/useFavoritesReducer";
import { getFavoritesTypes } from "../lib/dataFunctions";
import classNames from "classnames";

import PopupMark from "./PopupMark";
import Basket from "./svgs/Basket";
import CartMini from "./svgs/CartMini";
import Popup from "reactjs-popup";

import styles from "./Favorites.module.css";

interface FavoritesProps {
  favorites: getFavoritesTypes;
}

const Favorites: React.FC<FavoritesProps> = ({ favorites }) => {
  const { favoriteItems, deleteFavorite, updateFavorite } = useFavoritesReducer(
    favorites
  );
  return favoriteItems.length > 0 ? (
    <div>
      <h1 className="heading">ВАШИ ЗАКЛАДКИ</h1>
      <div className={styles.para}>
        Товаров в закладках: {favoriteItems.length}
      </div>
      <div className={styles.wrapper}>
        <div className={styles.tableHeading}>
          <div className={styles.hCell}>Название товара</div>
          <div className={styles.hCell}>Цена</div>
          <div className={styles.hCell}>Комментарий</div>
          <div className={styles.hCell}>Добавить в корзину/удалить</div>
        </div>
        {favoriteItems.map(({ mark, product: { id, name, slug, price } }) => (
          <div className={styles.row} key={id}>
            <Popup
              trigger={
                <div className={classNames(styles.cell, styles.name)}>
                  {name}
                </div>
              }
              className="image"
              position="top left"
              closeOnDocumentClick
              on="hover"
              arrow={false}
            >
              <img className={styles.image} src={`/products/${slug}.jpg`} />
            </Popup>

            <div className={styles.cell}>{price}р.</div>
            <div className={classNames(styles.cell, styles.name)}>
              <PopupMark mark={mark} updateFavorite={updateFavorite} id={id} />
            </div>
            <div className={styles.cell}>
              <CartMini className={styles.img} />
              <Basket
                onClick={() => deleteFavorite(id)}
                className={styles.img}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="heading">ТУТ ПОКА ПУСТО</div>
  );
};

export default Favorites;
