// src/pages/Projects.jsx
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Full Stack Hostel Management System",
    description:
      "A complete MERN stack project with room allocation, billing, and notifications.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://hoatel-management-system-frontend-c.vercel.app/",
    github: "https://github.com/Kirthithanaya",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "Personal portfolio to showcase projects, skills, and experience using modern web technologies.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    link: "https://your-portfolio-link.com",
    github: "https://github.com/Kirthithanaya",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white py-16 px-6">
      <h1 className="text-4xl font-bold text-center mb-12">
        My <span className="text-blue-500">Projects</span>
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-gray-800 rounded-2xl border border-gray-700 shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between mt-4">
                <a
                  href={project.link}
                  className="text-blue-400 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  className="text-gray-400 hover:text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
