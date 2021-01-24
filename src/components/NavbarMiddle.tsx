import { memo } from "react";

import Logo from "./Logo";
import ProfileImage from "../components/svgs/Profile";
import CartImage from "../components/svgs/Cart";
import Search from "../components/svgs/Search";
import BlackHeart from "../components/svgs/BlackHeart";

import styles from "./NavbarMiddle.module.css";

interface NavbarMiddleProps {
  setCloseLogin: () => void;
}

const NavbarMiddle: React.FC<NavbarMiddleProps> = ({ setCloseLogin }) => {
  return (
    <nav className={styles.navMiddle}>
      <div className={styles.wrapper}>
        <div className={styles.search}>
          <input className={styles.input} placeholder="Поиск по товарам" />
          <button className={styles.button}>
            <Search initialColor="#fff" hoverColor="#fff" width={15} />
          </button>
        </div>
        <Logo color="#4F4E4E" />
        <div className="user-block">
          <a onClick={setCloseLogin} className={styles.link}>
            <ProfileImage />
          </a>
          <a className={styles.link}>
            <BlackHeart />
          </a>
          <a className={styles.link}>
            <CartImage />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default memo(NavbarMiddle);
