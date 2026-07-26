import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const galleryImages = [
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800",
  "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=800",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800",
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800",
  "https://images.unsplash.com/photo-1588072432836-e10032774350?w=800",
  "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800",
];

const GalleryPage = () => {
  return (
    <>
      <Navbar />
      <section className="pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="text-5xl font-bold text-center">
            Campus Gallery
          </h1>
          <p className="text-center text-gray-500 mt-5 max-w-2xl mx-auto">
            A closer look at campus life, classrooms, and events
            throughout the year.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-3xl shadow-xl"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="h-72 w-full object-cover hover:scale-110 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default GalleryPage;
