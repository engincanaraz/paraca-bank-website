import { Link } from "react-router-dom";
import blog1 from "../../assets/images/blog-1.png";
import blog2 from "../../assets/images/blog-2.png";
import blog3 from "../../assets/images/blog-3.png";
import arrowWhite from "../../assets/images/icons/arrow-right-white.png";
const BlogPost = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      {/* 1. Section */}
      <div className="container mx-auto py-10 lg:py-20 px-4">
        <h1 className="text-[28px] md:text-[42px] lg:text-[64px] text-center text-black font-bold pb-5 lg:pb-20 font-sf-pro-rounded">
          Nasıl para <br /> gönderebilirim?
        </h1>
        <p className="text-[18px] md:text-[34px] text-left lg:w-[750px] text-black font-medium  font-sf-pro-rounded mx-auto">
          Lorem ipsum dolor sit amet, consectetur dolor sit adipiscing elit, sed
          do eiusmod tempor ut laboret.
        </p>
        <img
          src={blog2}
          alt="blog-post"
          className=" h-[500px] w-full object-cover rounded-[20px] mx-auto my-10"
        />
        <h2 className="text-[28px] md:text-[42px] lg:text-[64px] lg:w-[750px] text-left  text-black font-bold pb-5 lg:py-20 font-sf-pro-rounded mx-auto">
          Heading 2
        </h2>
        <p className="text-[18px] md:text-[18px] text-left lg:w-[750px] text-black font-medium  font-sf-pro-rounded mx-auto ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic labore,
          distinctio ab quisquam voluptatem velit culpa deserunt cumque
          excepturi a. Soluta, optio eius? Expedita architecto dolore reiciendis
          unde optio repellat tempora, recusandae officia iure amet sint minus
          quidem assumenda provident quasi exercitationem eaque porro quam
          molestias eligendi! Consectetur, molestiae corrupti.
        </p>
        <h3 className="text-[28px] md:text-[42px] lg:text-[34px] lg:w-[750px] text-left  text-black font-bold py-10 lg:py-20 font-sf-pro-rounded mx-auto">
          Heading 3
        </h3>
        <p className="text-[18px] md:text-[18px] text-left lg:w-[750px] text-black font-medium  font-sf-pro-rounded mx-auto">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic labore,
          distinctio ab quisquam voluptatem velit culpa deserunt cumque
          excepturi a. Soluta, optio eius? Expedita architecto dolore reiciendis
          unde optio repellat tempora, recusandae officia iure amet sint minus
          quidem assumenda provident quasi exercitationem eaque porro quam
          molestias eligendi! Consectetur, molestiae corrupti.
        </p>
        <h4 className="text-[28px] md:text-[42px] lg:text-[24px] lg:w-[750px] text-left  text-black font-bold py-10 lg:py-20 font-sf-pro-rounded mx-auto">
          Heading 4 Subheading
        </h4>
        <p className="text-[18px] md:text-[18px] text-left lg:w-[750px] text-black font-medium  font-sf-pro-rounded mx-auto">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic labore,
          distinctio ab quisquam voluptatem velit culpa deserunt cumque
          excepturi a. Soluta, optio eius? Expedita architecto dolore reiciendis
          unde optio repellat tempora, recusandae officia iure amet sint minus
          quidem assumenda provident quasi exercitationem eaque porro quam
          molestias eligendi! Consectetur, molestiae corrupti.
        </p>
        <img
          src={blog3}
          alt="blog-post"
          className=" h-full w-full object-cover rounded-[20px] lg:w-[750px] mx-auto my-10"
        />
        <h4 className="text-[28px] md:text-[42px] lg:text-[74px] lg:w-[760px] text-center  text-black font-bold  lg:py-20 font-sf-pro-rounded mx-auto">
          Get fresh email inbox
        </h4>
        <p className="text-[18px] md:text-[18px] text-center lg:w-[750px] text-black font-medium  font-sf-pro-rounded mx-auto">
          Lorem ipsum dolor sit amet, consectetur dolor sit adipiscing elit, sed
          do eiusmod tempor ut labore incididunt ut labore.
        </p>
        <div className="flex flex-col lg:flex-row gap-4 mt-10 justify-center py-10 ">
          <input
            type="email"
            placeholder="E-mail adresi"
            className="btn rounded-full bg-[#194FDA]/20 border-none text-[#194FDA] font-light text-[18px] lg:text-[18px] flex items-center text-left  w-auto lg:w-[450px] font-sf-pro-rounded "
          />
          <button
            to="/signup"
            type="submit"
            className="btn rounded-full bg-[#194FDA] border-none text-white font-bold text-[18px] lg:text-[24px] flex items-center gap-2  w-auto font-sf-pro-rounded ">
            Abone ol{" "}
            <img src={arrowWhite} alt="arrow" className="w-[24px] h-[20px]" />
          </button>
        </div>

        {/* Masaüstü için Grid, sadece büyük ekranlar (lg:) */}

        <div className="hidden lg:grid lg:grid-cols-3 gap-4 py-10">
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

        <hr className="border-[#9C9C9C] border-[3px]" />
      </div>
    </div>
  );
};

export default BlogPost;
