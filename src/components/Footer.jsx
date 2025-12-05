// src/components/Footer.jsx
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-20 mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Kiruthika</h2>
          <p className="text-gray-400">
            Full Stack Developer passionate about building modern, scalable, and
            user-friendly applications.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-indigo-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-indigo-400">
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-indigo-400">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/skills" className="hover:text-indigo-400">
                Skills
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-indigo-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Connect</h3>
          <div className="flex gap-5 text-2xl">
            <a
              href="https://github.com/Kirthithanaya"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/kiruthika-kasinathan/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition duration-300"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="kkeerthika546@gmail.com"
              className="hover:text-white transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-500">
        © {new Date().getFullYear()} Kiruthika — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
