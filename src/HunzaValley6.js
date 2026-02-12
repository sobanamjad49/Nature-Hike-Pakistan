import React, { useEffect, useState } from "react";
import { Hunza6DaysImages, Hunza6FaqData } from "./travelData";

function HunzaValley6() {
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
      tourName: "HunzaValley6", // FIXED TOUR NAME
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
      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 m-6">
        {Hunza6DaysImages.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`Hunza Day ${index + 1}`}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>

      {/* Title & Duration */}
      <div className="bg-[#faf5ee] p-3">
        <div className="flex flex-col lg:flex-row justify-between m-7">
          <div>
            <p className="text-3xl font-semibold lg:w-[50%]">
              6 DAYS HUNZA VALLEY, KHUNJERAB PASS, AND NALTAR VALLEY TOUR
            </p>
          </div>
          <div className="font-medium mt-3">
            Duration <br /> 6 days
          </div>
        </div>
      </div>

      {/* Package Details */}
      <p className="text-3xl font-semibold font-mono px-9 py-5">
        Package Details
      </p>
      <p className="px-9 text-lg">
        This tour plan is available for{" "}
        <strong>private customized trips only!</strong> (See the end of the page
        to know what a private customized tour is.)
      </p>

      {/* Itinerary FAQ */}
      <p className="text-3xl text-red-500 font-semibold font-mono px-9 py-5">
        Itinerary
      </p>
      <div className="mx-auto p-9">
        {Hunza6FaqData.map((item, index) => (
          <div
            key={index}
            className="border-b bg-[#faf5ee] shadow-md border-gray-200 mb-2 rounded-lg overflow-hidden"
          >
            <button
              className="w-full text-left m-0 text-xl py-3 px-4 font-medium flex justify-between items-center focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {item.day}
              <span>{openIndex === index ? "-" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="bg-white text-sm text-gray-700 whitespace-pre-line py-3 px-4">
                {item.details}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Services Provided */}
      <p className="text-3xl font-semibold font-mono px-9 py-5">
        Services We Provide
      </p>
      <div className="grid md:grid-cols-2 gap-4 px-9 mb-5">
        {[
          "Pick & Drop: To and from your desired location",
          "Transport: Luxury booked transport for the entire trip",
          "Jeep: As required for the off-road tracks",
          "Accommodation: Night stays at our on-panel hotels or your choice",
          "Tour Guide: A professional and knowledgeable guide to assist you",
          "Driver: A personal driver for the whole trip",
          "Driver Expenses: All driver-related expenses are covered",
          "Breakfasts: Daily complimentary breakfasts at the hotels",
          "Tolls, Taxes, and Fuel: All-inclusive",
          "On Call Assistance: 24/7 during the trip",
        ].map((service, index) => (
          <div key={index} className="bg-white shadow rounded-lg p-4 text-sm">
            {service}
          </div>
        ))}
      </div>

      {/* Places of Attraction */}
      <p className="text-3xl font-semibold font-mono px-9 py-5">
        Places of Attraction
      </p>
      <div className="grid md:grid-cols-2 gap-4 px-9 mb-5">
        {[
          "Hazara Motorway and Karakoram Highway",
          "Hunza Valley and Local Karimabad Market",
          "Khunjerab Pass, Attabad Lake and Tunnels",
          "Altit and Baltit Forts",
          "Local Karimabad Market",
          "Minapin Nagar Valley",
          "Naran, Babusar Pass, and Lulusar Lake",
          "Rakaposhi View-point and Nanga Parbat View-point",
          "3 Mountain Ranges Junction Point",
        ].map((place, index) => (
          <div key={index} className="bg-white shadow rounded-lg p-4 text-sm">
            {place}
          </div>
        ))}
      </div>

      {/* Contact */}
      <div className="px-9 py-4">
        <p>
          <strong>Phone Number:</strong> 0303-4364467 || 0310-6406568
        </p>
        <p>
          <strong>Email ID:</strong> info@naturehikepakistan.pk
        </p>
      </div>

      {/* Private Customized Tour Info */}
      <p className="text-3xl font-semibold font-mono px-9 py-5">
        What is a Private Customized Tour?
      </p>
      <div className="px-9 mb-5 text-sm">
        <p>
          A Private Customized tour is a tour that is altered to the exact needs
          of a group (family, friends, or colleagues), a couple, or an
          individual, with a completely customizable itinerary. Private tours
          offer more flexibility and freedom than public tours, with set dates,
          itineraries, and group sizes.
        </p>
        <p className="mt-2">
          Here are some things to consider about customized private tours:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            Itinerary: Planned around client preferences, including places to
            visit, things to do, and tour category.
          </li>
          <li>
            Group size: Can be for any group size; public tours have limited
            participants.
          </li>
          <li>
            Category of Hotels and Services: Client chooses the grade of
            services and hotel per budget.
          </li>
          <li>
            Travel dates: Can depart on any date; public tours have scheduled
            dates.
          </li>
          <li>
            Price: Customized tours may have higher price than public tours.
          </li>
        </ul>
        <p className="mt-2">
          Contact us to plan and discuss your next exciting private customized
          trip with our team.
        </p>
        <div className="bg-yellow-100 mt-3 border-l-4 border-yellow-500 p-5 rounded-lg md:col-span-2">
          <p className="text-sm">
            Please read the{" "}
            <a className="text-blue-600 underline">Terms & Conditions</a>{" "}
            carefully for better understanding of the trip flow.
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

export default HunzaValley6;
