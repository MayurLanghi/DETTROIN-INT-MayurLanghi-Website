const Contact = () => {
  return (
    <section className="py-24 bg-blue-600 text-white">
      <div className="max-w-5xl mx-auto px-8 text-center">
        <h2 className="text-5xl font-bold">
          Admissions Open for 2026
        </h2>

        <p className="mt-6 text-xl text-blue-100">
          Give your child the opportunity to learn, grow,
          and succeed in a nurturing educational environment.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition">
            Apply Now
          </button>

          <button className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition">
            Book a Campus Tour
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact; 