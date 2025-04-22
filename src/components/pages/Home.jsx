import HeroSection from "../sections/home/HeroSection";
import FeatureSection from "../sections/home/FeatureSection";
import BlogSection from "../sections/home/BlogSection";

/**
 * Ana sayfa bileşeni
 * @returns {JSX.Element} - Ana sayfa
 */
const Home = () => {
  return (
    <div className="min-h-screen bg-[#D4E4FA]">
      <HeroSection />
      <FeatureSection />
      <BlogSection />
    </div>
  );
};

export default Home;
