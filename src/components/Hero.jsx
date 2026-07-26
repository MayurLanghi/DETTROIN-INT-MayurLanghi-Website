import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1562774053-701939374585?w=1600')",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-8 text-white"
      >
        <h1 className="text-6xl font-bold leading-tight max-w-3xl">
          Inspiring Young Minds for a Better Tomorrow
        </h1>
        <p className="mt-8 text-xl max-w-2xl">
          Empowering students with world-class education,
          innovation, leadership, and lifelong learning.
        </p>
        <div className="mt-10 flex gap-6">
          <button className="bg-blue-600 px-8 py-4 rounded-lg hover:bg-blue-700">
            Apply Now
          </button>
          <button className="border border-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition">
            Explore Campus
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;