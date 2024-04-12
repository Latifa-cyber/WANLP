import img1 from "../assets/home.png";
import arrow from "../assets/scroll-arrow.png";

function Hero() {
  const scrollDown = () => {
    const view = window.innerHeight || document.documentElement.clientHeight;
    window.scrollBy(0, view);
  };

  return (
    <div className="my-10">
      <div className="grid grid-cols-2 gap-1 justify-between px-10 mb-12 items-center relative mx-auto">
        <div className="md:mr-14">
          <h1 className="text-5xl font-bold my-10 leading-tight">
            مدقق السرقة العلمية تم تحسينه الآن باستخدام كاشف محتوى الذكاء
            الاصطناعي!
          </h1>
          <p className="text-2xl font-semibold text-gray-500 my-5 max-w-[500px]">
            فحص السرقة العلمية مع جهاز كشف محتوى متقدم خصيصًا للنصوص العربية،
            مما يضمن الكشف الأكثر دقة عن المحتوى المنسوخ.
          </p>
          <button className="bg-blue-600 px-10 py-3 rounded-xl text-white font-bold text-xl">
            تحقق الآن
          </button>
        </div>
        <div className="">
          <img className="w-[400px] mx-auto" src={img1} alt="heroImg" />
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
