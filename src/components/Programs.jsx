import { motion } from "framer-motion";

const programs = [
  {
    title: "Primary School",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=700",
    desc: "Building strong academic foundations.",
  },
  {
    title: "Middle School",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700",
    desc: "Encouraging curiosity and innovation.",
  },
  {
    title: "Secondary School",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=700",
    desc: "Preparing students for future careers.",
  },
];

const Programs = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-5xl font-bold text-center">
          Academic Programs
        </h2>
        <div className="grid md:grid-cols-3 gap-10 mt-20">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl"
            >
              <img
                src={program.image}
                alt={program.title}
                className="h-72 w-full object-cover"
              />
              <div className="p-8">
                <h3 className="text-3xl font-bold">
                  {program.title}
                </h3>
                <p className="mt-5 text-gray-500">
                  {program.desc}
                </p>
                <button className="mt-8 text-blue-600 font-semibold hover:text-blue-800 transition">
                  Learn More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;