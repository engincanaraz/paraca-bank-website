import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";

/**
 * Ana sayfa düzenini oluşturan bileşen
 * Header ve Footer bileşenlerini içerir
 * @param {Object} props - Bileşen özellikleri
 * @returns {JSX.Element} - MainLayout bileşeni
 */
const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
