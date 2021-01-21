import { useState, memo } from "react";
import PopupAccount from "./PopupAccount";
import PopupMenu from "./PopupMenu";
import PopupSearch from "./PopupSearch";
import NavTop from "../components/NavTop";
import NavMiddle from "../components/NavbarMiddle";
import NavBottom from "../components/NavBottom";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const [closeMenu, setCloseMenu] = useState(true);
  const [closeAccount, setCloseAccount] = useState(true);
  const [closeSearch, setCloseSearch] = useState(true);

  return (
    <>
      <PopupMenu
        close={closeMenu}
        handleClick={() => {
          setCloseMenu(true);
        }}
      />
      <PopupAccount
        close={closeAccount}
        handleClick={() => {
          setCloseAccount(true);
        }}
      />
      <PopupSearch
        close={closeSearch}
        handleCloseSearch={() => {
          setCloseSearch(true);
        }}
      />
      <header className={styles.header}>
        <NavTop
          setCloseSearch={setCloseSearch}
          setCloseMenu={setCloseMenu}
          setCloseAccount={setCloseAccount}
        />
        <NavMiddle />
        <NavBottom />
      </header>
    </>
  );
};

export default memo(Navbar);
