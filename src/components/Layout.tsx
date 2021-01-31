import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="main-wrapper">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
