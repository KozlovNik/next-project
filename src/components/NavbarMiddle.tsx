import { memo, useState } from "react";
import { useRouter } from "next/router";
import useUser from "../hooks/useUser";
import Link from "next/link";

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
  const { logout, user } = useUser();

  const [query, setQuery] = useState("");

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuery("");
    router.push(`/search?text=${query}`);
  };

  return (
    <nav className={styles.navMiddle}>
      <div className={styles.wrapper}>
        <form className={styles.search} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            placeholder="Поиск по товарам"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className={styles.button} type="submit">
            <Search initialColor="#fff" hoverColor="#fff" width={15} />
          </button>
        </form>
        <div className={styles.logoWrapper}>
          <Logo color="#4F4E4E" />
        </div>
        <div className="user-block">
          {user && user.isLogged && (
            <>
              <span className={styles.username}>{user.firstName}</span>
              <a
                onClick={async () => {
                  await logout();
                  router.push("/");
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

          {user && user.isLogged ? (
            <Link href="/favorites">
              <a className={styles.link}>
                <BlackHeart />
              </a>
            </Link>
          ) : (
            <a onClick={setCloseLogin} className={styles.link}>
              <BlackHeart />
            </a>
          )}

          <Link href="/cart">
            <a className={styles.link}>
              <CartImage />
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default memo(NavbarMiddle);
