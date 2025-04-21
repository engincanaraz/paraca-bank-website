import { Link } from "react-router-dom";
import hand from "../../assets/images/shapes/Hand.png";
import handSmall from "../../assets/images/shapes/HandSmall.png";
import img1 from "../../assets/images/shapes/1.png";
import img3 from "../../assets/images/shapes/3.png";
import img4 from "../../assets/images/shapes/4.png";
import img5 from "../../assets/images/shapes/5.png";
import img6 from "../../assets/images/shapes/6.png";
import img7 from "../../assets/images/shapes/7.png";
import arrowBlue from "../../assets/images/icons/arrow-right-blue.png";
import arrowWhite from "../../assets/images/icons/arrow-right-white.png";
import Background from "../../assets/images/shapes/Background.png";
import blog1 from "../../assets/images/blog-1.png";
import blog2 from "../../assets/images/blog-2.png";
import blog3 from "../../assets/images/blog-3.png";
import LogoBanner from "../../assets/images/logos/LogoBanner.png";
import Memojis from "../../assets/images/Memojis.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#D4E4FA]">
      {/* 1. Section */}
      <div className="container mx-auto py-10 lg:py-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-[32px] md:text-[52px] lg:text-[72px]  font-bold text-black   lg:py-20 font-sf-pro-rounded">
              Cebindeki <br /> dijital banka
            </h1>
            <p className="text-[18px] md:text-[24px] lg:text-[24px] text-black font-medium lg:max-w-[600px]  font-sf-pro-rounded">
              Aidat yok, masraf yok, zorluk yok! Avantajlı fırsatlarından
              yararlan, geleneksel bankacılığı bir kenara bırak.
            </p>
            <Link
              to="/signup"
              className="btn rounded-full bg-[#194FDA]/20 border-none text-[#194FDA] font-bold text-[18px] lg:text-[24px] flex items-center gap-2 w-[250px] lg:w-[259px] font-sf-pro-rounded ">
              ParacaCard iste{" "}
              <img src={arrowBlue} alt="arrow" className="w-[24px] h-[20px]" />
            </Link>
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
      </div>

      {/* 2. Section - Finansal İşlemler */}
      <div className="container mx-auto py-10 lg:py-20 px-4">
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

      {/* 3. Section - Blog */}
      <div className="container mx-auto py-10 lg:py-20 px-4">
        <h5 className="text-[18px] md:text-[28px] lg:text-[34px]  lg:max-w-[159px] font-medium text-[#3369C8] pb-5 font-sf-pro-rounded">
          BLOG
        </h5>
        <h1 className="text-[28px] md:text-[42px] lg:text-[64px] text-black font-bold pb-5 lg:pb-20 font-sf-pro-rounded">
          Takipte kal
        </h1>

        {/* Masaüstü için Grid, sadece büyük ekranlar (lg:) */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-4">
          {/* Blog 1 */}
          <div className="flex card bg-[#194FDA]/20 w-96 shadow-md rounded-[20px]">
            <figure className="p-5">
              <img src={blog1} alt="blog1" className="rounded-[20px]" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-[#EB5757] font-medium text-[18px]">
                KATEGORİ
              </h2>
              <Link to="/blog/nasil-para-gonderebilirim">
                <h6 className="text-[28px] font-bold text-[#1D1D1D] mb-10 hover:text-[#3369C8] transition-colors">
                  Nasıl Para Gönderebilirim?
                </h6>
              </Link>
              <div className="card-actions justify-start">
                <div className="badge badge-outline border-none text-[#1D1D1D] p-0">
                  25 Ocak 2021
                </div>
              </div>
            </div>
          </div>
          {/* Blog 2 */}
          <div className="flex card bg-[#194FDA]/20 w-96 shadow-md rounded-[20px]">
            <figure className="p-5">
              <img src={blog2} alt="blog2" className="rounded-[20px]" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-[#EB5757] font-medium text-[18px]    ">
                KATEGORİ
              </h2>
              <Link to="/blog/paraca-ile-harcama-takibi">
                <h6 className="text-[28px] font-bold text-[#1D1D1D] mb-10 hover:text-[#3369C8] transition-colors">
                  Paraca ile Harcama <br />
                  Takibi
                </h6>
              </Link>
              <div className="card-actions justify-start">
                <div className="badge badge-outline border-none text-[#1D1D1D] p-0">
                  25 Ocak 2021
                </div>
              </div>
            </div>
          </div>
          {/* Blog 3 */}
          <div className="flex card bg-[#194FDA]/20 w-96 shadow-md rounded-[20px]">
            <figure className=" p-5">
              <img src={blog3} alt="blog3" className="rounded-[20px]" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-[#EB5757] font-medium text-[18px]    ">
                KATEGORİ
              </h2>
              <Link to="/blog/faturalarimi-otomatik-odeyebilir-miyim">
                <h6 className="text-[28px] font-bold text-[#1D1D1D] mb-10 hover:text-[#3369C8] transition-colors">
                  Faturalarımı Otomatik Ödeyebilir Miyim?
                </h6>
              </Link>
              <div className="card-actions justify-start">
                <div className="badge badge-outline border-none text-[#1D1D1D] p-0">
                  25 Ocak 2021
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobil ve Tablet için Carousel (lg: ekran boyutundan küçük) */}
        <div className="lg:hidden carousel carousel-center w-full pb-8 space-x-4 rounded-box">
          {/* Blog 1 - Carousel Item */}
          <div className="carousel-item">
            <div className="flex card bg-[#194FDA]/20 w-64 sm:w-72 md:w-96 shadow-sm rounded-[20px]">
              <figure className="p-5">
                <img src={blog1} alt="blog1" className="rounded-[20px]" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-[#EB5757] font-medium text-[18px]">
                  KATEGORİ
                </h2>
                <Link to="/blog/nasil-para-gonderebilirim">
                  <h6 className="text-[20px] md:text-[24px] font-bold text-[#1D1D1D] mb-6 hover:text-[#3369C8] transition-colors">
                    Nasıl Para Gönderebilirim?
                  </h6>
                </Link>
                <div className="card-actions justify-start">
                  <div className="badge badge-outline border-none text-[#1D1D1D] p-0">
                    25 Ocak 2021
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blog 2 - Carousel Item */}
          <div className="carousel-item">
            <div className="flex card bg-[#194FDA]/20 w-64 sm:w-72 md:w-96 shadow-sm rounded-[20px]">
              <figure className="p-5">
                <img src={blog2} alt="blog2" className="rounded-[20px]" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-[#EB5757] font-medium text-[18px]">
                  KATEGORİ
                </h2>
                <Link to="/blog/paraca-ile-harcama-takibi">
                  <h6 className="text-[20px] md:text-[24px] font-bold text-[#1D1D1D] mb-6 hover:text-[#3369C8] transition-colors">
                    Paraca ile Harcama Takibi
                  </h6>
                </Link>
                <div className="card-actions justify-start">
                  <div className="badge badge-outline border-none text-[#1D1D1D] p-0">
                    25 Ocak 2021
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blog 3 - Carousel Item */}
          <div className="carousel-item">
            <div className="flex card bg-[#194FDA]/20 w-64 sm:w-72 md:w-96 shadow-sm rounded-[20px]">
              <figure className="p-5">
                <img src={blog3} alt="blog3" className="rounded-[20px]" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-[#EB5757] font-medium text-[18px]">
                  KATEGORİ
                </h2>
                <Link to="/blog/faturalarimi-otomatik-odeyebilir-miyim">
                  <h6 className="text-[20px] md:text-[24px] font-bold text-[#1D1D1D] mb-6 hover:text-[#3369C8] transition-colors">
                    Faturalarımı Otomatik Ödeyebilir Miyim?
                  </h6>
                </Link>
                <div className="card-actions justify-start">
                  <div className="badge badge-outline border-none text-[#1D1D1D] p-0">
                    25 Ocak 2021
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center w-full mt-10">
          <Link
            to="/blog"
            className="btn shadow-none rounded-full bg-transparent border-white border-[2px] text-white font-bold text-[18px] lg:text-[24px] items-center justify-center gap-2 w-[300px] lg:w-[420px] font-sf-pro-rounded hidden  lg:flex">
            Daha fazlasına göz at{" "}
            <img src={arrowWhite} alt="arrow" className="w-[24px] h-[20px]" />
          </Link>
        </div>
      </div>

      {/* 4. Section - Firmalar */}
      <div className="container mx-auto py-10 lg:py-20 px-4">
        <h5 className="text-[18px] md:text-[28px] lg:text-[34px]  lg:max-w-[159px] font-medium text-[#3369C8] pb-5 font-sf-pro-rounded">
          FİRMALAR
        </h5>
        <h1 className="text-[28px] md:text-[42px] lg:text-[64px] text-black font-bold pb-5 lg:pb-20 font-sf-pro-rounded">
          En İyiler
        </h1>
        <div className="grid lg:grid-cols-5  grid-cols-3 justify-center items-center">
          <img src={LogoBanner} alt="logo-banner" className="w-auto h-auto" />
          <img src={LogoBanner} alt="logo-banner" className="w-auto h-auto" />
          <img src={LogoBanner} alt="logo-banner" className="w-auto h-auto" />
          <img
            src={LogoBanner}
            alt="logo-banner"
            className="w-auto h-auto hidden lg:block"
          />
          <img
            src={LogoBanner}
            alt="logo-banner"
            className="w-auto h-auto hidden lg:block"
          />
        </div>
        <div className="flex justify-center items-center w-full mt-8">
          <Link
            to="/blog"
            className="btn shadow-none rounded-full bg-transparent border-white border-[2px] text-white font-bold text-[18px] lg:text-[24px] hidden lg:flex items-center justify-center gap-2 w-[300px] lg:w-[300px] font-sf-pro-rounded">
            Marka Ortaklıkları{" "}
            <img src={arrowWhite} alt="arrow" className="w-[24px] h-[20px]" />
          </Link>
        </div>
      </div>

      {/* 5. Section - Başla */}
      <div className="container mx-auto py-10 lg:py-20 px-4">
        <h5 className="text-[18px] md:text-[28px] lg:text-[34px]  lg:max-w-[159px] font-medium text-[#3369C8] pb-5 font-sf-pro-rounded">
          BAŞLA
        </h5>
        <h1 className="text-[28px] md:text-[42px] lg:text-[64px] text-black font-bold pb-5 lg:pb-20 font-sf-pro-rounded">
          Ücretsiz üyelik{" "}
        </h1>
        <p className="text-[18px] md:text-[24px] lg:text-[24px] text-black font-medium lg:max-w-[600px]  font-sf-pro-rounded">
          Paraca'ya ücretsiz üye ol, kartını adresine teslim al. Böylece sen de
          avantajlarla büyüyen ailenin bir parçası olursun.
        </p>
        <Link
          to="/signup"
          className="btn rounded-full bg-[#194FDA]/20 border-none text-[#194FDA] font-bold text-[18px] lg:text-[24px] flex items-center gap-2 w-[250px] lg:w-[259px] font-sf-pro-rounded mt-10 ">
          ParacaCard iste{" "}
          <img src={arrowBlue} alt="arrow" className="w-[24px] h-[20px]" />
        </Link>
        <img
          src={Memojis}
          alt="memojis"
          className="w-full h-full py-5 hidden lg:block"
        />
      </div>
    </div>
  );
};

export default Home;
