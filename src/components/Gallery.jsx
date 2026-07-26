import { motion } from "framer-motion";

const galleryImages = [
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800",
  "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=800",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800",
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800",
  "https://images.unsplash.com/photo-1588072432836-e10032774350?w=800",
  "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800",
];

const Gallery = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-5xl font-bold text-center">
          School Gallery
        </h2>
        <p className="text-center text-gray-500 mt-5 max-w-2xl mx-auto">
          A glimpse into our vibrant campus life, classrooms,
          extracurricular activities, and memorable events.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-3xl shadow-xl"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="h-72 w-full object-cover hover:scale-110 transition duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;