import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import fetchJson from "../lib/fetchJson";
import { SWRConfig } from "swr";
import { UserContext, UserContextTypes } from "../lib/userContext";

import styles from "./Layout.module.css";

interface LayoutProps {
  children: React.ReactNode;
  value?: UserContextTypes;
}

const Layout: React.FC<LayoutProps> = ({ children, value = {} }) => {
  return (
    <SWRConfig
      value={{
        fetcher: fetchJson,
      }}
    >
      <UserContext.Provider value={value}>
        <Navbar />
        <div className={styles.mainWrapper}>{children}</div>
        <Footer />
      </UserContext.Provider>
    </SWRConfig>
  );
};

export default Layout;
