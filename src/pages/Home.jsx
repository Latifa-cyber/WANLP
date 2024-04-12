import Header from "../components/Header";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Preview from "../components/Preview";

function Home() {
  return (
    <div className="backg">
      <Header />
      <Navbar />
      <Hero />
      <Preview />
    </div>
  );
}

export default Home;
