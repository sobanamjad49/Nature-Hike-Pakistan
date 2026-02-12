import React, { useEffect, useState } from "react";
import axios from "axios";

const BookingsAdmin = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingBooking, setEditingBooking] = useState(null);
  const [search, setSearch] = useState("");

  const [formData, setFormData] = useState({
    tourName: "",
    fullName: "",
    contactNumber: "",
    emergencyContactNumber: "",
    email: "",
    cnic: "",
    departureCity: "",
    numberOfAdults: 1,
    numberOfKids: 0,
    agreedToTerms: false,
    bookingStatus: "pending",
  });

  // Fetch Bookings
  const fetchBookings = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:4000/api/bookings");
      setBookings(res.data || []);
    } catch (err) {
      console.error(err);
      alert("Error fetching bookings");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : type === "number"
          ? parseInt(value) || 0
          : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingBooking) {
        await axios.put(
          `http://localhost:4000/api/bookings/${editingBooking._id}`,
          formData
        );
        alert("Booking updated!");
      } else {
        await axios.post("http://localhost:4000/api/bookings", formData);
        alert("Booking created!");
      }
      resetForm();
      setShowModal(false);
      fetchBookings();
    } catch (err) {
      console.error(err);
      alert("Error saving booking");
    }
  };

  const resetForm = () => {
    setFormData({
      tourName: "",
      fullName: "",
      contactNumber: "",
      emergencyContactNumber: "",
      email: "",
      cnic: "",
      departureCity: "",
      numberOfAdults: 1,
      numberOfKids: 0,
      agreedToTerms: false,
      bookingStatus: "pending",
    });
    setEditingBooking(null);
  };

  const handleEdit = (booking) => {
    setEditingBooking(booking);
    setFormData({ ...booking });
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Do you really want to delete this booking?")) return;
    try {
      await axios.delete(`http://localhost:4000/api/bookings/${id}`);
      alert("Booking deleted!");
      fetchBookings();
    } catch (err) {
      console.error(err);
      alert("Error deleting booking");
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-yellow-100 text-yellow-800";
    }
  };

  const filteredBookings = bookings.filter(
    (b) =>
      b.fullName.toLowerCase().includes(search.toLowerCase()) ||
      b.tourName.toLowerCase().includes(search.toLowerCase()) ||
      b.contactNumber.includes(search)
  );

  if (loading) return <div className="p-8">Loading...</div>;

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 className="text-3xl font-bold text-gray-800">Bookings Dashboard</h1>
          <span className="text-gray-500 text-sm">
      Total Bookings: {bookings.length}
    </span>
        <div className="flex gap-2 flex-wrap">
          <input
            type="text"
            placeholder="Search bookings..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={() => {
              resetForm();
              setShowModal(true);
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium"
          >
            + Add Booking
          </button>
        </div>
      </div>

      {/* Booking Cards */}
    {/* Booking Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {filteredBookings.length === 0 && (
    <p className="text-gray-500 col-span-full">No bookings found.</p>
  )}
  {filteredBookings.map((booking) => (
    <div
      key={booking._id}
      className="bg-white shadow-md rounded-xl p-4 flex flex-col justify-between hover:shadow-lg transition"
    >
      {/* Booking Details */}
      <div className="space-y-1 text-sm">
        <p><span className="font-semibold">Tour Name:</span> {booking.tourName}</p>
        <p><span className="font-semibold">Full Name:</span> {booking.fullName}</p>
        <p><span className="font-semibold">Contact:</span> {booking.contactNumber}</p>
        <p><span className="font-semibold">Emergency Contact:</span> {booking.emergencyContactNumber}</p>
        <p><span className="font-semibold">Email:</span> {booking.email || "N/A"}</p>
        <p><span className="font-semibold">CNIC:</span> {booking.cnic || "N/A"}</p>
        <p><span className="font-semibold">Departure City:</span> {booking.departureCity || "N/A"}</p>
        <p><span className="font-semibold">Adults:</span> {booking.numberOfAdults}</p>
        <p><span className="font-semibold">Kids:</span> {booking.numberOfKids}</p>
        <p><span className="font-semibold">Agreed Terms:</span> {booking.agreedToTerms ? "Yes" : "No"}</p>
      </div>

      {/* Status & Actions */}
      <div className="flex justify-between items-center mt-4">
        <span
          className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
            booking.bookingStatus
          )}`}
        >
          {booking.bookingStatus}
        </span>
        <div className="flex gap-2">
          <button
            onClick={() => handleEdit(booking)}
            className="text-blue-600 hover:text-blue-800 text-sm"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(booking._id)}
            className="text-red-600 hover:text-red-800 text-sm"
          >
            Delete
          </button>
        </div>
      </div>

      <div className="text-xs text-gray-400 mt-2">
        Created: {new Date(booking.createdAt).toLocaleString()}
      </div>
      <div className="text-xs text-gray-400">
        Updated: {new Date(booking.updatedAt).toLocaleString()}
      </div>
    </div>
  ))}
</div>


      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b">
              <h2 className="text-2xl font-bold">
                {editingBooking ? "Edit Booking" : "Add Booking"}
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {[
                "tourName",
                "fullName",
                "contactNumber",
                "emergencyContactNumber",
                "email",
                "cnic",
                "departureCity",
              ].map((key) => (
                <div key={key}>
                  <label className="block text-sm mb-1 capitalize">{key.replace(/([A-Z])/g, " $1")}</label>
                  <input
                    type="text"
                    name={key}
                    value={formData[key]}
                    onChange={handleInputChange}
                    className="w-full border rounded-lg px-3 py-2"
                    required
                  />
                </div>
              ))}

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">Number of Adults</label>
                  <input
                    type="number"
                    name="numberOfAdults"
                    min="1"
                    value={formData.numberOfAdults}
                    onChange={handleInputChange}
                    className="w-full border rounded-lg px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Number of Kids</label>
                  <input
                    type="number"
                    name="numberOfKids"
                    min="0"
                    value={formData.numberOfKids}
                    onChange={handleInputChange}
                    className="w-full border rounded-lg px-3 py-2"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-1">Status</label>
                <select
                  name="bookingStatus"
                  value={formData.bookingStatus}
                  onChange={handleInputChange}
                  className="w-full border rounded-lg px-3 py-2"
                >
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="agreedToTerms"
                  checked={formData.agreedToTerms}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                <span className="text-sm">Agreed to Terms</span>
              </div>

              <div className="flex justify-end gap-4 border-t pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-6 py-2 border rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  {editingBooking ? "Update" : "Create"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingsAdmin;
