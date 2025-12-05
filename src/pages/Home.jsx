// src/pages/Home.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import DownloadCV from "../components/DownloadCV";

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Left Side - Text */}
      <motion.div
        className="flex-1 mb-10 md:mb-0"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Hi, I’m <span className="text-indigo-400">Kiruthika</span>
          <br />
          Full Stack Developer
        </h1>

        <p className="text-lg text-gray-300 leading-relaxed mb-8">
          I specialize in building modern, scalable, and user-friendly web
          applications using the{" "}
          <span className="font-semibold text-indigo-400">MERN Stack</span>.
          Passionate about crafting interactive experiences with clean code and
          elegant design.
        </p>

        <div className="flex gap-4">
          <Link
            to="/about"
            className="px-6 py-3 bg-indigo-500 text-white font-semibold rounded-xl shadow-md hover:bg-indigo-600 transition duration-300"
          >
            About Me
          </Link>

          <Link
            to="/projects"
            className="px-6 py-3 border border-indigo-400 text-indigo-400 font-semibold rounded-xl hover:bg-indigo-400 hover:text-white transition duration-300"
          >
            View Projects
          </Link>
        </div>
      </motion.div>

      {/* Right Side - Image */}
      <motion.div
        className="flex-1 flex justify-center"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src="https://img.freepik.com/free-vector/programmer-working-laptop-computer-with-code-screen_23-2148277397.jpg"
          alt="Developer"
          className="w-80 h-80 md:w-[420px] md:h-[420px] object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </motion.div>

      {/* Floating Download Button */}
      <DownloadCV />
    </section>
  );
};

export default Home;
