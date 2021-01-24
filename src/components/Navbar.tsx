import { useState, memo, useEffect } from "react";
import PopupAccount from "./PopupAccount";
import PopupMenu from "./PopupMenu";
import PopupSearch from "./PopupSearch";
import NavTop from "../components/NavTop";
import NavMiddle from "../components/NavbarMiddle";
import NavBottom from "../components/NavBottom";
import PopupLogin from "../components/PopupLogin";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const [closeMenu, setCloseMenu] = useState(true);
  const [closeAccount, setCloseAccount] = useState(true);
  const [closeSearch, setCloseSearch] = useState(true);
  const [closeLogin, setCloseLogin] = useState(true);

  useEffect(() => {
    const body = document.body
    if (!closeLogin) {
      body?.classList.add("body-overflow");
    } else {
      body?.classList.remove("body-overflow");
    }
  }, [closeLogin]);

  return (
    <>
      <PopupLogin close={closeLogin} handleClick={() => setCloseLogin(true)} />
      <PopupMenu close={closeMenu} handleClick={() => setCloseMenu(true)} />
      <PopupAccount
        close={closeAccount}
        handleClick={() => setCloseAccount(true)}
        setCloseLogin={() => setCloseLogin(false)}
      />
      <PopupSearch
        close={closeSearch}
        handleCloseSearch={() => {
          setCloseSearch(true);
        }}
      />
      <header className={styles.header}>
        <NavTop
          setCloseSearch={() => setCloseSearch(false)}
          setCloseMenu={() => setCloseMenu(false)}
          setCloseAccount={() => setCloseAccount(false)}
        />
        <NavMiddle setCloseLogin={() => setCloseLogin(false)} />
        <NavBottom />
      </header>
    </>
  );
};

export default memo(Navbar);
