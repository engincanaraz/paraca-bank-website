import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/images/logos/Logo.png";
import plus from "../../assets/images/icons/plus.png";
import Button from "../ui/Button";

/**
 * Site üst menüsü (Header) bileşeni
 * @returns {JSX.Element} Header bileşeni
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Menü linkleri - merkezi hale getirme
  const menuLinks = [
    { to: "/urunler", label: "Ürünler" },
    { to: "/islemler", label: "İşlemler" },
    { to: "/ucretlendirme", label: "Ücretlendirme" },
    { to: "/blog", label: "Blog" },
  ];

  return (
    <header className="bg-black shadow-sm sticky top-0 z-50">
      {/* Desktop Header */}
      <div className="hidden lg:flex container justify-between items-center">
        <div className="flex items-center gap-12">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Paraca" className="h-[76px]" />
          </Link>
          <nav>
            <ul className="flex items-center gap-6 text-white text-lg">
              {menuLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:opacity-80">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Button
            to="/signin"
            variant="outline"
            className="text-white bg-[#9C9C9C] text-[14px]">
            Sign in
          </Button>
          <Button
            to="/signup"
            variant="primary"
            className="flex items-center gap-2 text-[14px]">
            Sign up for free
            <img src={plus} alt="plus" className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden container px-4 py-2 flex justify-between items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="btn btn-circle btn-ghost bg-white/30"
          aria-label="Toggle menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </button>

        <Link to="/" className="flex items-center">
          <img src={logo} alt="Paraca" className="h-[60px]" />
        </Link>

        <Button
          to="/signin"
          variant="outline"
          className="text-white bg-[#9C9C9C] text-[14px]">
          Sign in
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-base-100 shadow-lg z-50 p-4">
          <ul className="menu w-full">
            {menuLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
            <li className="mt-4">
              <Button
                to="/signup"
                variant="primary"
                fullWidth
                className="flex justify-center items-center gap-2">
                Sign up for free
                <img src={plus} alt="plus" className="w-4 h-4" />
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
