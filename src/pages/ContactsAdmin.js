import React, { useEffect, useState } from "react";
import axios from "axios";

const ContactsAdmin = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingContact, setEditingContact] = useState(null);
  const [search, setSearch] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  // Fetch contacts
  const fetchContacts = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:4000/api/contact");
      setContacts(res.data.data || res.data || []);
    } catch (err) {
      console.error("Error fetching contacts:", err);
      alert("Error fetching contacts");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // Form input handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit create/update
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingContact) {
        await axios.put(
          `http://localhost:4000/api/contact/${editingContact._id}`,
          formData
        );
        alert("Contact updated!");
      } else {
        await axios.post("http://localhost:4000/api/contact", formData);
        alert("Contact added!");
      }
      resetForm();
      setShowModal(false);
      fetchContacts();
    } catch (err) {
      console.error(err);
      alert("Error saving contact");
    }
  };

  // Reset form
  const resetForm = () => {
    setFormData({ fullName: "", email: "", phone: "", message: "" });
    setEditingContact(null);
  };

  // Edit contact
  const handleEdit = (contact) => {
    setEditingContact(contact);
    setFormData({
      fullName: contact.fullName || "",
      email: contact.email || "",
      phone: contact.phone || "",
      message: contact.message || "",
    });
    setShowModal(true);
  };

  // Delete contact
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this contact?")) return;
    try {
      await axios.delete(`http://localhost:4000/api/contact/${id}`);
      alert("Contact deleted!");
      fetchContacts();
    } catch (err) {
      console.error(err);
      alert("Error deleting contact");
    }
  };

  const filteredContacts = contacts.filter(
    (c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()) ||
      c.phone.includes(search)
  );

  if (loading) return <div className="p-8">Loading...</div>;

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 className="text-3xl font-bold text-gray-800">Contacts Dashboard</h1>
          <span className="text-gray-500 text-sm">
      Total Bookings: {contacts.length}
    </span>
        <div className="flex gap-2 flex-wrap">
          <input
            type="text"
            placeholder="Search contacts..."
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
            + Add Contact
          </button>
        </div>
      </div>

      {/* Contacts Cards */}
     {/* Contacts Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {filteredContacts.length === 0 && (
    <p className="text-gray-500 col-span-full">No contacts found.</p>
  )}
  {filteredContacts.map((contact) => (
    <div
      key={contact._id}
      className="bg-white shadow-md rounded-xl p-4 flex flex-col justify-between hover:shadow-lg transition"
    >
      <div className="space-y-2">
        <h2 className="text-lg font-bold">{contact.fullName}</h2>
        <p className="text-sm text-gray-500">{contact.email}</p>
        <p className="text-sm text-gray-500">{contact.phone}</p>
        <p className="text-gray-700 text-sm truncate">{contact.message}</p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="text-xs text-gray-400">
          Created: {new Date(contact.createdAt).toLocaleString()}
        </div>
        <div className="text-xs text-gray-400">
          Updated: {new Date(contact.updatedAt).toLocaleString()}
        </div>
      </div>
      <div className="flex justify-end gap-2 mt-2">
        <button
          onClick={() => handleEdit(contact)}
          className="text-blue-600 hover:text-blue-800 text-sm"
        >
          Edit
        </button>
        <button
          onClick={() => handleDelete(contact._id)}
          className="text-red-600 hover:text-red-800 text-sm"
        >
          Delete
        </button>
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
                {editingContact ? "Edit Contact" : "Add Contact"}
              </h2>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {["fullName", "email", "phone", "message"].map((field) => (
                <div key={field}>
                  <label className="block text-sm mb-1 capitalize">{field}</label>
                  {field === "message" ? (
                    <textarea
                      name={field}
                      value={formData[field]}
                      onChange={handleInputChange}
                      rows="4"
                      required
                      className="w-full border rounded-lg px-3 py-2"
                    />
                  ) : (
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      value={formData[field]}
                      onChange={handleInputChange}
                      required
                      className="w-full border rounded-lg px-3 py-2"
                    />
                  )}
                </div>
              ))}
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
                  {editingContact ? "Update" : "Create"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactsAdmin;
