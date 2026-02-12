import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const DashboardHome = () => {
  const [stats, setStats] = useState({
    tours: 0,
    bookings: 0,
    contacts: 0,
    admins: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [toursRes, bookingsRes, contactsRes, adminsRes] = await Promise.all([
          axios.get("http://localhost:4000/api/tours"),
          axios.get("http://localhost:4000/api/bookings"),
          axios.get("http://localhost:4000/api/contact"),
          axios
            .get("http://localhost:4000/api/admin/all", {
              headers: { Authorization: `Bearer ${localStorage.getItem("adminToken")}` },
            })
            .catch(() => ({ data: { success: true, admins: [] } })),
        ]);

        setStats({
          tours: Array.isArray(toursRes.data) ? toursRes.data.length : 0,
          bookings: Array.isArray(bookingsRes.data) ? bookingsRes.data.length : 0,
          contacts: Array.isArray(contactsRes.data?.data)
            ? contactsRes.data.data.length
            : Array.isArray(contactsRes.data)
            ? contactsRes.data.length
            : 0,
          admins: Array.isArray(adminsRes.data?.admins)
            ? adminsRes.data.admins.length
            : Array.isArray(adminsRes.data)
            ? adminsRes.data.length
            : 0,
        });
      } catch (err) {
        console.error("Error fetching stats:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    { label: "Total Tours", value: stats.tours, icon: "🗺️", color: "blue", link: "/dashboard/tours", bgColor: "bg-blue-100", textColor: "text-blue-600", borderColor: "border-blue-500" },
    { label: "Total Bookings", value: stats.bookings, icon: "📅", color: "green", link: "/dashboard/bookings", bgColor: "bg-green-100", textColor: "text-green-600", borderColor: "border-green-500" },
    { label: "Contact Messages", value: stats.contacts, icon: "📧", color: "purple", link: "/dashboard/contacts", bgColor: "bg-purple-100", textColor: "text-purple-600", borderColor: "border-purple-500" },
    { label: "Admins", value: stats.admins, icon: "👤", color: "orange", link: "/dashboard/adminlogin", bgColor: "bg-orange-100", textColor: "text-orange-600", borderColor: "border-orange-500" },
  ];

  if (loading) {
    return (
      <div className="p-8">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/4"></div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-32 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome to the Admin Management Panel</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((card) => (
          <Link
            key={card.label}
            to={card.link}
            className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 ${card.borderColor}`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium mb-1">{card.label}</p>
                <p className={`text-3xl font-bold ${card.textColor}`}>{card.value}</p>
              </div>
              <div className={`text-5xl ${card.bgColor} rounded-full p-4`}>
                {card.icon}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            to="/dashboard/tours"
            className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg border border-blue-200 transition-colors"
          >
            <div className="text-2xl mb-2">➕</div>
            <div className="font-semibold text-blue-800">Add New Tour</div>
          </Link>
          <Link
            to="/dashboard/bookings"
            className="bg-green-50 hover:bg-green-100 p-4 rounded-lg border border-green-200 transition-colors"
          >
            <div className="text-2xl mb-2">📋</div>
            <div className="font-semibold text-green-800">View Bookings</div>
          </Link>
          <Link
            to="/dashboard/contacts"
            className="bg-purple-50 hover:bg-purple-100 p-4 rounded-lg border border-purple-200 transition-colors"
          >
            <div className="text-2xl mb-2">💬</div>
            <div className="font-semibold text-purple-800">View Messages</div>
          </Link>
          <Link
            to="/dashboard/adminlogin"
            className="bg-orange-50 hover:bg-orange-100 p-4 rounded-lg border border-orange-200 transition-colors"
          >
            <div className="text-2xl mb-2">👥</div>
            <div className="font-semibold text-orange-800">Manage Admins</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;

