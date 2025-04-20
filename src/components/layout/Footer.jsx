import { Link } from "react-router-dom";
import logo from "../../assets/images/logos/logo.png";
import discord from "../../assets/images/icons/discord.png";
import twitter from "../../assets/images/icons/twitter.png";
import instagram from "../../assets/images/icons/instagram.png";

const Footer = () => {
  return (
    <footer className="bottom-0 z-50">
      {/* Big Footer */}
      <div className="bg-transparent container py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 container mx-auto">
          <div className="flex flex-col gap-1">
            <ul className="text-black font-medium">
              <h3 className="text-[26px] md:text-[34px] font-medium mb-3">
                Güvenlik
              </h3>
              <li className="text-black text-[16px] md:text-[18px] font-medium py-1">
                Gizlilik Politikası
              </li>
              <li className="text-black text-[16px] md:text-[18px] font-medium py-1">
                Yasal Uyarılar
              </li>
              <li className="text-black text-[16px] md:text-[18px] font-medium py-1">
                Kullanım Sözleşmesi
              </li>
              <li className="text-black text-[16px] md:text-[18px] font-medium py-1">
                KVKK
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <ul className="text-black font-medium">
              <h3 className="text-[26px] md:text-[34px] font-medium mb-3">
                Site Haritası
              </h3>
              <li className="text-black text-[16px] md:text-[18px] font-medium py-1">
                Ürünler
              </li>
              <li className="text-black text-[16px] md:text-[18px] font-medium py-1">
                İşlemler
              </li>
              <li className="text-black text-[16px] md:text-[18px] font-medium py-1">
                Ücretlendirme
              </li>
              <li className="text-black text-[16px] md:text-[18px] font-medium py-1">
                Blog
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <ul className="text-black font-medium">
              <h3 className="text-[26px] md:text-[34px] font-medium mb-3">
                Hakkında
              </h3>
              <li className="text-black text-[16px] md:text-[18px] font-medium py-1">
                Hakkında
              </li>
              <li className="text-black text-[16px] md:text-[18px] font-medium py-1">
                Hakkında
              </li>
              <li className="text-black text-[16px] md:text-[18px] font-medium py-1">
                Hakkında
              </li>
              <li className="text-black text-[16px] md:text-[18px] font-medium py-1">
                Hakkında
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <ul className="text-black font-medium">
              <h3 className="text-[26px] md:text-[34px] font-medium mb-3">
                İletişim
              </h3>
              <li className="text-black text-[16px] md:text-[18px] font-medium py-1">
                İletişim
              </li>
              <li className="text-black text-[16px] md:text-[18px] font-medium py-1">
                İletişim
              </li>
              <li className="text-black text-[16px] md:text-[18px] font-medium py-1">
                İletişim
              </li>
              <li className="text-black text-[16px] md:text-[18px] font-medium py-1">
                İletişim
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Small Footer */}
      <div className="bg-black">
        <div className="container flex justify-between items-center py-2">
          <div className="flex items-center gap-12">
            <Link to="/" className="flex items-start lg:items-center">
              <img
                src={logo}
                alt="Paraca"
                className="h-[60px] px-2 lg:h-[76px]"
              />
            </Link>
            <div className="flex items-center">
              <h6 className="text-white text-lg font-medium hidden lg:block">
                Tüm hakları saklıdır®
              </h6>
            </div>
          </div>

          <div className="flex items-center gap-3 text-white text-lg">
            <Link
              to="/signup"
              className="btn bg-blue-600 border-none text-white flex items-center justify-center gap-2 w-10 h-10 sm:w-[128px] sm:h-auto rounded-full p-0 sm:p-2">
              <span className="hidden sm:block">Discord</span>
              <img src={discord} alt="discord" className="w-6 h-5" />
            </Link>
            <Link
              to="/signup"
              className="btn bg-blue-600 border-none text-white flex items-center justify-center gap-2 w-10 h-10 sm:w-[128px] sm:h-auto rounded-full p-0 sm:p-2">
              <span className="hidden sm:block">Twitter</span>
              <img src={twitter} alt="twitter" className="w-5 h-5" />
            </Link>
            <Link
              to="/signup"
              className="btn bg-blue-600 border-none text-white flex items-center justify-center gap-2 w-10 h-10 sm:w-[128px] sm:h-auto rounded-full p-0 sm:p-2">
              <span className="hidden sm:block">Instagram</span>
              <img src={instagram} alt="instagram" className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
