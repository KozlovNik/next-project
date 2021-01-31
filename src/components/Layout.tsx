import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

interface LayoutProps {
  children: React.ReactNode;
  value?: {
    id: number;
    firstName: string;
    isLogged: boolean;
  };
}

export const UserContext = React.createContext<LayoutProps["value"]>(undefined);

const Layout: React.FC<LayoutProps> = ({ children, value }) => {
  console.log()
  return (
    <UserContext.Provider value={value}>
      <Navbar />
      <div className="main-wrapper">{children}</div>
      <Footer />
    </UserContext.Provider>
  );
};

export default Layout;
