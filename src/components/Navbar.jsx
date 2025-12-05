// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-800 via-black to-gray-800 shadow-lg text-white px-6 py-4 flex justify-between items-center">
      {/* Logo / Title */}
      <div className="text-2xl font-bold tracking-wide">
        <Link to="/">My Portfolio</Link>
      </div>

      {/* Menu Items */}
      <ul className="flex gap-6 text-lg font-medium">
        <li>
          <Link className="hover:text-yellow-400 transition" to="/">
            Home
          </Link>
        </li>

        <li>
          <Link className="hover:text-yellow-400 transition" to="/about">
            About
          </Link>
        </li>

        <li>
          <Link className="hover:text-yellow-400 transition" to="/skills">
            Skills
          </Link>
        </li>

        <li>
          <Link
            className="hover:text-yellow-400 transition"
            to="/certifications"
          >
            Certifications
          </Link>
        </li>

        <li>
          <Link className="hover:text-yellow-400 transition" to="/projects">
            Projects
          </Link>
        </li>

        <li>
          <Link className="hover:text-yellow-400 transition" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
