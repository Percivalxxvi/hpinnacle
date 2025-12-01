import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contactform = ({ title = "Contact Us" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccess(false);

     emailjs
       .send(
         "hpinnacle12",
         "template_ib5a78k",
         formData,
         "kZzq9ZD2wXTBv6_YU" 
       )
       .then(
         (result) => {
           console.log("✅ Email sent:", result.text);
           setSuccess(true);
           setIsSubmitting(false);
           setFormData({ name: "", email: "", message: "" });
         },
         (error) => {
           console.error("❌ Email failed:", error.text);
           setError(true);
           setIsSubmitting(false);
         }
       );
  };
  

  return (
    <div className="flex flex-col items-center justify-center bg-[#3e7742] w-[95%] h-fit mt-3 mb-3">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col shadow-xl lg:w-fit w-4/4 items-center justify-center gap-2"
      >
        <h2 className="text-4xl text-[gold] text-center">{title}</h2>

        {/* Name Field */}
        <div className="lg:w-120 w-4/4">
          <label className="block text-[gold] font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            placeholder=" Your Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full h-10 px-2 py-2 border border-gray-900 rounded-sm focus:outline-none focus:ring-2 focus:ring-[gold] bg-gray-200"
          />
        </div>

        {/* Email Field */}
        <div className="mb-2 lg:w-120 w-4/4">
          <label className="block text-[gold] font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            placeholder=" you@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full h-10 px-2 py-2 border border-gray-900 rounded-sm focus:outline-none focus:ring-2 focus:ring-[gold] bg-gray-200"
          />
        </div>

        {/* Message Field */}
        <div className="mb-2 lg:w-120 w-4/4">
          <label className="block text-[gold] font-medium mb-2">Message</label>
          <textarea
            name="message"
            placeholder=" Write your message here..."
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
            className="w-full h-50 px-2 py-2 border border-gray-900 rounded-sm focus:outline-none focus:ring-2 focus:ring-[gold] bg-gray-200"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-10 bg-[gold] text-[#3e7742] font-semibold rounded-md hover:bg-[darkgoldenrod] transition duration-300 disabled:opacity-60 active:bg-yellow-800 cursor-pointer"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {/* Success Message */}
        {success && (
          <p className="text-white text-center mt-4 font-medium">
            ✅ Message sent successfully!
          </p>
        )}
      </form>
    </div>
  );
};

export default Contactform;
