import { useState, memo } from "react";
import AccountPopup from "./AccountPopup";
import MenuPopup from "./MenuPopup";
import SearchPopup from "./SearchPopup";
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
      <MenuPopup
        close={closeMenu}
        handleClick={() => {
          setCloseMenu(true);
        }}
      />
      <AccountPopup
        close={closeAccount}
        handleClick={() => {
          setCloseAccount(true);
        }}
      />
      <SearchPopup
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
