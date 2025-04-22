import arrowWhite from "../../assets/images/icons/arrow-right-white.png";
import { Link } from "react-router-dom";
import logoİco from "../../assets/images/logos/ico.png";
import shapes from "../../assets/images/shapes/Shapes.png";
const Register = () => {
  return (
    <div className="min-h-screen w-full bg-[#D4E4FA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-5 sm:pt-8 lg:pt-10">
          <Link
            to="/"
            className="btn rounded-full bg-[#194FDA]/20 border-none text-white font-bold text-[16px] sm:text-[18px] lg:text-[24px] flex items-center gap-2 w-[200px] sm:w-[250px] lg:w-[259px] font-sf-pro-rounded">
            Geri dön{" "}
            <img
              src={arrowWhite}
              alt="arrow"
              className="w-[20px] h-[16px] sm:w-[24px] sm:h-[20px] rotate-180"
            />
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 py-10 sm:py-16 lg:py-20 gap-8 lg:gap-24">
          <div className="w-full flex flex-col items-center lg:items-start">
            <img
              src={logoİco}
              alt="register"
              className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]"
            />
            <h4 className="text-[24px] sm:text-[28px] md:text-[42px] lg:text-[28px] text-black font-bold font-sf-pro-rounded py-3 sm:py-5 text-center lg:text-left">
              Giriş yap
            </h4>
            <h5 className="text-[16px] sm:text-[18px] md:text-[24px] lg:text-[18px] text-black font-medium font-sf-pro-rounded pb-3 sm:pb-5 text-center lg:text-left">
              Hesabın yok mu?{" "}
              <Link to="/signin" className="text-[#194FDA]">
                Hesap Oluştur
              </Link>
            </h5>
            <Link
              to="/signup"
              className="btn rounded-full bg-[#194FDA] border-none text-white font-bold text-[16px] sm:text-[18px] lg:text-[24px] flex items-center justify-center gap-2 w-full sm:w-auto font-sf-pro-rounded py-3 sm:py-5">
              Google ile giriş yap
              <img
                src={arrowWhite}
                alt="arrow"
                className="w-[20px] h-[16px] sm:w-[24px] sm:h-[20px]"
              />
            </Link>
            <hr className="border-[#9C9C9C] border-[2px] sm:border-[3px] mt-6 sm:mt-10 w-full" />
            <form action="" className="py-3 sm:py-5 w-full">
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="flex flex-col gap-2 bg-[#194FDA]/20 rounded-full p-3 sm:p-4">
                  <input
                    type="text"
                    id="fullName"
                    placeholder="Full Name"
                    className="bg-transparent border-none outline-none text-[#194FDA] placeholder:text-[#194FDA] w-full"
                  />
                </div>
                <div className="flex flex-col gap-2 bg-[#194FDA]/20 rounded-full p-3 sm:p-4">
                  <input
                    type="email"
                    id="email"
                    placeholder="Email adress"
                    className="bg-transparent border-none outline-none text-black placeholder:text-black w-full"
                  />
                </div>
                <div className="flex flex-col gap-2 bg-[#194FDA]/20 rounded-full p-3 sm:p-4">
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Phone number"
                    className="bg-transparent border-none outline-none text-[#194FDA] placeholder:text-[#194FDA] w-full"
                  />
                </div>
                <div className="flex flex-row gap-2 items-start">
                  <input
                    type="checkbox"
                    id="agree"
                    className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] rounded-full appearance-none border-2 border-black checked:bg-black/50 checked:scale-90 transition-all mt-1"
                  />
                  <label
                    htmlFor="agree"
                    className="text-[14px] sm:text-[16px] lg:text-[18px] text-black">
                    I agree to the{" "}
                    <span className="text-[#194FDA]">Term of Service</span> and{" "}
                    <span className="text-[#194FDA]">Privacy Statement</span>
                  </label>
                </div>
                <div className="flex flex-row gap-2 items-start">
                  <input
                    type="checkbox"
                    id="email"
                    className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] rounded-full appearance-none border-2 border-black checked:bg-black/50 checked:scale-90 transition-all mt-1"
                  />
                  <label
                    htmlFor="email"
                    className="text-[14px] sm:text-[16px] lg:text-[18px] text-black">
                    Send me tips via email. Unsubcribe any time.
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn rounded-full bg-[#194FDA] border-none text-white font-bold text-[16px] sm:text-[18px] lg:text-[24px] flex items-center justify-center gap-2 w-full sm:w-auto font-sf-pro-rounded py-3 sm:py-5">
                  E-mail ile giriş yap
                  <img
                    src={arrowWhite}
                    alt="arrow"
                    className="w-[20px] h-[16px] sm:w-[24px] sm:h-[20px]"
                  />
                </button>
              </div>
            </form>
          </div>

          <div className="justify-center items-center hidden lg:flex">
            <img
              src={shapes}
              alt="shapes"
              className="w-full max-w-[400px] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
