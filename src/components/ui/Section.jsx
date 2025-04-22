import PropTypes from "prop-types";
import { theme } from "../../utils/theme";

/**
 * Standart bölüm yapısı için Section bileşeni
 * @param {Object} props - Bileşen özellikleri
 * @returns {JSX.Element} - Section bileşeni
 */
const Section = ({
  children,
  title,
  subtitle,
  accentTitle,
  background = "bg-transparent",
  titlePosition = "left",
  className = "",
  titleClassName = "",
  subtitleClassName = "",
}) => {
  return (
    <section className={`${theme.spacing.section} ${background} ${className}`}>
      <div className={theme.container}>
        {accentTitle && (
          <h5
            className={`text-[18px] md:text-[28px] lg:text-[34px] font-medium text-[#3369C8] pb-5 font-sf-pro-rounded ${
              titlePosition === "center" ? "text-center mx-auto" : ""
            }`}>
            {accentTitle}
          </h5>
        )}

        {title && (
          <h1
            className={`text-[28px] md:text-[42px] lg:text-[64px] text-black font-bold pb-5 lg:pb-20 font-sf-pro-rounded ${
              titlePosition === "center" ? "text-center" : ""
            } ${titleClassName}`}>
            {title}
          </h1>
        )}

        {subtitle && (
          <p
            className={`text-[18px] md:text-[24px] lg:text-[24px] text-black font-medium font-sf-pro-rounded ${
              titlePosition === "center" ? "text-center mx-auto" : ""
            } ${subtitleClassName}`}>
            {subtitle}
          </p>
        )}

        {children}
      </div>
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node,
  title: PropTypes.node,
  subtitle: PropTypes.node,
  accentTitle: PropTypes.string,
  background: PropTypes.string,
  titlePosition: PropTypes.oneOf(["left", "center", "right"]),
  className: PropTypes.string,
  titleClassName: PropTypes.string,
  subtitleClassName: PropTypes.string,
};

export default Section;
