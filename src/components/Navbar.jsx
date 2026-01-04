import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-[#27AE60] font-semibold block px-3 py-2 rounded transition"
      : "text-white hover:text-[#27AE60] block px-3 py-2 rounded transition";

  return (
    <nav className="bg-[#1E3932] shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            src="/images/logo1.jpeg"
            alt="Kitchen Store Logo"
            className="h-12 w-12 object-cover rounded-full"
          />
          <h1 className="text-xl font-bold text-white whitespace-nowrap md:text-2xl">
            Kitchen Store
          </h1>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white hover:text-[#27AE60] focus:outline-none"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <div className="hidden md:flex space-x-6 text-base">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/privacy-policy" className={linkClass}>Privacy Policy</NavLink>
          <NavLink to="/terms" className={linkClass}>Terms & Conditions</NavLink>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#144232] border-t border-[#27AE60]">
          <NavLink to="/" className={linkClass} onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/privacy-policy" className={linkClass} onClick={() => setMenuOpen(false)}>Privacy Policy</NavLink>
          <NavLink to="/terms" className={linkClass} onClick={() => setMenuOpen(false)}>Terms & Conditions</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
