import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import arrowBlue from "../../assets/images/icons/arrow-right-blue.png";
import arrowWhite from "../../assets/images/icons/arrow-right-white.png";

/**
 * Yeniden kullanılabilir Button bileşeni
 * @param {Object} props - Bileşen özellikleri
 * @returns {JSX.Element} - Button bileşeni
 */
const Button = ({
  children,
  variant = "primary",
  to,
  type = "button",
  fullWidth = false,
  icon = false,
  iconPosition = "right",
  onClick,
  className = "",
  disabled = false,
}) => {
  // Variantlar için stil sınıfları
  const variantClasses = {
    primary: "bg-[#194FDA] border-none text-white",
    secondary: "bg-[#194FDA]/20 border-none text-[#194FDA]",
    outline: "bg-[#333333]/30 border-none text-[#333333]",
    danger: "bg-[#EB5757]/20 border-none text-[#EB5757]",
  };

  // Temel sınıfları oluştur
  const baseClasses = `btn rounded-full font-bold text-[18px] lg:text-[16px] flex items-center gap-2 font-sf-pro-rounded ${
    fullWidth ? "w-full" : "w-auto"
  } ${variantClasses[variant]} ${className}`;

  // İkon seçimi
  const getIcon = () => {
    if (!icon) return null;
    return (
      <img
        src={variant === "primary" ? arrowWhite : arrowBlue}
        alt="arrow"
        className="w-[24px] h-[20px]"
      />
    );
  };

  // Link veya button olarak render et
  if (to) {
    return (
      <Link to={to} className={baseClasses} onClick={onClick}>
        {iconPosition === "left" && getIcon()}
        {children}
        {iconPosition === "right" && getIcon()}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={baseClasses}
      onClick={onClick}
      disabled={disabled}>
      {iconPosition === "left" && getIcon()}
      {children}
      {iconPosition === "right" && getIcon()}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "outline", "danger"]),
  to: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  fullWidth: PropTypes.bool,
  icon: PropTypes.bool,
  iconPosition: PropTypes.oneOf(["left", "right"]),
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
