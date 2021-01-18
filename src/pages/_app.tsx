import { useState } from "react";
import Logo from "../components/Logo";
import ProfileImage from "../components/svgs/Profile";
import CartImage from "../components/svgs/Cart";
import BlackHeartImage from "../components/svgs/BlackHeart";
import Search from "../components/svgs/Search";
import MenuPopup from "../components/MenuPopup";
import { navList, companyInfoList, storeList } from "../constants";
import SearchImage from "../components/svgs/Search";
import AccountPopup from "../components/AccountPopup";
import SearchPopup from "../components/SearchPopup";
import FooterNav from "../components/FooterNav";
import Fb from "../components/svgs/Fb";
import Vk from "../components/svgs/Vk";
import Insta from "../components/svgs/Insta";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
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
      <header className="header">
        <nav className="nav-upper">
          <div className="nav-upper__wrapper">
            <div>
              <span className="nav-upper__left-item nav-upper__left-item--city">
                Москва
              </span>
              <span className="nav-upper__left-item nav-upper__left-item--mail">
                some-coffee@ya.ru
              </span>
              <span className="nav-upper__left-item nav-upper__left-item--phone">
                8 (800) 333-49-80
              </span>
            </div>
            <div className="nav-upper-right">
              <span className="nav-upper__right-item">Доставка</span>
              <span className="nav-upper__right-item">Оплата</span>
              <span className="nav-upper__right-item">Контакты</span>
            </div>
          </div>
          <nav className="nav-upper__wrapper-mobile">
            <div className="nav-upper_left-block">
              <span
                className="thumb__wrapper"
                onClick={() => setCloseMenu(false)}
              >
                <span className="thumb__hr"></span>
                <span className="thumb__hr"></span>
                <span className="thumb__hr"></span>
              </span>
              <span>
                <Logo color="white" width={40} />
              </span>
            </div>
            <div>
              <a
                className="user-block__link"
                onClick={() => setCloseSearch(false)}
              >
                <Search initialColor="white" hoverColor="#787878" />
              </a>
              <a
                onClick={() => setCloseAccount(false)}
                className="user-block__link"
              >
                <ProfileImage initialColor="white" hoverColor="#787878" />
              </a>
              <a className="user-block__link">
                <CartImage initialColor="white" hoverColor="#787878" />
              </a>
            </div>
          </nav>
        </nav>
        <nav className="nav-middle">
          <div className="nav-wrapper">
            <div className="search">
              <input className="search__input" placeholder="Поиск по товарам" />
              <button className="search__button">
                <SearchImage
                  initialColor="white"
                  hoverColor="white"
                  width={15}
                />
              </button>
            </div>
            <Logo color="#4F4E4E" />
            <div className="user-block">
              <a className="user-block__link">
                <ProfileImage />
              </a>
              <a className="user-block__link">
                <BlackHeartImage />
              </a>
              <a className="user-block__link">
                <CartImage />
              </a>
            </div>
          </div>
        </nav>
        <nav className="nav-lower">
          <ul className="nav-lower__list">
            {navList.map((text) => (
              <li key={text} className="nav-lower__item">
                <a className="nav-lower__link" data-text={text}>
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;