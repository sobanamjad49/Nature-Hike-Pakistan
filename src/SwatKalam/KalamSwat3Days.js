import React, { useEffect, useState } from "react";
import { Kalam3DaysImages, Kalam3DaysData } from "../travelData";

function Kalam3Days() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openIndex, setOpenIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingStatus, setBookingStatus] = useState(null); // For success/error messages

  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Handle form submission
  const handleBookingSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = {
      tourName: "Kalam3Days", // FIXED TOUR NAME
      fullName: form.fullName.value,
      contactNumber: form.contactNumber.value,
      emergencyContactNumber: form.emergencyContactNumber.value,
      email: form.email.value,
      cnic: form.cnic.value,
      departureCity: form.departureCity.value,
      numberOfAdults: Number(form.numberOfAdults.value),
      numberOfKids: Number(form.numberOfKids.value),
      agreedToTerms: form.agreedToTerms.checked,
    };

    try {
      const res = await fetch("http://localhost:4000/api/bookings/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        setBookingStatus({
          success: false,
          message: errorData.message || "Booking failed",
        });
        return;
      }

      await res.json();
      setBookingStatus({ success: true, message: "Booking successful!" });
      form.reset();
    } catch (err) {
      console.error("Booking error:", err);
      setBookingStatus({
        success: false,
        message: "Booking failed due to network error",
      });
    }
  };

  return (
    <div>
      {/* Images */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 m-6">
        {Kalam3DaysImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Kalam 3 days"
            className="rounded-xl w-full h-40 md:h-60 lg:h-full object-cover"
          />
        ))}
      </div>

      {/* Title & Duration */}
      <div className="bg-[#faf5ee] p-3">
        <div className="flex flex-col lg:flex-row justify-between m-7">
          <p className="text-3xl font-semibold lg:w-[50%]">
            3 DAYS KALAM, MAHODAND LAKE, AND MALAM JABBA
          </p>
          <div className="font-medium mt-3">
            Duration <br /> 3 days
          </div>
        </div>
      </div>

      {/* Package Details */}
      <p className="text-4xl font-bold text-red-500 font-mono px-9 py-5">
        Package Details
      </p>
      <p className="text-3xl font-semibold font-mono px-9 py-5">Pricing:</p>
      <span className="p-9 text-xl">
        <strong>Quad Sharing:</strong> PKR 40,000/person
      </span>
      <br />
      <span className="p-9 text-xl">
        <strong>Couple Price:</strong> PKR 90,000
      </span>

      {/* Itinerary FAQ */}
      <p className="text-3xl text-red-500 font-semibold font-mono px-9 py-5">
        Itinerary
      </p>
      <div className="mx-auto p-9">
        <h2 className="text-2xl font-bold mb-4">Kalam 3-Day Tour – FAQ</h2>
        {Kalam3DaysData.map((item, index) => (
          <div
            key={index}
            className="border-b bg-[#faf5ee] shadow-md border-gray-200"
          >
            <button
              className="w-full text-left m-2 text-xl py-3 px-6 font-medium flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              {item.day}
              <span>{openIndex === index ? "-" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="bg-white text-sm text-gray-700 m-2 py-3 px-6">
                {item.details}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Services Included */}
      <div className="max-w-6xl mx-auto p-4 text-gray-800 space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white shadow rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">Services Included</h2>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Pick & Drop from your desired location</li>
              <li>Luxury booked transport</li>
              <li>Jeep charges for off-road (as required)</li>
              <li>Accommodation at on-panel or selected hotels</li>
              <li>Professional Tour Guide (if needed)</li>
              <li>Driver + Expenses</li>
              <li>Daily Breakfasts</li>
              <li>Tolls, Taxes & Fuel</li>
              <li>24/7 On-call Assistance</li>
            </ul>
          </div>

          {/* Places of Attraction */}
          <div className="bg-white shadow rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">Places of Attraction</h2>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Malam Jabba Ski Resort</li>
              <li>Kalam, Ushu Forest & Matiltan</li>
              <li>Mahodand/Saifullah (seasonal, by jeep)</li>
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-2">Contact Information</h2>
          <p className="text-sm">
            Phone: <strong>0303-4364467 / 0310-6406568</strong>
          </p>
          <p className="text-sm">
            Email: <strong>info@naturehikepakistan.pk</strong>
          </p>
        </div>
      </div>

      {/* BOOK THIS TOUR BUTTON */}
      <div className="flex flex-col items-center justify-center p-4 mb-10">
        <button
          onClick={openModal}
          className="bg-[#9fbd21] hover:bg-[#fcc900] text-white font-bold py-3 px-6 rounded transition-colors duration-300"
        >
          BOOK THIS TOUR
        </button>

        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
            <div className="bg-white w-full max-w-lg p-6 rounded-lg relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 font-bold"
              >
                ×
              </button>
              <h2 className="text-2xl font-semibold mb-2">
                Fill out the form to book the Tour
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Required fields are marked *
              </p>

              <form
                onSubmit={handleBookingSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <div>
                  <label className="block font-medium mb-1">Full Name*</label>
                  <input
                    name="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#9fbd21]"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">
                    Contact Number*
                  </label>
                  <input
                    name="contactNumber"
                    type="tel"
                    placeholder="Enter your contact number"
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#9fbd21]"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">
                    Emergency Contact Number*
                  </label>
                  <input
                    name="emergencyContactNumber"
                    type="tel"
                    placeholder="Enter emergency contact number"
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#9fbd21]"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">Email ID</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#9fbd21]"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">CNIC</label>
                  <input
                    name="cnic"
                    type="text"
                    placeholder="Enter your CNIC"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#9fbd21]"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">
                    Departure City
                  </label>
                  <select
                    name="departureCity"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#9fbd21]"
                  >
                    <option value="">Select your city</option>
                    <option>Lahore</option>
                    <option>Islamabad</option>
                    <option>Karachi</option>
                  </select>
                </div>
                <div>
                  <label className="block font-medium mb-1">
                    No. of Adults (8+ years)*
                  </label>
                  <input
                    name="numberOfAdults"
                    type="number"
                    placeholder="Enter number of adults"
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#9fbd21]"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">
                    No. of Kids (2-8 years)
                  </label>
                  <input
                    name="numberOfKids"
                    type="number"
                    placeholder="Enter number of kids"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#9fbd21]"
                  />
                </div>
                <div className="md:col-span-2 flex items-center space-x-2">
                  <input
                    name="agreedToTerms"
                    type="checkbox"
                    required
                    className="w-4 h-4 accent-[#9fbd21]"
                  />
                  <span>I agree to the Terms & Conditions</span>
                </div>
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="bg-[#9fbd21] hover:bg-[#fcc900] text-white font-bold py-3 px-6 rounded w-full transition-colors duration-300"
                  >
                    Book this Tour
                  </button>
                </div>
              </form>

              {bookingStatus && (
                <p
                  className={`mt-4 text-center font-semibold ${
                    bookingStatus.success ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {bookingStatus.message}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Kalam3Days;
