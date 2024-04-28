import Arrow from "../../assets/Arrow.png";

function Check() {
  return (
    <div>
      <div className="rounded-3xl border-black border-2 px-7 py-2 font-semibold text-lg w-[170px]">
        رقم #1 للطلبة
      </div>
      <div className="max-w-[450px]">
        <h1 className="md:text-5xl text-3xl font-bold md:my-10 my-5 leading-tight">
          مدقق السرقة العلمية
        </h1>
        <p className="md:text-2xl text-lg font-semibold text-gray-500 my-5">
          اكتشف بسهولة المحتوى المنسوخ في النص العربي الخاص بك باستخدام أداة
          مدقق السرقة العلمية الفعالة.
        </p>
        <img src={Arrow} alt="Arrow" className="lg:block hidden mr-auto" />
      </div>
    </div>
  );
}

export default Check;
