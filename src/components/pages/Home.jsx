import { Link } from "react-router-dom";
import hand from "../../assets/images/shapes/Hand.png";
import handSmall from "../../assets/images/shapes/HandSmall.png";
const Home = () => {
  return (
    <div className="min-h-screen bg-[#D4E4FA]">
      {/* Hero Section */}
      <div className="container mx-auto py-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-[32px] md:text-[52px] lg:text-[72px]  font-bold text-black pb-5 font-sf-pro-rounded">
              Cebindeki <br /> dijital banka
            </h1>
            <p className="text-[18px] md:text-[24px] lg:text-[24px] text-black font-medium max-w-[500px] pb-5 font-sf-pro-rounded">
              Aidat yok, masraf yok, zorluk yok! Avantajlı fırsatlarından
              yararlan, geleneksel bankacılığı bir kenara bırak.
            </p>
            <Link
              to="/signup"
              className="btn rounded-full bg-[#194FDA]/20 border-none text-[#194FDA] font-bold text-[18px] lg:text-[24px] flex items-center gap-2 w-[200px] lg:w-[259px] font-sf-pro-rounded ">
              ParacaCard İste 👉🏻
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
    </div>
  );
};

export default Home;
