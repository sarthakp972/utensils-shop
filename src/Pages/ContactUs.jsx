import { useState } from "react";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: "your_service_id", // Replace with your EmailJS service ID
          template_id: "your_template_id", // Replace with your EmailJS template ID
          user_id: "your_user_id", // Replace with your EmailJS user ID
          template_params: {
            ...formData,
            recipient_email: "sarthakpatwa@gmail.com", // Add recipient email
          },
        }),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8  rounded-lg shadow-lg m-5" style={{ backgroundColor: '#f9f5ec'}}>
      <h1 className="text-3xl font-bold text-center mb-8 text-[#b01c1a]">Contact Us</h1>

      {/* Social Links */}
      <div className="flex justify-center space-x-6 mb-8">
        <a
          href="https://wa.me/7649062706"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-[#b01c1a] text-white rounded-lg hover:bg-red-700 transition-all duration-300"
        >
          <FaWhatsapp size={24} />
        </a>
        <a
          href="https://facebook.com/yourfacebook"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-[#b01c1a] text-white rounded-lg hover:bg-red-700 transition-all duration-300"
        >
          <FaFacebookF size={24} />
        </a>
        <a
          href="https://instagram.com/yourinstagram"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-[#b01c1a] text-white rounded-lg hover:bg-red-700 transition-all duration-300"
        >
          <FaInstagram size={24} />
        </a>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block font-medium mb-2 text-[#b01c1a]" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b01c1a]"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label className="block font-medium mb-2 text-[#b01c1a]" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b01c1a]"
            placeholder="Your Email"
          />
        </div>

        <div>
          <label className="block font-medium mb-2 text-[#b01c1a]" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b01c1a]"
            placeholder="Your Message"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 text-white bg-[#b01c1a] rounded-lg hover:bg-red-700 transition-all duration-300 font-bold"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
