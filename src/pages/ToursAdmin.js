
import React, { useEffect, useState, useRef } from "react";
import * as travelData from "../travelData";

const emptyItem = {
  type: "",
  title: "",
  title1: "",
  img: "",
  image: "",
  image1: "",
  price: "",
  duration: "",
  images: [],
  faq: [{ day: "", details: "" }],
  description: [{ title: "", text: "", img: "" }],
  activities: [{ img: "", title: "" }],
  services: [],
  attractions: [],
  otherNames: [],
  rulers: [],
  gates: [],
  link: "",
};

const inputClass = "w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300 outline-none";

const ToursAdmin = () => {
  const [allToursData, setAllToursData] = useState({});
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null); // Store index for edit
  const [currentApiKey, setCurrentApiKey] = useState("");
  const [formData, setFormData] = useState(emptyItem);
  const [message, setMessage] = useState("");
  const [expandedItems, setExpandedItems] = useState({});
  const [search, setSearch] = useState("");
  const sectionRefs = useRef({});
  const [showScrollTop, setShowScrollTop] = useState(false);

  // NOTE: Backend is removed for pics. These endpoints now only describe
  // the key and category; data comes from frontend travelData instead of URLs.
  const apiEndpoints = [
    // Home
    { key: "home", category: "Home" },

    // Skardu Tours
    { key: "Skardu6DaysFaqData", category: "Skardu" },
    { key: "Skardu7DaysImages", category: "Skardu" },
    { key: "Skardu7DaysFaqData", category: "Skardu" },
    { key: "Skardu10DaysImages", category: "Skardu" },
    { key: "Skardu10DaysFaqData", category: "Skardu" },
    { key: "SkarduTours", category: "Skardu" },
    { key: "SkarduAirTours", category: "Skardu" },
    { key: "SkarduPackageTours", category: "Skardu" },
    { key: "SkarduData", category: "Skardu" },
    { key: "SkarduGroup8Images", category: "Skardu" },
    { key: "SkarduGroup8Faq", category: "Skardu" },
    { key: "SkarduAir4DaysImages", category: "Skardu" },
    { key: "SkarduAir4DaysData", category: "Skardu" },

    // General Tours
    { key: "tour", category: "General" },
    { key: "publictour", category: "General" },
    { key: "slides", category: "General" },

    // Hunza Tours
    { key: "HunzaTours", category: "Hunza" },
    { key: "HunzaAirTours", category: "Hunza" },
    { key: "HunzaPackageTours", category: "Hunza" },
    { key: "Hunzadata", category: "Hunza" },
    { key: "HunzaActivities", category: "Hunza" },
    { key: "HunzaDay5", category: "Hunza" },
    { key: "HunzafaqData", category: "Hunza" },
    { key: "Hunza6DaysImages", category: "Hunza" },
    { key: "Hunza6FaqData", category: "Hunza" },
    { key: "HunzaSkarduDay8", category: "Hunza" },
    { key: "HunzaSkarduImages", category: "Hunza" },
    { key: "HunzaSkardu10DaysData", category: "Hunza" },
    { key: "HunzaSkardu10DaysImages", category: "Hunza" },
    { key: "HunzaGroup5images", category: "Hunza" },
    { key: "HunzaGroup5Faq", category: "Hunza" },
    { key: "HunzaGroup8images", category: "Hunza" },
    { key: "HunzaGroup8Faq", category: "Hunza" },

    // Air Tours
    { key: "AirHunzaSkarduFairy10DaysImages", category: "Air Tours" },
    { key: "AirHunzaSkarduFairy10DaysData", category: "Air Tours" },
    { key: "AirHunza4DaysImages", category: "Air Tours" },
    { key: "AirHunza4DaysData", category: "Air Tours" },
    { key: "AirHunza5DaysImages", category: "Air Tours" },
    { key: "AirHunza5DaysData", category: "Air Tours" },
    { key: "AirHunza6DaysImages", category: "Air Tours" },
    { key: "AirHunza6DaysData", category: "Air Tours" },
    { key: "AirHunza7DaysImages", category: "Air Tours" },
    { key: "AirHunza7DaysData", category: "Air Tours" },

    // Fairy Meadows
    { key: "FairyHunzaSkardu15DaysImages", category: "Fairy Meadows" },
    { key: "FairyHunzaSkardu15DaysData", category: "Fairy Meadows" },

    // Swat Kalam Tours
    { key: "SwatTours", category: "Swat Kalam" },
    { key: "SwatPublicTours", category: "Swat Kalam" },
    { key: "SwatData", category: "Swat Kalam" },
    { key: "SwatFaqData", category: "Swat Kalam" },
    { key: "Kalam2DaysImages", category: "Swat Kalam" },
    { key: "Kalam3DaysImages", category: "Swat Kalam" },
    { key: "Kalam4DaysImages", category: "Swat Kalam" },
    { key: "Kalam5DaysImages", category: "Swat Kalam" },
    { key: "Kalam5DaysMalamJabbaImages", category: "Swat Kalam" },
    { key: "Kalam5DaysMalamJabbaData", category: "Swat Kalam" },
    { key: "Kalam7DaysImages", category: "Swat Kalam" },
    { key: "Kalam2DaysData", category: "Swat Kalam" },
    { key: "Kalam3DaysData", category: "Swat Kalam" },
    { key: "Kalam4DaysData", category: "Swat Kalam" },
    { key: "Kalam5DaysData", category: "Swat Kalam" },
    { key: "Kalam7DaysData", category: "Swat Kalam" },

    // Naran Kaghan
    { key: "NaranHeroImages", category: "Naran Kaghan" },
    { key: "NaranPackages", category: "Naran Kaghan" },
    { key: "NaranData", category: "Naran Kaghan" },
    { key: "NaranFaqData", category: "Naran Kaghan" },
    { key: "BabusarTopImages", category: "Naran Kaghan" },
    { key: "BabusarTopFaqData", category: "Naran Kaghan" },
    { key: "KunharRiverImages", category: "Naran Kaghan" },
    { key: "KunharRiverFaqData", category: "Naran Kaghan" },
    { key: "ShogranImages", category: "Naran Kaghan" },
    { key: "ShogranFaqData", category: "Naran Kaghan" },
    { key: "SiriPayeImages", category: "Naran Kaghan" },
    { key: "SiriPayeFaqData", category: "Naran Kaghan" },

    // Lahore
    { key: "LahoreHeroImages", category: "Lahore" },
    { key: "LahorePlaces", category: "Lahore" },
    { key: "LahoreMoreImg", category: "Lahore" },
    { key: "LahoreOtherNames", category: "Lahore" },
    { key: "LahoreRulers", category: "Lahore" },
    { key: "LahoreGates", category: "Lahore" },
    { key: "LahoreFaqData", category: "Lahore" },
    { key: "LahoreServicesIncluded", category: "Lahore" },
    { key: "HistoricLahoreStreetsImages", category: "Lahore" },
    { key: "LahoreFortImages", category: "Lahore" },
    { key: "ShalimarGardenImages", category: "Lahore" },
    { key: "WazirKhanImages", category: "Lahore" },
  ];

  const fetchAllData = async () => {
    setLoading(true);
    try {
      const combinedData = {};
      apiEndpoints.forEach(({ key }) => {
        const data = travelData[key];
        if (data === undefined) {
          return;
        }

        let arr = [];

        // If the export is a simple array of strings (image URLs)
        if (Array.isArray(data) && data.length > 0 && typeof data[0] === "string") {
          arr = [{
            _id: `${key}-images`,
            title: key,
            type: key,
            images: data,
            img: data[0] || "",
          }];
        } else if (Array.isArray(data)) {
          arr = data;
        } else if (data && typeof data === "object") {
          arr = [data];
        }

        combinedData[key] = arr.map((item, i) => {
          // Handle case where item is a string (image URL)
          if (typeof item === "string") {
            return {
              _id: `${key}-${i}`,
              title: `Image ${i + 1}`,
              type: key,
              img: item,
              images: [item],
              faq: [],
              description: [],
              activities: [],
              services: [],
              attractions: [],
              otherNames: [],
              rulers: [],
              gates: [],
              price: "N/A",
              duration: "N/A",
              link: "N/A",
            };
          }

          const processedItem = {
            ...item,
            _id: item._id || item.id || `${key}-${i}`,
            _originalIndex: i, // Store original index for backend operations
            title: item.title || item.title1 || item.name || item.day || `Item ${i + 1}`,
            type: item.type || key,
            img: item.img || item.image || item.image1 || (Array.isArray(item.images) && item.images[0]) || "",
            images: Array.isArray(item.images) && item.images.length > 0
              ? item.images
              : item.image
              ? [item.image]
              : item.img
              ? [item.img]
              : [],
            faq: Array.isArray(item.faq)
              ? item.faq
              : item.faq && typeof item.faq === "object"
              ? [item.faq]
              : [],
            description: Array.isArray(item.description)
              ? item.description
              : item.description && typeof item.description === "object"
              ? [item.description]
              : [],
            activities: Array.isArray(item.activities) ? item.activities : [],
            services: Array.isArray(item.services) ? item.services : [],
            attractions: Array.isArray(item.attractions) ? item.attractions : [],
            otherNames: Array.isArray(item.otherNames) ? item.otherNames : [],
            rulers: Array.isArray(item.rulers) ? item.rulers : [],
            gates: Array.isArray(item.gates) ? item.gates : [],
            price: item.price || "N/A",
            duration: item.duration || "N/A",
            link: item.link || "N/A",
          };
          return processedItem;
        });
      });

      setAllToursData(combinedData);
    } catch (err) {
      console.error("Error loading data from travelData:", err);
      setMessage("Error loading data ❌");
      setTimeout(() => setMessage(""), 3000);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (key) => {
    const element = sectionRefs.current[key];
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleExpand = (key, id) => {
    const keyId = `${key}-${id}`;
    setExpandedItems((prev) => ({ ...prev, [keyId]: !prev[keyId] }));
  };

  const handleEdit = (key, item, index) => {
    setCurrentApiKey(key);
    setEditingItem(item);
    setEditingIndex(index); // Store the index
    
    // Ensure all arrays are properly initialized
    const processedItem = {
      ...emptyItem,
      ...item,
      title: item.title || "",
      type: item.type || key,
      img: item.img || item.image || item.image1 || "",
      images: Array.isArray(item.images) && item.images.length > 0 
        ? item.images 
        : item.image 
        ? [item.image] 
        : item.img 
        ? [item.img] 
        : [],
      faq: Array.isArray(item.faq) && item.faq.length > 0 
        ? item.faq 
        : [{ day: "", details: "" }],
      description: Array.isArray(item.description) && item.description.length > 0 
        ? item.description 
        : [{ title: "", text: "", img: "" }],
      activities: Array.isArray(item.activities) && item.activities.length > 0 
        ? item.activities 
        : [{ img: "", title: "" }],
      services: Array.isArray(item.services) ? item.services : [],
      attractions: Array.isArray(item.attractions) ? item.attractions : [],
      otherNames: Array.isArray(item.otherNames) ? item.otherNames : [],
      rulers: Array.isArray(item.rulers) ? item.rulers : [],
      gates: Array.isArray(item.gates) ? item.gates : [],
      price: item.price && item.price !== "N/A" ? item.price : "",
      duration: item.duration && item.duration !== "N/A" ? item.duration : "",
      link: item.link && item.link !== "N/A" ? item.link : "",
    };
    
    setFormData(processedItem);
    setShowModal(true);
  };

  const handleDelete = (key, item, index) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;

    setAllToursData((prev) => {
      const current = prev[key] || [];
      const updated = current.filter((_, i) => i !== index);
      return { ...prev, [key]: updated };
    });

    setMessage("Item deleted (frontend only) ✔");
    setTimeout(() => setMessage(""), 2500);
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const arrayInput = (name, value) => {
    setFormData({
      ...formData,
      [name]: value.split(",").map((x) => x.trim()).filter(Boolean),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Clean up form data for local state
    const cleanedData = {
      ...formData,
      images: formData.images && formData.images.length > 0 ? formData.images : [],
      faq:
        formData.faq &&
        formData.faq.length > 0 &&
        formData.faq.some((f) => f.day || f.details)
          ? formData.faq.filter((f) => f.day || f.details)
          : [],
      description:
        formData.description &&
        formData.description.length > 0 &&
        formData.description.some((d) => d.title || d.text || d.img)
          ? formData.description.filter((d) => d.title || d.text || d.img)
          : [],
      activities:
        formData.activities &&
        formData.activities.length > 0 &&
        formData.activities.some((a) => a.title || a.img)
          ? formData.activities.filter((a) => a.title || a.img)
          : [],
      services: formData.services || [],
      attractions: formData.attractions || [],
      otherNames: formData.otherNames || [],
      rulers: formData.rulers || [],
      gates: formData.gates || [],
    };

    setAllToursData((prev) => {
      const current = prev[currentApiKey] || [];
      let updated;

      if (editingItem && editingIndex !== null) {
        updated = current.map((item, idx) =>
          idx === editingIndex ? { ...item, ...cleanedData } : item
        );
      } else {
        updated = [...current, { ...cleanedData, _id: `${currentApiKey}-${current.length}` }];
      }

      return { ...prev, [currentApiKey]: updated };
    });

    setMessage(editingItem ? "Item updated (frontend only) ✔" : "New item added (frontend only) ✔");
    setShowModal(false);
    setEditingItem(null);
    setEditingIndex(null);
    setFormData(emptyItem);
    setTimeout(() => setMessage(""), 2500);
  };

  const filteredKeys = Object.keys(allToursData).filter((key) => {
    if (!search) return true;
    const items = allToursData[key];
    return items.some((item) =>
      (item.title || "").toLowerCase().includes(search.toLowerCase()) ||
      (item.type || "").toLowerCase().includes(search.toLowerCase())
    );
  });

  if (loading) return <div className="p-8 text-center text-xl">Loading all tours data...</div>;

  const totalItems = Object.values(allToursData).reduce((acc, arr) => acc + arr.length, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky Header with Dropdown */}
      <header className="sticky top-0 z-40 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h1 className="text-2xl font-bold">Tours Admin Dashboard</h1>
            <div className="flex items-center gap-4">
              <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                Total Items: {totalItems}
              </span>
              <select
                className="bg-white text-gray-800 px-4 py-2 rounded-lg shadow-md font-medium min-w-[250px]"
                onChange={(e) => {
                  if (e.target.value) {
                    scrollToSection(e.target.value);
                  }
                }}
                defaultValue=""
              >
                <option value="">Jump to API Section...</option>
                {apiEndpoints.map((api) => (
                  <option key={api.key} value={api.key}>
                    {api.key} ({allToursData[api.key]?.length || 0} items)
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {message && (
          <div className={`${message.includes('❌') ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'} p-3 mb-5 rounded-lg shadow text-center`}>
            {message}
          </div>
        )}

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search by title or type..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md border-2 border-gray-300 px-4 py-2 rounded-lg shadow focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* All API Sections */}
        {filteredKeys.map((key) => {
          const items = allToursData[key];
          if (!items || items.length === 0) return null;

          const apiInfo = apiEndpoints.find((api) => api.key === key);

  return (
            <div
              key={key}
              ref={(el) => (sectionRefs.current[key] = el)}
              className="mb-10 bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="bg-gradient-to-r from-gray-700 to-gray-800 text-white px-6 py-4 flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold">{key}</h2>
                  {apiInfo && <p className="text-sm text-gray-300">{apiInfo.category}</p>}
                </div>
                <div className="flex items-center gap-4">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {items.length} {items.length === 1 ? "item" : "items"}
                  </span>
                  <button
                    onClick={() => {
                      setCurrentApiKey(key);
                      setEditingItem(null);
                      setEditingIndex(null);
                      setFormData(emptyItem);
                      setShowModal(true);
                    }}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition"
                  >
                    + Add New
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left">Title</th>
                      <th className="px-4 py-3 text-left">Type</th>
                      <th className="px-4 py-3 text-left">Main Image</th>
                      <th className="px-4 py-3 text-left">Price</th>
                      <th className="px-4 py-3 text-left">Duration</th>
                      <th className="px-4 py-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
                    {items.map((item, idx) => {
                      const itemId = item._id || `${key}-${idx}`;
                      const keyId = `${key}-${itemId}`;
                      const isExpanded = expandedItems[keyId];
                      const itemIndex = item._originalIndex !== undefined ? item._originalIndex : idx;

                      return (
                        <React.Fragment key={itemId}>
                          <tr className="border-b hover:bg-gray-50 transition">
                            <td className="px-4 py-3 font-medium">{item.title || "N/A"}</td>
                            <td className="px-4 py-3">{item.type || "N/A"}</td>
                            <td className="px-4 py-3">
                              {item.img ? (
                                <img
                                  src={item.img}
                                  alt={item.title}
                                  className="w-24 h-16 object-cover rounded border"
                                />
                              ) : (
                                "N/A"
                              )}
                            </td>
                            <td className="px-4 py-3">{item.price || "N/A"}</td>
                            <td className="px-4 py-3">{item.duration || "N/A"}</td>
                            <td className="px-4 py-3">
                              <div className="flex gap-2">
                                <button
                                  onClick={() => toggleExpand(key, itemId)}
                                  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm transition"
                                >
                                  {isExpanded ? "Hide" : "View"}
                                </button>
                                <button
                                  onClick={() => handleEdit(key, item, itemIndex)}
                                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-sm transition"
                                >
                                  Edit
                                </button>
                                <button
                                  onClick={() => handleDelete(key, item, itemIndex)}
                                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition"
                                >
                                  Delete
                                </button>
                              </div>
              </td>
            </tr>

                          {isExpanded && (
                            <tr>
                              <td colSpan="6" className="px-6 py-6 bg-gray-50">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                  {/* Images Array */}
                                  {item.images && item.images.length > 0 && (
                                    <div className="col-span-2">
                                      <h3 className="font-bold text-lg mb-2 text-blue-600">Images ({item.images.length})</h3>
                                      <div className="flex flex-wrap gap-2">
                                        {item.images.map((img, i) => (
                                          <img
                                            key={i}
                                            src={img}
                                            alt={`${item.title || 'Item'} ${i + 1}`}
                                            className="w-32 h-32 object-cover rounded border-2 border-gray-300"
                                          />
                                        ))}
                                      </div>
                                    </div>
                                  )}

                                  {/* FAQs */}
                                  {item.faq && item.faq.length > 0 && (
                                    <div className="col-span-2">
                                      <h3 className="font-bold text-lg mb-2 text-blue-600">FAQs ({item.faq.length})</h3>
                                      <div className="space-y-3">
                                        {item.faq.map((faq, i) => (
                                          <div key={i} className="bg-white p-4 rounded-lg border-l-4 border-blue-500 shadow">
                                            <div className="font-semibold text-blue-700 mb-1">{faq.day || "Question"}</div>
                                            <div className="text-gray-700">{faq.details || "N/A"}</div>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}

                                  {/* Description */}
                                  {item.description && item.description.length > 0 && (
                                    <div className="col-span-2">
                                      <h3 className="font-bold text-lg mb-2 text-blue-600">Description ({item.description.length})</h3>
                                      <div className="space-y-3">
                                        {item.description.map((desc, i) => (
                                          <div key={i} className="bg-white p-4 rounded-lg border shadow">
                                            {desc.title && <div className="font-semibold mb-2">{desc.title}</div>}
                                            {desc.text && <div className="text-gray-700 mb-2">{desc.text}</div>}
                                            {desc.img && (
                                              <img
                                                src={desc.img}
                                                alt={desc.title || "Description"}
                                                className="w-full max-w-md h-48 object-cover rounded"
                                              />
                                            )}
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}

                                  {/* Activities */}
                                  {item.activities && item.activities.length > 0 && (
                                    <div className="col-span-2">
                                      <h3 className="font-bold text-lg mb-2 text-blue-600">Activities ({item.activities.length})</h3>
                                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                        {item.activities.map((act, i) => (
                                          <div key={i} className="bg-white p-3 rounded-lg border shadow">
                                            {act.img && (
                                              <img
                                                src={act.img}
                                                alt={act.title || "Activity"}
                                                className="w-full h-32 object-cover rounded mb-2"
                                              />
                                            )}
                                            {act.title && <div className="font-medium text-sm">{act.title}</div>}
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}

                                  {/* Other Arrays */}
                                  {["services", "attractions", "otherNames", "rulers", "gates"].map((arrName) => {
                                    const arr = item[arrName];
                                    if (!arr || !Array.isArray(arr) || arr.length === 0) return null;
                                    return (
                                      <div key={arrName}>
                                        <h3 className="font-bold mb-1 capitalize">{arrName}:</h3>
                                        <ul className="list-disc list-inside text-gray-700">
                                          {arr.map((a, i) => (
                                            <li key={i}>{a}</li>
                                          ))}
                                        </ul>
                                      </div>
                                    );
                                  })}

                                  {/* Link */}
                                  {item.link && item.link !== "N/A" && (
                                    <div className="col-span-2">
                                      <h3 className="font-bold mb-1">Link:</h3>
                                      <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline"
                                      >
                                        {item.link}
                                      </a>
                                    </div>
                                  )}
                                </div>
                              </td>
                            </tr>
                          )}
                        </React.Fragment>
                      );
                    })}
        </tbody>
      </table>
              </div>
            </div>
          );
        })}
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition z-50"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-5 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-4xl relative max-h-[90vh] overflow-y-auto">
            <button
              className="absolute top-3 right-3 text-2xl font-bold text-gray-500 hover:text-gray-700"
              onClick={() => {
                setShowModal(false);
                setEditingItem(null);
                setEditingIndex(null);
                setFormData(emptyItem);
              }}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">{editingItem ? "Edit Item" : "Add New Item"}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={formData.title || ""}
                  onChange={handleChange}
                  className={inputClass}
                />
                <input
                  type="text"
                  name="type"
                  placeholder="Type"
                  value={formData.type || ""}
                  onChange={handleChange}
                  className={inputClass}
                />
                <input
                  type="text"
                  name="img"
                  placeholder="Main Image URL"
                  value={formData.img || ""}
                  onChange={handleChange}
                  className={inputClass}
                />
                <input
                  type="text"
                  name="price"
                  placeholder="Price"
                  value={formData.price || ""}
                  onChange={handleChange}
                  className={inputClass}
                />
                <input
                  type="text"
                  name="duration"
                  placeholder="Duration"
                  value={formData.duration || ""}
                  onChange={handleChange}
                  className={inputClass}
                />
                <input
                  type="text"
                  name="link"
                  placeholder="Link"
                  value={formData.link || ""}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <input
                type="text"
                placeholder="Images (comma separated)"
                value={Array.isArray(formData.images) ? formData.images.join(", ") : ""}
                onChange={(e) => arrayInput("images", e.target.value)}
                className={inputClass}
              />

              <input
                type="text"
                placeholder="Services (comma separated)"
                value={Array.isArray(formData.services) ? formData.services.join(", ") : ""}
                onChange={(e) => arrayInput("services", e.target.value)}
                className={inputClass}
              />

              {/* FAQs */}
              <div>
                <h3 className="font-bold mb-2">FAQs</h3>
                {(formData.faq || []).map((faqItem, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      placeholder="Question"
                      value={faqItem.day || ""}
                      onChange={(e) => {
                        const newFaq = [...(formData.faq || [])];
                        newFaq[index] = { ...newFaq[index], day: e.target.value };
                        setFormData({ ...formData, faq: newFaq });
                      }}
                      className={inputClass}
                    />
                    <input
                      type="text"
                      placeholder="Answer"
                      value={faqItem.details || ""}
                      onChange={(e) => {
                        const newFaq = [...(formData.faq || [])];
                        newFaq[index] = { ...newFaq[index], details: e.target.value };
                        setFormData({ ...formData, faq: newFaq });
                      }}
                      className={inputClass}
                    />
                    <button
                      type="button"
                      className="bg-red-600 text-white px-3 py-1 rounded"
                      onClick={() => {
                        const newFaq = (formData.faq || []).filter((_, i) => i !== index);
                        setFormData({ ...formData, faq: newFaq });
                      }}
                    >
                      Delete
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className="bg-green-600 text-white px-4 py-2 rounded mb-3"
                  onClick={() =>
                    setFormData({
                      ...formData,
                      faq: [...(formData.faq || []), { day: "", details: "" }],
                    })
                  }
                >
                  + Add FAQ
                </button>
              </div>

              {/* Description */}
              <div>
                <h3 className="font-bold mb-2">Description</h3>
                {(formData.description || []).map((desc, index) => (
                  <div key={index} className="border p-3 rounded mb-2">
                    <input
                      type="text"
                      placeholder="Title"
                      value={desc.title || ""}
                      onChange={(e) => {
                        const newDesc = [...(formData.description || [])];
                        newDesc[index] = { ...newDesc[index], title: e.target.value };
                        setFormData({ ...formData, description: newDesc });
                      }}
                      className={`${inputClass} mb-2`}
                    />
                    <textarea
                      placeholder="Text"
                      value={desc.text || ""}
                      onChange={(e) => {
                        const newDesc = [...(formData.description || [])];
                        newDesc[index] = { ...newDesc[index], text: e.target.value };
                        setFormData({ ...formData, description: newDesc });
                      }}
                      className={`${inputClass} mb-2`}
                      rows="2"
                    />
                    <input
                      type="text"
                      placeholder="Image URL"
                      value={desc.img || ""}
                      onChange={(e) => {
                        const newDesc = [...(formData.description || [])];
                        newDesc[index] = { ...newDesc[index], img: e.target.value };
                        setFormData({ ...formData, description: newDesc });
                      }}
                      className={`${inputClass} mb-2`}
                    />
                    <button
                      type="button"
                      className="bg-red-600 text-white px-3 py-1 rounded text-sm"
                      onClick={() => {
                        const newDesc = (formData.description || []).filter((_, i) => i !== index);
                        setFormData({ ...formData, description: newDesc });
                      }}
                    >
                      Delete
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className="bg-green-600 text-white px-4 py-2 rounded mb-3"
                  onClick={() =>
                    setFormData({
                      ...formData,
                      description: [...(formData.description || []), { title: "", text: "", img: "" }],
                    })
                  }
                >
                  + Add Description
                </button>
              </div>

              {/* Activities */}
              <div>
                <h3 className="font-bold mb-2">Activities</h3>
                {(formData.activities || []).map((act, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      placeholder="Activity Title"
                      value={act.title || ""}
                      onChange={(e) => {
                        const newActs = [...(formData.activities || [])];
                        newActs[index] = { ...newActs[index], title: e.target.value };
                        setFormData({ ...formData, activities: newActs });
                      }}
                      className={inputClass}
                    />
                    <input
                      type="text"
                      placeholder="Activity Image URL"
                      value={act.img || ""}
                      onChange={(e) => {
                        const newActs = [...(formData.activities || [])];
                        newActs[index] = { ...newActs[index], img: e.target.value };
                        setFormData({ ...formData, activities: newActs });
                      }}
                      className={inputClass}
                    />
                    <button
                      type="button"
                      className="bg-red-600 text-white px-3 py-1 rounded"
                      onClick={() => {
                        const newActs = (formData.activities || []).filter((_, i) => i !== index);
                        setFormData({ ...formData, activities: newActs });
                      }}
                    >
                      Delete
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className="bg-green-600 text-white px-4 py-2 rounded mb-3"
                  onClick={() =>
                    setFormData({
                      ...formData,
                      activities: [...(formData.activities || []), { img: "", title: "" }],
                    })
                  }
                >
                  + Add Activity
                </button>
              </div>

              <div className="flex justify-end gap-2 mt-6 pt-4 border-t">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition"
                >
                  Save
                </button>
                <button
                  type="button"
                  className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-2 rounded-lg font-medium transition"
                  onClick={() => {
                    setShowModal(false);
                    setEditingItem(null);
                    setEditingIndex(null);
                    setFormData(emptyItem);
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToursAdmin;

