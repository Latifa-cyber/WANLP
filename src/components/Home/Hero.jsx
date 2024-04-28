import home from "../../assets/home.png";
import { Link } from "react-router-dom";
import arrow from "../../assets/scroll-arrow.png";

function Hero() {
  const scrollDown = () => {
    const view = window.innerHeight || document.documentElement.clientHeight;
    window.scrollBy(0, view);
  };

  return (
    <div className="my-10">
      <div className="md:grid grid-cols-2 md:gap-1 md:justify-between px-10 mb-12 items-center relative mx-auto">
        <div className="md:mr-14">
          <h1 className="md:text-5xl text-3xl font-bold md:my-10 my-5 leading-tight">
            مدقق السرقة العلمية تم تحسينه الآن باستخدام كاشف محتوى الذكاء
            الاصطناعي!
          </h1>
          <p className="md:text-2xl text-lg font-semibold text-gray-500 my-5 max-w-[500px]">
            فحص السرقة العلمية مع جهاز كشف محتوى متقدم خصيصًا للنصوص العربية،
            مما يضمن الكشف الأكثر دقة عن المحتوى المنسوخ.
          </p>
          <Link to="/check">
            <button className="bg-blue-700 px-10 py-3 rounded-xl text-white font-bold md:text-xl hover:shadow-[2px_3px_5px_rgba(0,0,255,0.5)]">
              تحقق الآن
            </button>
          </Link>
        </div>
        <div className="">
          <img className="w-[400px] mx-auto" src={home} alt="heroImg" />
        </div>
      </div>
      <div className="flex justify-center">
        <img
          className="w-6 animate-bounce"
          onClick={scrollDown}
          src={arrow}
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero;
