import PropTypes from "prop-types";

/**
 * Yeniden kullanılabilir Input bileşeni
 * @param {Object} props - Bileşen özellikleri
 * @returns {JSX.Element} - Input bileşeni
 */
const Input = ({
  type = "text",
  id,
  name,
  placeholder,
  value,
  onChange,
  variant = "default",
  className = "",
  required = false,
}) => {
  // Variant stilleri
  const variantStyles = {
    default: "bg-[#194FDA]/20 text-black placeholder:text-black",
    primary: "bg-[#194FDA]/20 text-[#194FDA] placeholder:text-[#194FDA]",
  };

  return (
    <div
      className={`flex flex-col gap-2 ${variantStyles[variant]} rounded-full p-3 sm:p-4 ${className}`}>
      <input
        type={type}
        id={id}
        name={name || id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="bg-transparent border-none outline-none w-full"
      />
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  variant: PropTypes.oneOf(["default", "primary"]),
  className: PropTypes.string,
  required: PropTypes.bool,
};

export default Input;
