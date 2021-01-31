import { memo, useContext } from "react";
import { UserContext } from "./Layout";
import fetchJson from "../lib/fetchJson";
import useSWR from "swr";

import Logo from "./Logo";
import ProfileImage from "./svgs/Profile";
import LogoutImage from "./svgs/Logout";
import CartImage from "./svgs/Cart";
import Search from "./svgs/Search";
import BlackHeart from "./svgs/BlackHeart";

import styles from "./NavbarMiddle.module.css";

interface NavbarMiddleProps {
  setCloseLogin: () => void;
}

const NavbarMiddle: React.FC<NavbarMiddleProps> = ({ setCloseLogin }) => {
  const contextUser = useContext(UserContext);
  const { data: user, mutate: mutateUser } = useSWR("/api/user", fetchJson, {
    initialData: contextUser,
  });

  return (
    <nav className={styles.navMiddle}>
      <div className={styles.wrapper}>
        <div className={styles.search}>
          <input className={styles.input} placeholder="Поиск по товарам" />
          <button className={styles.button}>
            <Search initialColor="#fff" hoverColor="#fff" width={15} />
          </button>
        </div>
        <div className={styles.logoWrapper}>
          <Logo color="#4F4E4E" />
        </div>
        <div className="user-block">
          {user && user.isLogged && (
            <>
              <span className={styles.username}>{user.firstName}</span>
              <a
                onClick={() => {
                  mutateUser(fetchJson("/api/logout", { method: "post" }));
                }}
                className={styles.link}
              >
                <LogoutImage />
              </a>
            </>
          )}
          {(!user || !user.isLogged) && (
            <>
              <span className={styles.empty} />
              <a onClick={setCloseLogin} className={styles.link}>
                <ProfileImage />
              </a>
            </>
          )}

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
