import { useState } from "react";
import { FaGraduationCap, FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Programs", to: "/academics" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive ? "text-blue-600" : "hover:text-blue-600";

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">
        <Link to="/" className="flex items-center gap-3">
          <FaGraduationCap className="text-blue-600 text-3xl" />
          <h1 className="text-2xl font-bold">Excellence School</h1>
        </Link>

        <ul className="hidden md:flex gap-10 font-medium">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={linkClass}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="hidden md:inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Apply Now
        </Link>

        <button
          className="md:hidden text-2xl text-blue-600"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-1 px-8 pb-6 font-medium bg-white">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={linkClass}
                onClick={() => setMenuOpen(false)}
              >
                <div className="py-3 border-b border-gray-100">
                  {link.label}
                </div>
              </NavLink>
            </li>
          ))}
          <li className="pt-4">
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="block text-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Apply Now
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
