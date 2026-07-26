import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <section className="pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="text-5xl font-bold">
            About Our School
          </h1>
          <p className="mt-8 text-lg leading-8 text-gray-600">
            Excellence School is committed to providingquality education through innovation,discipline, and holistic development.
          </p>
          <div className="grid md:grid-cols-2 gap-12 mt-20">
            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800"
              className="rounded-3xl shadow-xl"
              alt="School"
            />
            <div>
              <h2 className="text-3xl font-bold">
                Our Mission
              </h2>
              <p className="mt-6 text-gray-600 leading-8">
                To inspire lifelong learners through academic excellence, leadership,creativity, and innovation.
              </p>
              <h2 className="text-3xl font-bold mt-10">
                Our Vision
              </h2>
              <p className="mt-6 text-gray-600 leading-8">
                Building responsible global citizens through quality education.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
