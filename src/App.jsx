import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Certifications from "./pages/Certifications ";
import Project from "./pages/Project";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      {/* Navbar always visible */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
