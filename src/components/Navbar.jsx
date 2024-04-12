import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const links = [
    { name: "الرئيسية", path: "/" },
    { name: "تحقق", path: "/check" },
  ];

  const [open, setOpen] = useState(false);

  open
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  useEffect(() => {
    const handleClickOutsideMenu = (event) => {
      if (open) {
        const menuContainer = document.getElementById("nav");
        if (menuContainer && !menuContainer.contains(event.target)) {
          setOpen(false);
        }
      }
    };
    window.addEventListener("click", handleClickOutsideMenu);
  }, [open]);

  return (
    <div
      dir="ltr"
      className={
        open
          ? "inset-0 z-50 overflow-auto flex items-center justify-center"
          : ""
      }
    >
      <nav id="nav" className="w-full z-50 top-0 left-0">
        <div className="h-[70px] md:flex grid items-center justify-between md:px-10 px-3">
          <div className="flex items-center">
            <Link to="/" onClick={() => setOpen(false)}>
              <h1 className="text-black text-3xl font-bold my-3">
                Plag<span className="text-blue-600">Check</span>
              </h1>
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="text-3xl absolute left-[91%] cursor-pointer md:hidden text-black"
          >
            {open ? "✖" : "☰"}
          </button>

          <ul
            className={`mr-[5%] md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 ${
              open ? "top-[190px] backg shadow-lg" : "backg top-[-490px]"
            }`}
          >
            {links.map((link) => (
              <li
                key={link.name}
                className="md:ml-8 md:my-0 my-7"
                onClick={() => setOpen(false)}
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `font-semibold hover:underline text-xl ${
                      isActive ? "text-blue-600" : "text-black"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
