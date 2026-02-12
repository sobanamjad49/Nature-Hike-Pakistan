import React from "react";
import { Link, useLocation, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const location = useLocation();

  // Function to check active menu item
  const isActive = (path) => {
    if (path === "/dashboard") {
      // Dashboard active only on exact match
      return location.pathname === "/dashboard";
    }
    // Other menu items active when current path starts with their path
    return location.pathname.startsWith(path);
  };

  const menuItems = [
    { path: "/dashboard", label: "Dashboard", icon: "📊" },
    { path: "/dashboard/tours", label: "Tours", icon: "🗺️" },
    { path: "/dashboard/bookings", label: "Bookings", icon: "📅" },
    { path: "/dashboard/contacts", label: "Contacts", icon: "📧" },
    { path: "/dashboard/adminlogin", label: "Admins", icon: "👤" },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white shadow-xl relative">
        <div className="p-6 border-b border-gray-700">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Admin Panel
          </h2>
          <p className="text-gray-400 text-sm mt-1">Management Dashboard</p>
        </div>

        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive(item.path)
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 w-64 p-4 border-t border-gray-700">
          <button
            onClick={() => {
              localStorage.removeItem("adminToken");
              window.location.href = "/admin/login";
            }}
            className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors font-medium"
          >
            🚪 Logout
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
