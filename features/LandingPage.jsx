import Courses from "../components/Courses";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Courses/>
      <Footer/>
    </>
  );
}

export default LandingPage;
