import { Link } from "react-router-dom";
import hand from "../../assets/images/shapes/Hand.png";
import handSmall from "../../assets/images/shapes/HandSmall.png";
import img1 from "../../assets/images/shapes/1.png";
import img3 from "../../assets/images/shapes/3.png";
import img4 from "../../assets/images/shapes/4.png";
import img5 from "../../assets/images/shapes/5.png";
import img6 from "../../assets/images/shapes/6.png";
import img7 from "../../assets/images/shapes/7.png";
import arrow from "../../assets/images/icons/arrow-right.png";
import Background from "../../assets/images/shapes/Background.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#D4E4FA]">
      {/* 1. Section */}
      <div className="container mx-auto py-10 lg:py-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-[32px] md:text-[52px] lg:text-[72px]  font-bold text-black   lg:pb-5 font-sf-pro-rounded">
              Cebindeki <br /> dijital banka
            </h1>
            <p className="text-[18px] md:text-[24px] lg:text-[24px] text-black font-medium lg:max-w-[500px]  font-sf-pro-rounded">
              Aidat yok, masraf yok, zorluk yok! Avantajlı fırsatlarından
              yararlan, geleneksel bankacılığı bir kenara bırak.
            </p>
            <Link
              to="/signup"
              className="btn rounded-full bg-[#194FDA]/20 border-none text-[#194FDA] font-bold text-[18px] lg:text-[24px] flex items-center gap-2 w-[250px] lg:w-[259px] font-sf-pro-rounded ">
              ParacaCard iste{" "}
              <img src={arrow} alt="arrow" className="w-[24px] h-[20px]" />
            </Link>
          </div>
          <div className="flex flex-col gap-4 relative">
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
      </div>

      {/* 2. Section - Finansal İşlemler */}
      <div className="container mx-auto lg:py-3 px-4">
        <h5 className="text-[18px] md:text-[28px] lg:text-[34px]  lg:max-w-[159px] font-medium text-[#3369C8] pb-5 font-sf-pro-rounded">
          FİNANSAL İŞLEMLER
        </h5>
        <h1 className="text-[28px] md:text-[42px] lg:text-[64px] text-black font-bold pb-5 lg:pb-20 font-sf-pro-rounded">
          Seni neler bekliyor
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {/* 7/24 Havale */}
          <div className="flex items-start gap-10">
            <div className="bg-[#333333] rounded-[15px] shadow-2xl border-[3px]  box-border border-[#7C7C7C] p-3">
              <div className="w-10 h-10 lg:w-20 lg:h-20 rounded-lg flex items-center justify-center">
                <img
                  src={img1}
                  alt="img1"
                  className="w-10 h-10 lg:w-20 lg:h-20 ml-14"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-[20px] md:text-[28px] lg:text-[34px] font-bold text-[#333333]">
                7/24
              </h3>
              <h4 className="text-[20px] md:text-[28px] lg:text-[34px] font-bold text-[#C543CD]">
                Havale
              </h4>
            </div>
          </div>

          {/* Aidatsız Kart */}
          <div className="flex items-start gap-10">
            <div className="bg-[#333333] rounded-[15px] shadow-2xl border-[3px]  box-border border-[#7C7C7C] p-3">
              <div className="w-10 h-10 lg:w-20 lg:h-20 rounded-lg flex items-center justify-center">
                <img
                  src={img6}
                  alt="img6"
                  className="w-10 h-10 lg:w-20 lg:h-20 ml-14"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-[20px] md:text-[28px] lg:text-[34px] font-bold text-[#333333]">
                Aidatsız
              </h3>
              <h4 className="text-[20px] md:text-[28px] lg:text-[34px] font-bold text-[#EDCA5D]">
                Kart
              </h4>
            </div>
          </div>

          {/* Yüksek Birikim Faizi */}
          <div className="flex items-start gap-10">
            <div className="bg-[#333333] rounded-[15px] shadow-2xl border-[3px]  box-border border-[#7C7C7C] p-3">
              <div className="w-10 h-10 lg:w-20 lg:h-20 rounded-lg flex items-center justify-center">
                <img
                  src={img5}
                  alt="img5"
                  className="w-10 h-10 lg:w-20 lg:h-20 ml-14"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-[20px] md:text-[28px] lg:text-[34px] font-bold text-[#333333]">
                Yüksek
              </h3>
              <h4 className="text-[20px] md:text-[28px] lg:text-[34px] font-bold text-[#DB8B58]">
                Birikim Faizi
              </h4>
            </div>
          </div>

          {/* Güvenli Hesap */}
          <div className="flex items-start gap-10">
            <div className="bg-[#333333] rounded-[15px] shadow-2xl border-[3px]  box-border border-[#7C7C7C] p-3">
              <div className="w-10 h-10 lg:w-20 lg:h-20 rounded-lg flex items-center justify-center">
                <img
                  src={img7}
                  alt="img7"
                  className="w-10 h-10 lg:w-20 lg:h-20 ml-14"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-[20px] md:text-[28px] lg:text-[34px] font-bold text-[#333333]">
                Güvenli
              </h3>
              <h4 className="text-[20px] md:text-[28px] lg:text-[34px] font-bold text-[#3369C8]">
                Hesap
              </h4>
            </div>
          </div>

          {/* Kampanya Fırsatları */}
          <div className="flex items-start gap-10">
            <div className="bg-[#333333] rounded-[15px] shadow-2xl border-[3px]  box-border border-[#7C7C7C] p-3">
              <div className="w-10 h-10 lg:w-20 lg:h-20 rounded-lg flex items-center justify-center">
                <img
                  src={img4}
                  alt="img4"
                  className="w-10 h-10 lg:w-20 lg:h-20 ml-14"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-[20px] md:text-[28px] lg:text-[34px] font-bold text-[#333333]">
                Kampanya
              </h3>
              <h4 className="text-[20px] md:text-[28px] lg:text-[34px] font-bold text-[#19812E]">
                Fırsatları
              </h4>
            </div>
          </div>

          {/* Temassız Ödeme */}
          <div className="flex items-start gap-10">
            <div className="bg-[#333333] rounded-[15px] shadow-2xl border-[3px]  box-border border-[#7C7C7C] p-3">
              <div className="w-10 h-10 lg:w-20 lg:h-20 rounded-lg flex items-center justify-center">
                <img
                  src={img3}
                  alt="img3"
                  className="w-10 h-10 lg:w-20 lg:h-20 ml-14"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-[20px] md:text-[28px] lg:text-[34px] font-bold text-[#333333]">
                Temassız
              </h3>
              <h4 className="text-[20px] md:text-[28px] lg:text-[32px] font-bold text-white">
                Ödeme
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
