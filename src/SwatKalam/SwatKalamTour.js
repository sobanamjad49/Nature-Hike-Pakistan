import React, { useEffect, useState } from "react";
import {
  SwatTours,
  SwatPublicTours,
  SwatData,
  SwatFaqData,
} from "../travelData";

function SwatKalamTour() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);
  return (
    <div>
      <p className="font-bold text-center text-4xl p-1 pt-5">
        Swat Tour Packages
      </p>
      <p className="text-center text-sm px-10 pt-5 text-gray-600">
        Swat Valley is also known as the Switzerland of Pakistan because of its
        wondrous natural beauty. We at NatureHikePakistan.pk are here to help
        you explore this region to its fullest with well-researched Swat Kalam
        Tour Packages 2025 for a stress-free, luxurious, and adventurous
        experience.
      </p>

      <p className="font-bold text-center text-3xl pt-5 px-3">
        Customized Swat Tour Packages 2025
      </p>
      <p className="text-center text-sm px-10 pt-5 text-gray-600">
        These Kalam Swat Tour Packages can be custom-built for you to have the
        experience you expect from us as professional Tour Operators in
        Pakistan. Choose from the list below or customize your Swat Kalam Tours
        according to your requirements.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:m-16 m-4">
        {SwatTours.map((item, index) => (
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

      <p className="font-bold text-center text-4xl uppercase p-1 ">
        Public Swat Kalam Tour Packages 2025
      </p>
      <p className="text-center text-sm p-10 text-gray-600">
        NatureHikePakistan.pk organizes these Swat tour packages throughout the
        year. Join as per your schedule, individually or with your group. Here
        are the Swat Kalam Valley Tours you can choose from:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:m-16 m-4 ">
        {SwatPublicTours.map((item, index) => (
          <a key={index} href={item.link} className="block p-2 rounded-xl">
            <img
              src={item.img}
              alt={item.title}
              className="rounded-xl h-40 md:h-60 lg:h-full w-full object-cover brightness-75"
            />
            <p className="text-sm font-bold font-mono text-center mt-3 ">
              {item.title}
            </p>
          </a>
        ))}
      </div>

      <div className="mx-auto p-6 md:p-9">
        <h2 className="text-2xl font-bold mb-4 text-center md:text-left">
          Swat Kalam – FAQ
        </h2>
        {SwatFaqData.map((item, index) => (
          <div
            key={index}
            className="border-b bg-[#faf5ee] shadow-md border-gray-200"
          >
            <button
              className="w-full text-left m-2 text-lg md:text-xl py-3 px-6 font-medium flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              {item.day}
              <span>{openIndex === index ? "-" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="bg-white text-sm text-gray-700 m-2 py-3 px-6">
                {item.details}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="w-full bg-white px-6 lg:px-20 py-14 text-gray-800 leading-relaxed">
        <h2 className="text-3xl font-bold mb-6">
          Client Category of Customized Swat Tours:
        </h2>

        <ul className="list-disc ml-6 space-y-4">
          <li>
            <strong>Swat Tour Packages / Couple Tours / Honeymoon Tour</strong>{" "}
            are designed to help newlyweds cherish their new life together with
            all the luxury and solitude, surrounded by beautiful nature.
          </li>
          <li>
            <strong>Swat Family Tour Packages</strong> are designed to ensure a
            fun, luxurious, and secure environment for your loved ones to
            intensify the bond and create lifelong memories.
          </li>
          <li>
            <strong>Swat Students Tours / Friends Group Tour Packages</strong>{" "}
            include engaging activities and games for laughing together, dancing
            together, and exploring adventurous destinations—without the hassle
            of planning.
          </li>
          <li>
            <strong>Swat Corporate Groups Tour Packages</strong> create an
            environment for employees to build closer connections, enhance team
            building, and enjoy nature outside the usual office routine.
          </li>
        </ul>

        <p className="mt-6 font-semibold">We have</p>
        <ul className="list-disc ml-6 space-y-2 mt-2">
          <li>Swat Tour Packages from Lahore</li>
          <li>Swat Tour Packages from Karachi</li>
          <li>Swat Tour Packages from Islamabad</li>
        </ul>

        <p className="mt-4">
          You can also customize these tours from other cities in Pakistan.
        </p>
      </div>

      <p className="font-bold text-center text-3xl pt-5 px-3">
        Most Popular Destinations and Attractions to Visit in Swat Valley
      </p>
      <p className="text-center text-sm px-10 pt-2 text-gray-600">
        A selection of famous tourist places to visit in Swat Kalam:
      </p>
      <div className="w-full space-y-20 px-5 md:px-16 py-10">
        {SwatData.map((item, index) => (
          <div key={index} className="flex">
            {index % 2 === 0 ? (
              <>
                <div>
                  <h2 className="text-3xl text-center font-bold mb-4 ">
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

export default SwatKalamTour;
