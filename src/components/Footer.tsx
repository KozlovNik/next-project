import { navList, companyInfoList, storeList } from "../constants";
import FooterNav from "./FooterNav";
import Logo from "./Logo";
import Fb from "./svgs/Fb";
import Insta from "./svgs/Insta";
import Vk from "./svgs/Vk";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.mainContent}>
          <div className={styles.icons}>
            <Logo />
            <div className={styles.socials}>
              <p className={styles.label}>СОЦИАЛЬНЫЕ СЕТИ:</p>
              <Vk
                initialColor="white"
                hoverColor="#D66565"
                className={styles.social}
              />
              <Fb
                initialColor="white"
                hoverColor="#D66565"
                className={styles.social}
              />
              <Insta
                initialColor="white"
                hoverColor="#D66565"
                className={styles.social}
              />
            </div>
          </div>
          <div className={styles.contacts}>
            <p className={styles.contact}>8 (800) 333-49-80</p>
            <p className={styles.contact}>shop@tastycoffee.ru</p>
          </div>

          <FooterNav items={navList} heading="Каталог товаров" />
          <FooterNav items={companyInfoList} heading="Компания" />
          <FooterNav items={storeList} heading="Интернет-магазин" />
        </div>
        <img className={styles.payment} src="/payment.png" />
        <p className={styles.companyName}>© 2021 SOME COFFEE</p>
      </div>
    </footer>
  );
};

export default Footer;
