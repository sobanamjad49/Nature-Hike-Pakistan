import React, { useEffect } from "react";
import {
  SkarduTours,
  SkarduAirTours,
  SkarduPackageTours,
  SkarduData,
} from "../travelData";

function SkarduTour() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <p className="font-bold text-center text-4xl p-1 pt-5">
        Skardu Tour Packages
      </p>
      <p className="text-center text-sm px-10 pt-5 text-gray-600">
        Skardu is one of the most breathtaking destinations in Pakistan, famous
        for its lakes, mountains, and valleys. Considering the significance of
        Skardu Valley and after extensive on-ground research, we have launched
        many Skardu Tour Packages in 2025 among our Pakistan Tour Packages.
      </p>
      <p className="font-bold text-center text-3xl pt-5 px-3">
        Skardu Customized Tour Packages 2025
      </p>
      <p className="text-center text-sm px-10 pt-5 text-gray-600">
        These Skardu Tour Packages can be custom-built for you to have the
        experience you expect from us as professional Tour Operators in
        Pakistan. You can choose from the list below or customize your Skardu
        Valley Tours according to your requirements.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:m-16 m-4">
        {SkarduTours.map((item, index) => (
          <a key={index} href={item.link} className="block rounded-xl">
            <div className="rounded-xl p-2">
              <img
                src={item.img}
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
        Skardu Tour Packages <span className="text-[#9FBD21]">By Air </span>
      </p>
      <p className="text-center text-sm p-10 text-gray-600">
        You can reach Skardu by landing at Skardu Airport from Islamabad and
        then by road. Flights operate several times a week. We at
        NatureHikePakistan.pk offer Skardu by Air ticket bookings and Skardu
        Tours by Air. You can select from the Skardu by Air Tour Packages below:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:m-16 m-4 ">
        {SkarduAirTours.map((item, index) => (
          <a key={index} href={item.link} className="block p-2 rounded-xl">
            <img
              src={item.img}
              className="rounded-xl h-40 md:h-60 lg:h-full w-full object-cover brightness-75"
            />
            <p className="text-sm font-bold font-mono text-center mt-3 ">
              {item.title}
            </p>
          </a>
        ))}
      </div>

      <p className="font-bold text-center text-4xl uppercase p-1 ">
        Skardu Group Tour Packages 2025
      </p>
      <p className="text-center text-sm px-9 pt-4 text-gray-600">
        We organize these Skardu Tour Packages throughout the year. You can join
        individually or with your group. Here are the Skardu Tours that you can
        choose from:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:m-16 m-4 ">
        {SkarduPackageTours.map((item, index) => (
          <a key={index} href={item.link} className="block p-2 rounded-xl">
            <img
              src={item.img}
              className="rounded-xl h-40 md:h-60 lg:h-full w-full object-cover brightness-75"
            />
            <p className="text-sm font-bold font-mono text-center mt-3 ">
              {item.title}
            </p>
          </a>
        ))}
      </div>

      <div className="w-full bg-white px-6 lg:px-20 py-14 text-gray-800 leading-relaxed">
        <h2 className="text-3xl font-bold mb-6">
          Client Category of Customized Skardu Trips:
        </h2>

        <ul className="list-disc ml-6 space-y-4">
          <li>
            <strong>Skardu Valley Couple / Honeymoon Tour Packages</strong> are
            designed to help newlyweds enjoy all the luxury and privacy while
            surrounded by the stunning nature.
          </li>
          <li>
            <strong>Skardu Valley Family Tour Packages</strong> ensure a fun,
            secure, and luxurious environment for your loved ones, creating
            memories for a lifetime.
          </li>
          <li>
            <strong>
              Skardu Valley Students / Friends Group Tour Packages
            </strong>{" "}
            are designed for adventure, games, and activities that make group
            trips memorable without the hassle of planning.
          </li>
          <li>
            <strong>
              Skardu Valley Corporate Groups / Business Tour Packages
            </strong>{" "}
            promote team building and workplace bonding while enjoying a
            refreshing escape in the scenic beauty of Skardu.
          </li>
        </ul>

        <p className="mt-6 font-semibold">We have</p>
        <ul className="list-disc ml-6 space-y-2 mt-2">
          <li>Skardu Valley Tours from Lahore</li>
          <li>Skardu Valley Tours from Karachi</li>
          <li>Skardu Valley Tours from Islamabad</li>
        </ul>

        <p className="mt-4">
          You can also customize these tours from other cities in Pakistan.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-4">
          Best Seasons in Skardu Valley:
        </h2>
        <p className="mb-4">
          The most famous seasons to visit Skardu Valley are:
        </p>

        <ul className="list-disc ml-6 space-y-4">
          <li>
            <strong>Summer in Skardu:</strong> The valley is lush, flowers
            bloom, and trekking becomes enjoyable. Perfect for sightseeing and
            adventure.
          </li>
          <li>
            <strong>Winter in Skardu:</strong> Snow-capped mountains and frozen
            lakes provide a magical winter wonderland experience.
          </li>
        </ul>
      </div>

      <p className="font-bold text-center text-3xl pt-5 px-3">
        Most Popular Destinations and Attractions to Visit in Skardu Valley
      </p>
      <p className="text-center text-sm px-10 pt-2 text-gray-600">
        Some famous tourist places to visit in Skardu are:
      </p>
      <div className="w-full space-y-20 px-5 md:px-16 py-10">
        {SkarduData.map((item, index) => (
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
                <img src={item.img} className="w-72 object-cover shadow p-2" />
              </>
            ) : (
              <>
                <img src={item.img} className="w-72 object-cover shadow p-2" />
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

export default SkarduTour;
