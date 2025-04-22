import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import discord from "../../assets/images/icons/discord.png";
import twitter from "../../assets/images/icons/twitter.png";
import instagram from "../../assets/images/icons/instagram.png";

/**
 * Sosyal medya butonları için bileşen
 * @param {Object} props - Bileşen özellikleri
 * @returns {JSX.Element} - SocialButton bileşeni
 */
const SocialButton = ({
  platform,
  to = "#",
  responsive = true,
  className = "",
}) => {
  // Platform ikonları
  const platformIcons = {
    discord: { src: discord, alt: "discord", label: "Discord" },
    twitter: { src: twitter, alt: "twitter", label: "Twitter" },
    instagram: { src: instagram, alt: "instagram", label: "Instagram" },
  };

  // Platforma göre veri seçimi
  const icon = platformIcons[platform.toLowerCase()];

  if (!icon) {
    console.error(`Desteklenmeyen sosyal medya platformu: ${platform}`);
    return null;
  }

  return (
    <Link
      to={to}
      className={`btn bg-blue-600 border-none text-white flex items-center justify-center gap-2 w-10 h-10 sm:w-[128px] sm:h-auto rounded-full p-0 sm:p-2 ${className}`}>
      {responsive && <span className="hidden sm:block">{icon.label}</span>}
      <img src={icon.src} alt={icon.alt} className="w-5 h-5" />
    </Link>
  );
};

SocialButton.propTypes = {
  platform: PropTypes.oneOf(["discord", "twitter", "instagram"]).isRequired,
  to: PropTypes.string,
  responsive: PropTypes.bool,
  className: PropTypes.string,
};

export default SocialButton;
