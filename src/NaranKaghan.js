import React, { useEffect, useState } from "react";
import {
  NaranHeroImages,
  NaranPackages,
  NaranFaqData,
  NaranData,
} from "./travelData";

function NaranKaghan() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div>
      {/* Page Title & Intro */}
      <p className="font-bold text-center text-4xl p-1 pt-5">
        Naran Kaghan Tour Packages
      </p>
      <p className="text-center text-sm px-10 pt-5 text-gray-600">
        Explore the lush valleys, alpine lakes, and scenic passes of Naran
        Kaghan. NatureHikePakistan.pk offers 2025 tour packages that can be
        fully customized for a luxurious, adventurous, and stress-free
        experience.
      </p>

      {/* Why Visit Naran Kaghan */}
      <div className="w-full bg-[#fef6f0] px-6 lg:px-20 py-10 mt-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Why Visit Naran Kaghan?
        </h2>
        <ul className="list-disc ml-6 space-y-3 text-gray-700 text-sm md:text-base">
          <li>Stunning alpine lakes like Saif-ul-Malook and Lulusar Lake.</li>
          <li>
            Breathtaking mountain views including Babusar Pass and
            Malika-e-Parbat.
          </li>
          <li>
            Lush green valleys perfect for trekking, camping, and photography.
          </li>
          <li>
            Local culture, markets, and traditional food experiences in Naran
            Bazaar.
          </li>
          <li>
            Adventure activities like jeep safaris, hiking, and river rafting.
          </li>
        </ul>
      </div>

      {/* Hero Images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:m-16 m-4 mt-10">
        {NaranHeroImages.map((item, index) => (
          <a
            key={index}
            href={item.link}
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

      {/* Packages Section Header & Intro */}
      <p className="font-bold text-center text-3xl pt-5 px-3">
        Customised Naran Kaghan Tour Packages 2025
      </p>
      <p className="text-center text-sm px-10 pt-3 text-gray-600">
        Our Naran Kaghan tour packages are designed to meet every traveler’s
        needs. Whether you want a romantic escape, a fun family trip, an
        adventure with friends, or a corporate retreat, we can create the
        perfect itinerary for you. Choose a ready-made package below or
        customize your own experience for 2025.
      </p>

      {/* Customised Packages */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:m-16 m-4">
        {NaranPackages.map((item, index) => (
          <a key={index} href={item.link} className="block rounded-xl">
            <div className="rounded-xl p-2">
              <img
                src={item.img}
                alt={item.title}
                className="rounded-xl h-40 md:h-60 lg:h-full w-full object-cover brightness-75"
              />
              <p className="text-sm font-bold font-mono text-center p-2">
                {item.title}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* FAQ / Itinerary */}
      <p className="text-3xl text-red-500 font-semibold font-mono px-9 py-5">
        Itinerary / FAQs
      </p>
      <div className="mx-auto p-4 md:p-9">
        {NaranFaqData.map((item, index) => (
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

      {/* Client Categories */}
      <div className="w-full bg-white px-6 lg:px-20 py-14 text-gray-800 leading-relaxed">
        <h2 className="text-3xl font-bold mb-6">
          Client Category of Customized Naran Tours:
        </h2>
        <ul className="list-disc ml-6 space-y-4">
          <li>
            <strong>Couple / Honeymoon Tours:</strong> Luxurious and romantic
            experiences for newlyweds amidst nature.
          </li>
          <li>
            <strong>Family Tours:</strong> Fun, secure, and memorable trips for
            families to explore together.
          </li>
          <li>
            <strong>Students / Friends Group Tours:</strong> Adventurous
            packages with games, treks, and sightseeing.
          </li>
          <li>
            <strong>Corporate Group Tours:</strong> Team-building trips that
            provide relaxation and bonding opportunities.
          </li>
        </ul>

        <p className="mt-6 font-semibold">
          We have Naran Tour Packages departing from:
        </p>
        <ul className="list-disc ml-6 space-y-2 mt-2">
          <li>Lahore</li>
          <li>Karachi</li>
          <li>Islamabad</li>
        </ul>
        <p className="mt-4">
          You can also customize these tours from other cities in Pakistan.
        </p>
      </div>

      {/* Most Popular Destinations */}
      <p className="font-bold text-center text-3xl pt-5 px-3">
        Most Popular Destinations and Attractions to Visit in Naran Kaghan
      </p>
      <div className="w-full space-y-20 px-5 md:px-16 py-10">
        {NaranData.map((item, index) => (
          <div key={index} className="flex">
            {index % 2 === 0 ? (
              <>
                <div>
                  <h2 className="text-3xl text-center font-bold mb-4">
                    {item.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed font-bold text-sm p-2">
                    {item.text}
                  </p>
                </div>
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-72 object-cover shadow p-2"
                />
              </>
            ) : (
              <>
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-72 object-cover shadow p-2"
                />
                <div>
                  <h2 className="text-3xl text-center font-bold mb-4">
                    {item.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed font-bold text-sm p-2">
                    {item.text}
                  </p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default NaranKaghan;
