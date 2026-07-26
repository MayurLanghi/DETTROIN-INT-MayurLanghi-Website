import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Parent",
    review:
      "The teachers are incredibly supportive, and my child has grown both academically and personally.",
  },
  {
    name: "Michael Brown",
    role: "Parent",
    review:
      "Excellent infrastructure, caring staff, and a wonderful learning environment for every student.",
  },
  {
    name: "Emily Wilson",
    role: "Alumni",
    review:
      "The school prepared me with confidence, leadership, and lifelong friendships.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-5xl font-bold text-center">
          What Parents Say
        </h2>
        <div className="grid md:grid-cols-3 gap-10 mt-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8"
            >
              <FaQuoteLeft className="text-blue-600 text-4xl" />
              <p className="mt-6 text-gray-600 leading-7">
                {testimonial.review}
              </p>
              <div className="mt-8">
                <h3 className="font-bold text-xl">
                  {testimonial.name}
                </h3>
                <p className="text-gray-500">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;