import { useState, memo } from "react";

import PopupAccount from "./PopupAccount";
import PopupMenu from "./PopupMenu";
import PopupSearch from "./PopupSearch";
import NavTop from "./NavTop";
import NavMiddle from "./NavbarMiddle";
import NavBottom from "./NavBottom";
import PopupLogin from "./PopupLogin";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const [closeMenu, setCloseMenu] = useState(true);
  const [closeAccount, setCloseAccount] = useState(true);
  const [closeSearch, setCloseSearch] = useState(true);
  const [, setIsOpen] = useState(false);

  return (
    <>
      <PopupLogin isOpen onDismiss={() => setIsOpen(false)} />
      <PopupMenu close={closeMenu} handleClick={() => setCloseMenu(true)} />
      <PopupAccount
        close={closeAccount}
        handleClick={() => setIsOpen(true)}
        setCloseLogin={() => setIsOpen(false)}
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
        <NavMiddle setCloseLogin={() => setIsOpen(true)} />
        <NavBottom />
      </header>
    </>
  );
};

export default memo(Navbar);
