import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full h-auto py-4  bg-blue-600">
      <div className="flex justify-center items-center">
        <h1 className="md:text-2xl text-lg font-semibold text-white md:px-16 px-4">
          تجنب السرقة العلمية وقدم عملك بكل ثقة
        </h1>
        <Link to="/check">
          <button className="checkBtn">
            تحقق الآن
          </button>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
