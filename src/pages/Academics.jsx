import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const classes = [
  "Primary School",
  "Middle School",
  "Secondary School",
  "Senior Secondary",
];

const Academics = () => {
  return (
    <>
      <Navbar />

      <section className="pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="text-5xl font-bold text-center">
            Academic Programs
          </h1>
          <div className="grid md:grid-cols-2 gap-10 mt-20">
            {classes.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg p-10"
              >
                <h2 className="text-3xl font-bold">
                  {item}
                </h2>

                <p className="mt-5 text-gray-600">
                  Comprehensive curriculum withmodern teaching methods,experienced faculty, and
                  interactive learning.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Academics;
