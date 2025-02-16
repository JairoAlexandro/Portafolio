import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      
      await emailjs.sendForm(
        "service_1g6gu1d", 
        "template_564m19z", 
        e.target as HTMLFormElement,
        "7NfAzuETjAYo0YmXA" 
      );

      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); 
    } catch (error) {
      console.error("Failed to send message:", error);
      alert("There was an error sending the message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full p-4" id="contact">
      <h1
        className="text-4xl text-white font-bold mb-6 border-b-4 border-white p-4"
        style={{
          borderImage:
            "linear-gradient(to right, transparent, white, transparent) 1",
        }}
      >
        Get in Touch
      </h1>
      <div className="md:flex-row md:space-x-6 mb-8">
        <div className="flex-1 text-center bg-[#161616] border-[#0f0f0f] border-2 p-6 rounded-lg shadow-md">
          <div className="flex-1 mt-6 md:mt-0">
            <form
              id="contact-form"
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-2xl font-bold text-white mb-4"
                >
                  Your Name:
                </label>
                <input
                  placeholder="Name"
                  style={{ padding: "0.5rem" }}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full h-10 bg-white rounded-md border-gray-300  border-2 "
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-2xl font-bold text-white mb-4"
                >
                  Your Email:
                </label>
                <input
                  placeholder="Email"
                  style={{ padding: "0.5rem" }}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full h-10 bg-white rounded-md border-gray-300  border-2 "
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-2xl font-bold text-white mb-4"
                >
                  Your Message:
                </label>
                <textarea
                  placeholder="Your Message"
                  style={{ padding: "0.5rem" }}
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full h-48 bg-white rounded-md border-gray-300  border-2"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-indigo-500 text-white px-6 py-2 rounded-md hover:bg-indigo-600 focus:outline-none"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
          <div className="mt-4 flex justify-center space-x-4">
            <a
              href="https://www.linkedin.com/in/jairo-alexandro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-indigo-500"
            >
              <svg
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.6v5.58z" />
              </svg>
            </a>
            <a
              href="https://github.com/JairoAlexandro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-indigo-500"
            >
              <svg
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0c-6.63 0-12 5.37-12 12 0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23.95-.26 1.97-.39 2.98-.39 1.01 0 2.03.13 2.98.39 2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.65-5.47 5.95.43.37.81 1.1.81 2.22 0 1.6-.01 2.88-.01 3.27 0 .32.22.69.82.58 4.77-1.59 8.21-6.09 8.21-11.39 0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
