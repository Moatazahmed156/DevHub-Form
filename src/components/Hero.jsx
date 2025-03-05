import { FaCaretRight, FaCaretLeft } from "react-icons/fa";

function Hero({ background, title }) {
  return (
    <div className="relative h-screen 2xl:h-[80vh]">
      <div
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#700608] to-[#00000000]  -z-10"></div>
      <div className="absolute top-[40%] left-[10%] z-10 text-center text-white p-10 max-md:left-[3%] max-md:p-2">
        <h1 className="text-6xl border border-4 p-4 px-8 rounded-xl font-bold relative max-md:text-5xl">
          <span class="absolute left-[60px] top-[-26px] text-white text-5xl animate-moveX ">
            <FaCaretRight />
          </span>
          {title}
          <span class="absolute right-[30px] bottom-[-26px] text-white text-5xl animate-moveY">
            <FaCaretLeft />
          </span>
        </h1>
        <p className="text-lg font-bold mt-8 tracking-widest">
          THE DEVHUB'25 EVENT IS UNDER THE WAY!
        </p>
      </div>
    </div>
  );
}
export default Hero;
