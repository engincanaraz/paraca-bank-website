import { Link } from "react-router-dom";
import hand from "../../../assets/images/shapes/Hand.png";
import handSmall from "../../../assets/images/shapes/HandSmall.png";
import Button from "../../ui/Button";
import Section from "../../ui/Section";

/**
 * Ana sayfa hero bölümü
 * @returns {JSX.Element} - Hero bölümü
 */
const HeroSection = () => {
  return (
    <Section background="bg-[#D4E4FA]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-[32px] md:text-[52px] lg:text-[72px] font-bold text-black lg:py-20 font-sf-pro-rounded">
            Cebindeki <br /> dijital banka
          </h1>
          <p className="text-[18px] md:text-[24px] lg:text-[24px] text-black font-medium lg:max-w-[600px] font-sf-pro-rounded">
            Aidat yok, masraf yok, zorluk yok! Avantajlı fırsatlarından
            yararlan, geleneksel bankacılığı bir kenara bırak.
          </p>
          <Button
            to="/signup"
            variant="secondary"
            icon
            className="w-[250px] lg:w-[259px] font-bold text-[18px] lg:text-[24px]">
            ParacaCard iste
          </Button>
        </div>
        <div className="flex flex-col gap-4 relative px-24">
          <img
            src={hand}
            alt="hand"
            className="w-full h-full hidden md:block"
          />
          <div className="absolute bottom-32 right-0 md:hidden z-10">
            <img src={handSmall} alt="hand-small" className="w-full h-full" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
