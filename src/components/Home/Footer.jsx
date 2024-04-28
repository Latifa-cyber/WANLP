import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full h-auto p-5 py-7 bg-blue-600">
      <div className="flex justify-center items-center">
        <h1 className="md:text-3xl text-lg font-bold text-white md:px-16 px-4">
          تجنب السرقة العلمية وقدم عملك بكل ثقة
        </h1>
        <Link to="/check">
          <button className="min-w-24 border-2 border-white md:px-10 md:py-3 py-2 rounded-xl text-white font-bold md:text-xl">
            تحقق الآن
          </button>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
