import React, { useEffect, useState } from "react";
import {
  LahoreHeroImages,
  LahoreFaqData,
  LahoreMoreImg,
  LahoreOtherNames,
  LahoreRulers,
  LahoreGates,
  LahoreServicesIncluded,
} from "./travelData";

function LahoreCityTour() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div>
      <p className="font-bold text-center text-4xl p-1 pt-5">
        Lahore City Tour
      </p>
      <p className="text-center text-sm px-10 pt-5 text-gray-600">
        Explore the Walled City and beyond: Mughal grandeur, UNESCO Heritage
        sites, and living bazaars. Customize your Lahore City Tour with us for a
        cultural, historical, and culinary journey.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:m-16 m-4 mt-10">
        {LahoreHeroImages.map((item, index) => (
          <a
            href={item.link}
            key={index}
            className="rounded-xl overflow-hidden"
          >
            <img
              src={item.img}
              alt={item.title}
              className="rounded-xl h-40 md:h-60 lg:h-64 w-full object-cover brightness-90"
            />
            <p className="text-center text-xs md:text-sm font-semibold mt-2">
              {item.title}
            </p>
          </a>
        ))}
      </div>

      <p className="font-bold text-center text-3xl pt-5 px-3">
        Places to Visit in Lahore City
      </p>
   
      <div className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-start">
              <img
              src={LahoreMoreImg}
              alt="Lahore History"
              className="rounded-lg w-full object-cover shadow"
            />
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Other Historical Names of Lahore
                </h3>
                <ul className="list-disc ml-6 text-sm text-gray-700">
                  {LahoreOtherNames.map((n, i) => (
                    <li key={i}>{n}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Rulers and Dynasties
                </h3>
                <ul className="list-disc ml-6 text-sm text-gray-700 space-y-1">
                  {LahoreRulers.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  13 Gates of the Walled City
                </h3>
                <p className="text-sm text-gray-700 mb-2">
                  Many still stand today; each gate once served as a grand entry
                  to the Walled City.
                </p>
                <ul className="list-disc ml-6 text-sm text-gray-700 grid md:grid-cols-2 gap-x-6">
                  {LahoreGates.map((g, i) => (
                    <li key={i}>{g}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#fef6f0] px-6 lg:px-20 py-12 mt-4">
        <h2 className="text-3xl font-bold mb-3 text-center">
          Guided Lahore Tour Packages
        </h2>
        <p className="text-center text-sm text-gray-600 max-w-3xl mx-auto">
          Choose a half‑day or full‑day itinerary with a professional guide and
          private transport. Popular themes include Walled City Heritage Walk,
          Mughal Architecture Trail, Food Street &amp; Bazaar Tour, and Museum
          &amp; Colonial Lahore.
        </p>
      </div>

      <p className="text-3xl text-red-500 font-semibold font-mono px-9 py-5">
        Itinerary / FAQs
      </p>
      <div className="mx-auto p-4 md:p-9">
        {LahoreFaqData.map((item, index) => (
          <div
            key={index}
            className="border-b bg-[#faf5ee] shadow-md border-gray-200"
          >
            <button
              className="w-full text-left m-2 text-base md:text-xl py-3 px-4 md:px-6 font-medium flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              {item.day}
              <span>{openIndex === index ? "-" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="bg-white text-sm text-gray-700 m-2 py-3 px-4 md:px-6">
                {item.details}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto p-4 text-gray-800">
        <div className="bg-white shadow rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">Services Included</h2>
          <ul className="list-disc list-inside text-sm space-y-1">
            {LahoreServicesIncluded.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LahoreCityTour;
