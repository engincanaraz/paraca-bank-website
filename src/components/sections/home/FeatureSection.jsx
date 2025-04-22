import img1 from "../../../assets/images/shapes/1.png";
import img3 from "../../../assets/images/shapes/3.png";
import img4 from "../../../assets/images/shapes/4.png";
import img5 from "../../../assets/images/shapes/5.png";
import img6 from "../../../assets/images/shapes/6.png";
import img7 from "../../../assets/images/shapes/7.png";
import Section from "../../ui/Section";

/**
 * Özellik kartı bileşeni
 * @param {Object} props - Bileşen özellikleri
 * @returns {JSX.Element} - Özellik kartı
 */
const FeatureCard = ({ image, title, accentTitle }) => {
  return (
    <div className="flex items-start gap-10">
      <div className="bg-[#333333] rounded-[15px] shadow-2xl border-[3px] box-border border-[#7C7C7C] p-3">
        <div className="w-10 h-10 lg:w-20 lg:h-20 rounded-lg flex items-center justify-center">
          <img
            src={image}
            alt={title}
            className="w-10 h-10 lg:w-20 lg:h-20 ml-14"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className="text-[20px] md:text-[28px] lg:text-[34px] font-bold text-[#333333]">
          {title}
        </h3>
        <h4
          className={`text-[20px] md:text-[28px] lg:text-[34px] font-bold ${accentTitle.color}`}>
          {accentTitle.text}
        </h4>
      </div>
    </div>
  );
};

/**
 * Ana sayfa özellikler bölümü
 * @returns {JSX.Element} - Özellikler bölümü
 */
const FeatureSection = () => {
  // Özellik verileri
  const features = [
    {
      image: img1,
      title: "7/24",
      accentTitle: { text: "Havale", color: "text-[#C543CD]" },
    },
    {
      image: img6,
      title: "Aidatsız",
      accentTitle: { text: "Kart", color: "text-[#EDCA5D]" },
    },
    {
      image: img5,
      title: "Yüksek",
      accentTitle: { text: "Birikim Faizi", color: "text-[#DB8B58]" },
    },
    {
      image: img7,
      title: "Güvenli",
      accentTitle: { text: "Hesap", color: "text-[#3369C8]" },
    },
    {
      image: img4,
      title: "Kampanya",
      accentTitle: { text: "Fırsatları", color: "text-[#19812E]" },
    },
    {
      image: img3,
      title: "Temassız",
      accentTitle: { text: "Ödeme", color: "text-white" },
    },
  ];

  return (
    <Section accentTitle="FİNANSAL İŞLEMLER" title="Seni neler bekliyor">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            image={feature.image}
            title={feature.title}
            accentTitle={feature.accentTitle}
          />
        ))}
      </div>
    </Section>
  );
};

export default FeatureSection;
