// src/pages/Skills.jsx
import React from "react";

const Skills = () => {
  const functionalSkills = [
    "Requirement Analysis and Problem Solving",
    "Version control and REST API Integration",
    "User Authentication (JWT)",
    "API validation using Postman",
    "Debugging & Testing",
    "Deployment (Vercel & Render)",
  ];

  const technicalSkills = [
    "Node.js and JavaScript",
    "HTML and CSS",
    "API development",
    "Backend and frontend development",
    "React.js and Redux",
    "Express framework",
    "Database management (MongoDB and MySQL)",
  ];

  return (
    <div className="min-h-screen bg-gray-800 text-white px-6 py-16 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-10">My Skills</h1>

      {/* Functional Skills */}
      <div className="w-full max-w-3xl mb-12">
        <h2 className="text-2xl mb-4 border-b-2 border-gray-600 pb-2">
          Functional Skills
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          {functionalSkills.map((skill, index) => (
            <li key={index} className="bg-gray-900 px-3 py-2 rounded">
              {skill}
            </li>
          ))}
        </ul>
      </div>

      {/* Technical Skills */}
      <div className="w-full max-w-3xl">
        <h2 className="text-2xl mb-4 border-b-2 border-gray-600 pb-2">
          Technical Skills
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          {technicalSkills.map((skill, index) => (
            <li key={index} className="bg-gray-900 px-3 py-2 rounded">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
