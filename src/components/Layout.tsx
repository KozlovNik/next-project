import { SWRConfig } from "swr";
import { useState } from "react";
import fetchJson from "../lib/fetchJson";
import { UserContext, UserContextTypes } from "../lib/userContext";
import { CategoriesContext } from "../lib/categoryContext";
import { GetCategoriesTypes } from "../lib/dataFunctions";
import { CloseLoginContext } from "../lib/closeLoginContext";
import Footer from "./Footer";
import Navbar from "./Navbar";
import styles from "./Layout.module.css";

interface LayoutProps {
  children: React.ReactNode;
  user?: UserContextTypes;
  categories: GetCategoriesTypes;
}

const Layout: React.FC<LayoutProps> = ({ children, user = {}, categories }) => {
  const [closeLogin, setCloseLogin] = useState(true);

  return (
    <SWRConfig
      value={{
        fetcher: fetchJson,
      }}
    >
      <Navbar />
      <UserContext.Provider value={user}>
        <CategoriesContext.Provider value={categories}>
          <CloseLoginContext.Provider value={{ closeLogin, setCloseLogin }}>
            <div className={styles.mainWrapper}>{children}</div>
            <Footer />
          </CloseLoginContext.Provider>
        </CategoriesContext.Provider>
      </UserContext.Provider>
    </SWRConfig>
  );
};

export default Layout;
