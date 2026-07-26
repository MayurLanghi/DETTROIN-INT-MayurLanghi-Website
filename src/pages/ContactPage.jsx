import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <section className="pt-40 pb-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="text-5xl font-bold text-center">
            Contact Us
          </h1>
          <p className="text-center text-gray-500 mt-5">
            We'd love to hear from you.
          </p>
          <div className="grid md:grid-cols-2 gap-16 mt-20">
            <div className="bg-white rounded-3xl shadow-xl p-10">
              <h2 className="text-3xl font-bold mb-8">
                Send a Message
              </h2>
              {submitted && (
                <p className="mb-6 text-green-600 font-medium">
                  Thanks! Your message has been sent.
                </p>
              )}
              <form className="space-y-6" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  rows="6"
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full border p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div>
              <h2 className="text-3xl font-bold">
                Reach Us
              </h2>
              <div className="space-y-8 mt-10">
                <div>
                  <h3 className="font-semibold text-xl">
                    Address
                  </h3>
                  <p className="text-gray-600 mt-2">
                    123 Education Street,
                    New Delhi,
                    India
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-xl">
                    Phone
                  </h3>
                  <p className="text-gray-600 mt-2">
                    +91 9876543210
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-xl">
                    Email
                  </h3>
                  <p className="text-gray-600 mt-2">
                    info@excellenceschool.com
                  </p>
                </div>
              </div>
              <div className="mt-12 rounded-3xl overflow-hidden shadow-xl">
                <iframe
                  title="Google Map"
                  src="https://maps.google.com/maps?q=Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-80 border-0"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactPage;