import Header from "../components/Header";
import Hero from "../components/Hero";
import Marketing from "../components/Marketing";
import Navbar from "../components/Navbar";
import Preview from "../components/Preview";

function Home() {
  return (
    <div className="backg">
      <Header />
      <Navbar />
      <Hero />
      <Preview />
      <Marketing />
    </div>
  );
}

export default Home;
