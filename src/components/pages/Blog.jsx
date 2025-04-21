import { Link } from "react-router-dom";
import arrowBlue from "../../assets/images/icons/arrow-right-blue.png";
import arrowWhite from "../../assets/images/icons/arrow-right-white.png";
const Blog = () => {
  return (
    <div className="container mx-auto py-20 px-4">
      {/* 1. Section */}
      <div className="container mx-auto py-10 lg:py-20 px-4">
        <h1 className="text-[28px] md:text-[42px] lg:text-[64px] text-black font-bold pb-5 lg:pb-20 font-sf-pro-rounded">
          Blog
        </h1>
        <p className="text-[18px] md:text-[24px] lg:text-[24px] text-black font-medium lg:max-w-[600px]  font-sf-pro-rounded">
          Bültene abone ol, kampanya ve gelecek fırsatlardan anında haberdar ol.
          Bilgilendirme için iletişim adresini paylaş.
        </p>
        <div className="flex flex-row gap-4 mt-10">
          <input
            type="email"
            placeholder="E-mail adresi"
            className="btn rounded-full bg-[#194FDA]/20 border-none text-[#194FDA] font-light text-[18px] lg:text-[18px] flex items-center text-left  w-[250px] lg:w-[450px] font-sf-pro-rounded "
          />
          <button
            to="/signup"
            type="submit"
            className="btn rounded-full bg-[#194FDA] border-none text-white font-bold text-[18px] lg:text-[24px] flex items-center gap-2  w-auto font-sf-pro-rounded ">
            Abone ol{" "}
            <img src={arrowWhite} alt="arrow" className="w-[24px] h-[20px]" />
          </button>
        </div>
      </div>
      <hr className=" border-[#9C9C9C] border-[3px]" />
      {/* 2. Section */}
      <div className="container mx-auto py-10 lg:py-20 px-4">
        <div className="flex flex-row gap-4 mt-10">
          <Link
            to="/signup"
            className="btn rounded-full shadow-none bg-[#EB5757]/20 border-none text-[#EB5757] font-medium text-[18px] lg:text-[24px] flex items-center gap-2  w-auto p-8 font-sf-pro-rounded ">
            KILAVUZ{" "}
          </Link>
          <Link
            to="/signup"
            className="btn rounded-full shadow-none bg-[#333333]/30 border-none text-[#333333] font-medium text-[18px] lg:text-[24px] flex items-center gap-2  w-auto p-8 font-sf-pro-rounded ">
            KAMPANYALAR{" "}
          </Link>
          <Link
            to="/signup"
            className="btn rounded-full shadow-none bg-[#333333]/30 border-none text-[#333333] font-medium text-[18px] lg:text-[24px] flex items-center gap-2  w-auto p-8 font-sf-pro-rounded ">
            EDITOR'UN SEÇTİKLERİ{" "}
          </Link>
        </div>
      </div>
      {/* 3. Section */}
      <div className="container mx-auto py-10 lg:py-20 px-4">
        <div className="grid grid-cols-12 gap-4 mt-10">
          <div className="lg:col-span-4 col-span-12 card  bg-[#194FDA]/20 shadow-md rounded-[20px]">
            <figure className="p-5">
              <div className="w-full h-[180px] bg-[#FFFFFF]/30 rounded-[20px]"></div>
            </figure>
            <div className="card-body">
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
          <div className="lg:col-span-8 col-span-12 card  bg-[#194FDA]/20 shadow-md rounded-[20px]">
            <figure className="p-5">
              <div className="w-full h-[180px] bg-[#FFFFFF]/30 rounded-[20px]"></div>
            </figure>
            <div className="card-body">
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
          <div className="lg:col-span-8 col-span-12 card  bg-[#194FDA]/20 shadow-md rounded-[20px]">
            <figure className="p-5">
              <div className="w-full h-[180px] bg-[#FFFFFF]/30 rounded-[20px]"></div>
            </figure>
            <div className="card-body">
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
          <div className="lg:col-span-4 col-span-12 card  bg-[#194FDA]/20 shadow-md rounded-[20px]">
            <figure className="p-5">
              <div className="w-full h-[180px] bg-[#FFFFFF]/30 rounded-[20px]"></div>
            </figure>
            <div className="card-body">
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
        </div>
        <div className="flex justify-center items-center w-full mt-10">
          <Link
            to="/blog"
            className="btn shadow-none rounded-full bg-[#194FDA]/20 text-[#194FDA]  border-none font-bold text-[18px] lg:text-[24px] items-center justify-center gap-2 w-[300px] lg:w-[420px] font-sf-pro-rounded">
            Daha fazlasına göz at{" "}
            <img src={arrowBlue} alt="arrow" className="w-[24px] h-[20px]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
