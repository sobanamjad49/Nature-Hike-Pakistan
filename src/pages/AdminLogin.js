import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminLogin = () => {
  const [admins, setAdmins] = useState([]);
  const [form, setForm] = useState({ email: "", password: "" });
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("adminToken");
  const headers = { Authorization: `Bearer ${token}` };

  // Fetch all admins
  const fetchAdmins = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/admin/all", { headers });
      if (res.data.success) setAdmins(res.data.admins);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchAdmins();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Create or Update admin
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (editingId) {
        // Update
        await axios.put(`http://localhost:4000/api/admin/${editingId}`, form, { headers });
        setEditingId(null);
      } else {
        // Create
        await axios.post("http://localhost:4000/api/admin/register", form, { headers });
      }
      setForm({ email: "", password: "" });
      fetchAdmins();
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // Delete admin
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this admin?")) return;
    try {
      await axios.delete(`http://localhost:4000/api/admin/${id}`, { headers });
      fetchAdmins();
    } catch (err) {
      console.error(err);
    }
  };

  // Edit admin
  const handleEdit = (admin) => {
    setForm({ email: admin.email, password: "" });
    setEditingId(admin._id);
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Admin Dashboard</h2>
    <span className="text-gray-500 text-sm">
      Total Bookings: {admins.length}
    </span>
      {/* Form */}
      <form onSubmit={handleSubmit} className="mb-6 p-4 border rounded shadow-md w-full max-w-md">
        <h3 className="text-xl font-semibold mb-2">{editingId ? "Edit Admin" : "Add Admin"}</h3>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder={editingId ? "New Password (optional)" : "Password"}
          value={form.password}
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
          required={!editingId}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Saving..." : editingId ? "Update Admin" : "Add Admin"}
        </button>
      </form>

      {/* Admin List */}
      <table className="w-full border rounded shadow-md">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {admins.map((admin) => (
            <tr key={admin._id} className="text-center">
              <td className="p-2 border">{admin.email}</td>
              <td className="p-2 border flex justify-center gap-2">
                <button
                  className="bg-yellow-400 px-2 py-1 rounded hover:bg-yellow-500"
                  onClick={() => handleEdit(admin)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 px-2 py-1 rounded hover:bg-red-600"
                  onClick={() => handleDelete(admin._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminLogin;
