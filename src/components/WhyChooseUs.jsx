import { FaBookOpen, FaLaptopCode, FaShieldAlt, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaBookOpen />,
    title: "Quality Education",
    desc: "Highly qualified faculty delivering academic excellence.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Smart Classrooms",
    desc: "Technology-enabled classrooms for interactive learning.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Safe Campus",
    desc: "24×7 monitored campus with secure environment.",
  },
  {
    icon: <FaUsers />,
    title: "Holistic Growth",
    desc: "Sports, arts and leadership opportunities for every student.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center"
        >
          Why Choose Us
        </motion.h2>
        <p className="text-center text-gray-500 mt-5 max-w-3xl mx-auto">
          We create an inspiring environment where students learn,
          innovate and become future leaders.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 transition"
            >
              <div className="text-5xl text-blue-600">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mt-6">
                {item.title}
              </h3>
              <p className="mt-4 text-gray-500">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;