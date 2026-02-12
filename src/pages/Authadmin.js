import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AuthAdmin() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:4000/api/admin/login", form);

      if (res.data.success && res.data.token) {
        localStorage.setItem("adminToken", res.data.token); // save token
        navigate("/dashboard"); // redirect to dashboard
      } else {
        setError("Invalid response from server");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="p-8 shadow-xl bg-white w-96 rounded-xl"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>

        {error && <p className="text-red-500 text-center mb-2">{error}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 mt-3 border rounded"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full p-3 mt-3 border rounded"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default AuthAdmin;
