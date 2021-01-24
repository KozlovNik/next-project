import Logo from "./Logo";
import SearchMobile from "./svgs/Search";
import ProfileImage from "../components/svgs/Profile";
import CartImage from "../components/svgs/Cart";
import classNames from "classnames";

import styles from "./NavTop.module.css";

interface NavTopProps {
  setCloseMenu: () => void;
  setCloseSearch: () => void;
  setCloseAccount: () => void;
}

const NavTop: React.FC<NavTopProps> = ({
  setCloseMenu,
  setCloseSearch,
  setCloseAccount,
}) => {
  return (
    <nav className={styles.navTop}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <span
            className={classNames([styles.leftItem], [styles.leftItemCity])}
          >
            Москва
          </span>
          <span
            className={classNames([styles.leftItem], [styles.leftItemMail])}
          >
            some-coffee@ya.ru
          </span>
          <span className={classNames([styles.leftItem, styles.leftItemPhone])}>
            8 (800) 333-49-80
          </span>
        </div>
        <div className={styles.right}>
          <span className={styles.rightItem}>Доставка</span>
          <span className={styles.rightItem}>Оплата</span>
          <span className={styles.rightItem}>Контакты</span>
        </div>
      </div>
      <nav className={styles.wrapperMobile}>
        <div className={styles.left}>
          <span className={styles.thumb} onClick={setCloseMenu}>
            <span className={styles.hr}></span>
            <span className={styles.hr}></span>
            <span className={styles.hr}></span>
          </span>
          <span>
            <Logo color="#fff" width={40} />
          </span>
        </div>
        <div>
          <a className={styles.link} onClick={setCloseSearch}>
            <SearchMobile initialColor="white" hoverColor="#787878" />
          </a>
          <a onClick={setCloseAccount} className={styles.link}>
            <ProfileImage initialColor="white" hoverColor="#787878" />
          </a>
          <a className={styles.link}>
            <CartImage initialColor="white" hoverColor="#787878" />
          </a>
        </div>
      </nav>
    </nav>
  );
};

export default NavTop;
