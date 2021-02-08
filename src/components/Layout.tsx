import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import fetchJson from "../lib/fetchJson";
import { SWRConfig } from "swr";
import { UserContext, UserContextTypes } from "../lib/userContext";
import {
  CategoriesContextType,
  CategoriesContext,
} from "../lib/categoryContext";

import styles from "./Layout.module.css";

interface LayoutProps {
  children: React.ReactNode;
  user?: UserContextTypes;
  categories: CategoriesContextType;
}

const Layout: React.FC<LayoutProps> = ({ children, user = {}, categories }) => {
  return (
    <SWRConfig
      value={{
        fetcher: fetchJson,
      }}
    >
      <UserContext.Provider value={user}>
        <CategoriesContext.Provider value={categories}>
          <Navbar />
          <div className={styles.mainWrapper}>{children}</div>
          <Footer />
        </CategoriesContext.Provider>
      </UserContext.Provider>
    </SWRConfig>
  );
};

export default Layout;
