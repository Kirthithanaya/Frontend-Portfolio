// src/pages/Certifications.jsx
import React from "react";

const Certifications = () => {
  const certifications = [
    {
      title: "Full Stack Software Development Program",
      organization: "GUVI Geek Networks at IIT Chennai",
    },
    {
      title: "Campus How to CSS",
      organization: "",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-800 text-white px-8 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Certifications</h1>
      <div className="max-w-3xl mx-auto space-y-6">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold mb-2">{cert.title}</h2>
            {cert.organization && (
              <p className="text-gray-400">Organization: {cert.organization}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
