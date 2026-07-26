import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import Programs from "../components/Programs";
import Facilities from "../components/Facilities";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Programs />
      <Facilities />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;