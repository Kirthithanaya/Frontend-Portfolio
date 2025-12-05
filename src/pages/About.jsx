import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About <span className="text-indigo-500">Me</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg text-gray-300 leading-relaxed mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Hi 👋 I'm{" "}
          <span className="text-indigo-400 font-semibold">Kiruthika</span>, a
          passionate{" "}
          <span className="text-indigo-400 font-semibold">
            Full Stack Developer
          </span>
          who loves building modern web applications with the MERN stack. My
          goal is to create smooth, user-friendly, and scalable digital
          experiences.
        </motion.p>

        {/* Skills Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {[
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "JavaScript",
            "Tailwind CSS",
            "Git & GitHub",
          ].map((skill, i) => (
            <motion.div
              key={i}
              className="bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-indigo-500/50 transition"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <p className="text-indigo-400 font-medium">{skill}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
