import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/**
 * Blog kartları için yeniden kullanılabilir bileşen
 * @param {Object} props - Bileşen özellikleri
 * @returns {JSX.Element} - BlogCard bileşeni
 */
const BlogCard = ({
  image,
  title,
  category,
  date,
  slug,
  fullWidth = false,
  className = "",
}) => {
  return (
    <div
      className={`card bg-[#194FDA]/20 shadow-md rounded-[20px] ${
        fullWidth ? "w-full" : "w-full md:w-auto"
      } ${className}`}>
      <figure className="p-5">
        {image ? (
          <img
            src={image}
            alt={title}
            className="rounded-[20px] w-full h-[180px] object-cover"
          />
        ) : (
          <div className="w-full h-[180px] bg-[#FFFFFF]/30 rounded-[20px]"></div>
        )}
      </figure>
      <div className="card-body">
        {category && (
          <h2 className="card-title text-[#EB5757] font-medium text-[18px]">
            {category}
          </h2>
        )}
        <Link to={`/blog/${slug}`}>
          <h6 className="text-[28px] font-bold text-[#1D1D1D] mb-10 hover:text-[#3369C8] transition-colors">
            {title}
          </h6>
        </Link>
        <div className="card-actions justify-start">
          <div className="badge badge-outline border-none text-[#1D1D1D] p-0">
            {date}
          </div>
        </div>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  category: PropTypes.string,
  date: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
};

export default BlogCard;
