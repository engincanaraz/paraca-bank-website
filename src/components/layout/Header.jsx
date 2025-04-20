import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from "../../assets/images/logos/logo.png";
import plus from "../../assets/images/icons/plus.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              <li>
                <Link to="/urunler" className="hover:opacity-80">Ürünler</Link>
              </li>
              <li>
                <Link to="/islemler" className="hover:opacity-80">İşlemler</Link>
              </li>
              <li>
                <Link to="/ucretlendirme" className="hover:opacity-80">Ücretlendirme</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:opacity-80">Blog</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/signin" className="btn rounded-full bg-gray-600 border-none text-white ">
            Sign in
          </Link>
          <Link to="/signup" className="btn rounded-full bg-blue-600 border-none text-white flex items-center gap-2">
            Sign up for free
            <img src={plus} alt="plus" className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden container px-4 py-2 flex justify-between items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="btn btn-circle btn-ghost bg-white/30"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </button>
        
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Paraca" className="h-[60px]" />
        </Link>

        <Link to="/signin" className="btn rounded-full bg-gray-600 border-none text-white">
          Sign in
        </Link>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-base-100 shadow-lg z-50 p-4">
          <ul className="menu w-full">
            <li><Link to="/urunler">Ürünler</Link></li>
            <li><Link to="/islemler">İşlemler</Link></li>
            <li><Link to="/ucretlendirme">Ücretlendirme</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li className="mt-4">
              <Link to="/signup" className="btn btn-primary w-full rounded-full flex justify-center items-center gap-2">
                Sign up for free
                <img src={plus} alt="plus" className="w-4 h-4" />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
