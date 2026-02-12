import React, { useEffect, useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Input change handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullName, email, phone, message } = formData;

    if (!fullName || !email || !message) {
      alert("Full Name, Email and Message are required");
      return;
    }

    setLoading(true);
    setStatusMessage("Thank you! Your message has been captured on this page .");
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      message: "",
    });
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return (
    <div className="mt-24">
      {/* HEADER */}
      <div className="bg-blue-900 py-16 text-center">
        <h1 className="text-4xl font-bold text-white">Contact Us</h1>
        <p className="text-gray-200 mt-2">We’re here to help you with your next adventure</p>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-10">
        
        {/* LEFT: CONTACT INFO */}
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Get in Touch</h2>

          <p className="text-gray-700 mb-4">
            Have questions about our tours or booking? Our team is ready to assist you!
          </p>

          <div className="mt-6 space-y-4">
            <p>
              <span className="font-bold text-blue-900">📍 Address:</span>
              Office #12, Plaza Market, Lahore, Pakistan
            </p>

            <p>
              <span className="font-bold text-blue-900">📞 Phone:</span>
              0300-1234567
            </p>

            <p>
              <span className="font-bold text-blue-900">📧 Email:</span>
              info@naturehikepakistan.pk
            </p>

            <p>
              <span className="font-bold text-blue-900">🕒 Timing:</span>
              Monday – Saturday | 10:00 AM – 7:00 PM
            </p>
          </div>
        </div>

        {/* RIGHT: FORM */}
        <div className="bg-white shadow-lg p-6 rounded-md">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Send Us a Message</h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full p-3 border rounded"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full p-3 border rounded"
            />

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full p-3 border rounded"
            />

            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full p-3 border rounded"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-orange-500 duration-300 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
            {statusMessage && (
              <p className="mt-3 text-sm text-green-700 font-semibold">
                {statusMessage}
              </p>
            )}
          </form>
        </div>
      </div>

      {/* MAP */}
      <div className="mt-10">
        <iframe
          className="w-full h-72 md:h-96"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13606.186593825628!2d74.352!3d31.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sLahore!5e0!3m2!1sen!2s!4v000000"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
