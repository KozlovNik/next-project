import fetchJson from "../lib/fetchJson";
import { SWRConfig } from "swr";
import { UserContext, UserContextTypes } from "../lib/userContext";
import { CategoriesContext } from "../lib/categoryContext";
import { useState } from "react";
import { getCategoriesTypes } from "../lib/dataFunctions";
import { CloseLoginContext } from "../lib/closeLoginContext";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import styles from "./Layout.module.css";

interface LayoutProps {
  children: React.ReactNode;
  user?: UserContextTypes;
  categories: getCategoriesTypes;
}

const Layout: React.FC<LayoutProps> = ({ children, user = {}, categories }) => {
  const [closeLogin, setCloseLogin] = useState(true);

  return (
    <SWRConfig
      value={{
        fetcher: fetchJson,
      }}
    >
      <UserContext.Provider value={user}>
        <CategoriesContext.Provider value={categories}>
          <CloseLoginContext.Provider value={{ closeLogin, setCloseLogin }}>
            <Navbar />
            <div className={styles.mainWrapper}>{children}</div>
            <Footer />
          </CloseLoginContext.Provider>
        </CategoriesContext.Provider>
      </UserContext.Provider>
    </SWRConfig>
  );
};

export default Layout;
