import { Link } from "react-router-dom";
import logo from "../../assets/images/logos/Logo.png";
import SocialButton from "../ui/SocialButton";

/**
 * Sitenin altbilgi bileşeni
 * @returns {JSX.Element} - Footer bileşeni
 */
const Footer = () => {
  // Footer menü verileri
  const footerMenus = [
    {
      title: "Güvenlik",
      links: [
        "Gizlilik Politikası",
        "Yasal Uyarılar",
        "Kullanım Sözleşmesi",
        "KVKK",
      ],
    },
    {
      title: "Site Haritası",
      links: ["Ürünler", "İşlemler", "Ücretlendirme", "Blog"],
    },
    {
      title: "Hakkında",
      links: ["Hakkında", "Hakkında", "Hakkında", "Hakkında"],
    },
    {
      title: "İletişim",
      links: ["İletişim", "İletişim", "İletişim", "İletişim"],
    },
  ];

  // Sosyal medya platformları
  const socialPlatforms = ["discord", "twitter", "instagram"];

  return (
    <footer className="bottom-0 z-50">
      {/* Üst Footer */}
      <div className="bg-transparent container py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 container mx-auto">
          {footerMenus.map((menu, index) => (
            <div key={index} className="flex flex-col gap-1">
              <ul className="text-black font-medium">
                <h3 className="text-[26px] md:text-[34px] font-medium mb-3">
                  {menu.title}
                </h3>
                {menu.links.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className="text-black text-[16px] md:text-[18px] font-medium py-1">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Alt Footer - Telif Bilgisi ve Sosyal Medya */}
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
            {socialPlatforms.map((platform) => (
              <SocialButton key={platform} platform={platform} to="#" />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
