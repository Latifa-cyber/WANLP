import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <div className="backg flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-blue-600 text-8xl font-bold text-center ">404</h1>
      <h2 className="text-2xl font-bold text-center">
        الصفحة التي تبحث عنها غير موجودة
      </h2>
      <div className="flex justify-center">
        <NavLink to="/">
          <button className="bg-blue-600 m-7 py-3 px-5 text-white rounded-xl font-bold">
            عد إلى الصفحة الرئيسية
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default NotFound;
