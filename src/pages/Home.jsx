import Footer from "../components/Home/Footer";
import Header from "../components/Home/Header";
import Hero from "../components/Home/Hero";
import Marketing from "../components/Home/Marketing";
import Navbar from "../components/Navbar";
import Preview from "../components/Home/Preview";

import { features } from "../data/features";

function Home() {
  return (
    <div className="backg">
      <Header />
      <Navbar />
      <Hero />
      <Preview />
      <Marketing features={features} />
      <Footer />
    </div>
  );
}

export default Home;
