import Check from "../components/Check/Check";
import Footer from "../components/Check/Footer";
import Card from "../components/Check/Card";
import Navbar from "../components/Navbar";

function Checkpage() {
  return (
    <div className="backg relative">
      <Navbar />
      <div className="mt-[30px] p-12 md:grid grid-cols-2 gap-2 mx-auto">
        <Check />
        <Card />
      </div>
      <Footer />
    </div>
  );
}

export default Checkpage;
