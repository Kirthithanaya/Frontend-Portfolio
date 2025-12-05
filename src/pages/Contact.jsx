// src/pages/Contact.jsx
import { useState } from "react";
import { toast } from "react-toastify";
import { sendContactMessage } from "../service/Contact";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendContactMessage(formData);
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4 py-16">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col gap-4"
      >
        <h2 className="text-2xl text-center font-bold mb-4 text-white">
          Contact Me
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-3 rounded border border-gray-600 bg-gray-900 text-white focus:outline-none focus:border-blue-500"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-3 rounded border border-gray-600 bg-gray-800 text-white focus:outline-none focus:border-blue-500"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="6"
          required
          className="p-3 rounded border border-gray-600 bg-gray-900 text-white focus:outline-none focus:border-blue-500 resize-none"
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
