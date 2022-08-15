import { SWRConfig } from "swr";
import { useState } from "react";
import fetchJson from "../lib/fetchJson";
import { UserContextTypes } from "../lib/userContext";
import { GetCategoriesTypes } from "../lib/dataFunctions";
import { CloseLoginContext } from "../lib/closeLoginContext";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Box } from "../shared/system/Box";

interface LayoutProps {
  children: React.ReactNode;
  user?: UserContextTypes;
  categories: GetCategoriesTypes;
}

const Layout: React.FC<LayoutProps> = ({ children, user = {} }) => {
  const [closeLogin, setCloseLogin] = useState(true);

  return (
    <SWRConfig
      value={{
        fetcher: fetchJson,
        fallback: {
          "/api/user": user,
        },
      }}
    >
      <Navbar />
      <CloseLoginContext.Provider value={{ closeLogin, setCloseLogin }}>
        <Box maxWidth="1200px" my="s" mx={{ _: "s", lg: "auto" }}>
          {children}
        </Box>
        <Footer />
      </CloseLoginContext.Provider>
    </SWRConfig>
  );
};

export default Layout;
