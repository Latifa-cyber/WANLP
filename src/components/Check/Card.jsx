import { NavLink, Outlet } from "react-router-dom";

function Card() {
  return (
    <div className="bg-white p-10 my-6 rounded-2xl md:mt-[50px] h-[540px] w-auto overflow-y-auto shadow-xl">
      <div className="grid grid-cols-2 justify-center mb-5">
        <NavLink
          to="upload"
          className={({ isActive }) =>
            `flex justify-center ${
              isActive ? "text-blue-600 underline" : "text-gray-500"
            }`
          }
        >
          <h1 className="font-semibold text-xl">رفع الملفات</h1>
        </NavLink>
        <NavLink
          to="result"
          className={({ isActive }) =>
            `flex justify-center ${
              isActive ? "text-blue-600 underline" : "text-gray-500"
            }`
          }
        >
          <h1 className="font-semibold text-xl">النتيجة</h1>
        </NavLink>
      </div>
      <div className="h-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default Card;
