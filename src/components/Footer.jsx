import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-white">
              Excellence School
            </h2>
            <p className="mt-5 leading-7">
              Excellence School is committed to nurturing young minds
              through quality education, innovation, and holistic
              development.
            </p>
            <div className="flex gap-4 mt-8">
              <div className="h-10 w-10 rounded-full bg-blue-600 flex justify-center items-center cursor-pointer hover:scale-110 transition">
                <FaFacebookF />
              </div>
              <div className="h-10 w-10 rounded-full bg-pink-600 flex justify-center items-center cursor-pointer hover:scale-110 transition">
                <FaInstagram />
              </div>
              <div className="h-10 w-10 rounded-full bg-blue-700 flex justify-center items-center cursor-pointer hover:scale-110 transition">
                <FaLinkedinIn />
              </div>
              <div className="h-10 w-10 rounded-full bg-red-600 flex justify-center items-center cursor-pointer hover:scale-110 transition">
                <FaYoutube />
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-white">
              Quick Links
            </h3>
            <ul className="space-y-4 mt-6">
              <li>
                <Link to="/" className="hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white">About</Link>
              </li>
              <li>
                <Link to="/academics" className="hover:text-white">Programs</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white">Admissions</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white">Gallery</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-white">
              Programs
            </h3>
            <ul className="space-y-4 mt-6">
              <li>Primary School</li>
              <li>Middle School</li>
              <li>Secondary School</li>
              <li>Senior Secondary</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-white">
              Contact
            </h3>
            <div className="space-y-6 mt-6">
              <div className="flex gap-4">
                <FaMapMarkerAlt className="text-blue-500 mt-1" />
                <p>123 Education Street, New Delhi, India</p>
              </div>
              <div className="flex gap-4">
                <FaPhoneAlt className="text-blue-500 mt-1" />
                <p>+91 9876543210</p>
              </div>
              <div className="flex gap-4">
                <FaEnvelope className="text-blue-500 mt-1" />
                <p>info@excellenceschool.com</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-slate-700 my-12" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>
            2026 Excellence School. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;