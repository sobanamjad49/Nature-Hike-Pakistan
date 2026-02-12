import React, { useEffect, useState } from "react";

import {
  MapIcon,
  TruckIcon,
  PhoneIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { home, slides, tour, publictour } from "./travelData";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0); // ✔ Correct place

  // ✔ SLIDER USEEFFECT FIXED
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="relative w-full h-64 md:h-96 lg:h-[80vh] overflow-hidden">
        {slides.map((slide, index) => {
          // Determine slide position: previous, current, next
          let positionClass = "translate-x-full"; // default off-screen right
          if (index === currentIndex) positionClass = "translate-x-0"; // active in center
          if (index === (currentIndex - 1 + slides.length) % slides.length)

            positionClass = "-translate-x-full"; // previous slide moves left

          return (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full transition-transform duration-1000 ease-in-out ${positionClass}`}
            >
              {/* Image */}
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="w-full h-64 md:h-96 lg:h-[80vh] object-cover filter brightness-70"
              />

              {/* Text overlay */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 font-extrabold text-4xl md:text-6xl lg:text-7xl drop-shadow-lg">
                  Hey Travelers
                </h1>
                <p className="bg-black/40 px-4 py-2 rounded-md text-white font-semibold text-lg md:text-2xl lg:text-3xl mt-4 drop-shadow-md">
                  Welcome to NatureHikePakistan.pk
                </p>
                <p className="bg-black/40 px-4 py-1 rounded-md text-white text-md md:text-lg lg:text-xl mt-2 drop-shadow-md">
                  Your One-Stop Travel Agency in Pakistan
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:m-16 m-4 ">
        {home.map((item, index) => (
          <a
            key={index}
            href={item.link} // make sure each item in HunzaTours has a 'link' property
            className="relative overflow-hidden block p-2 rounded-xl"
          >
            <img
              src={item.img}
              className="rounded-xl h-40 md:h-60 lg:h-full w-full object-cover brightness-75    hover:scale-[1.02] pansition-pansform duration-1000
"
            />
            {/* TITLE TEXT ON IMAGE */}
            <div className="absolute bottom-3 left-1/3 -panslate-x-1/2 text-white ">
              <p className="text-2xl font-normal text-yellow-300 font-mono text-center drop-shadow-lg">
                {item.title}
              </p>
              <p className="text-3xl font-bold text-center drop-shadow-lg">
                {item.title1}
              </p>
            </div>
          </a>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 items-center px-6 py-10">
        <div className="flex justify-center relative">
          <img
            className="w-full h-full"
            src="https://naturehikepakistan.pk/wp-content/uploads/2024/03/website-honeymoon-trips-section-2-min.png.webp"
            alt=""
          />

          <div className="absolute inset-0 flex items-center justify-center ">
            <div className="flex items-center space-x-2 text-gray-800 bg-white px-8 rounded-xl py-2 -panslate-x-[50%] md:-panslate-x-[30%] lg:-panslate-x-[78%] shadow-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-black"
              >
                <path d="M2.25 4.5c0-1.243 1.007-2.25 2.25-2.25h2.25c.966 0 1.813.606 2.118 1.516l.719 2.157c.245.734.06 1.545-.457 2.108L7.21 9.96a.75.75 0 0 0-.144.82 11.27 11.27 0 0 0 6.154 6.154.75.75 0 0 0 .82-.144l1.93-1.92a1.62 1.62 0 0 1 2.108-.457l2.157.719A2.25 2.25 0 0 1 21.75 18v2.25A2.25 2.25 0 0 1 19.5 22.5C10.663 22.5 3 14.837 3 6a2.25 2.25 0 0 1 2.25-2.25Z" />
              </svg>

              <span className="text-md font-semibold">
                Book Your Tour <br /> +92 300 1234567
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <ol className="text-center space-y-3 text-sm font-bold text-gray-500">
            <span className="uppercase text-red-500 text-2xl">family</span>{" "}
            <br />
            <span className="text-3xl  font-medium text-black ">
              Tour Packages
            </span>
            <br />
            <br />
            <li>Quality Accommodations</li>
            <hr className="border-t border-gray-500" />
            <li>Luxury pansport with Personal Driver</li>{" "}
            <hr className="border-t border-gray-500" />
            <li>Flight Reservations</li>{" "}
            <hr className="border-t border-gray-500" />
            <li>4x4 Jeep Safaris</li>{" "}
            <hr className="border-t border-gray-500" />
            <li>Local and paditional Meals</li>{" "}
            <hr className="border-t border-gray-500" />
            <li>Bonfire Nights</li>{" "}
            <hr className="border-t border-gray-500 mb-20" /> <br />
            <br />
            <span className="text-xl uppercase  font-medium text-black ">
              Get Your Free Quote now!
            </span>
          </ol>
        </div>
      </div>
      <div className="bg-slate-100">
        <div className=" md:px-20 lg:px-60 py-10 m-10 text-left ">
          <p className="text-3xl font-bold text-gray-800 ">
            <spna className="font-normal text-sm text-red-700">
              Some Hand-Picked
            </spna>
            <br />
            <span className=" border-l-2 border-red-700">
              {" "}
              &nbsp;Private Customized Tours For You
            </span>
          </p>

          <p className="mt-6 text-gray-700 text-sm font-semibold leading-7 ">
            What is a Private Customized Tour?
            <br />A Private Customized Tour is a tour that is altered to the
            exact needs of a group (family, friends, or colleagues), a couple,
            or an individual, with a completely customizable itinerary. Private
            tours offer more flexibility and freedom than public tours, which
            have set dates, itineraries, and group sizes.
          </p>

          <p className="mt-2 text-gray-700 text-sm ">
            Here are some things to consider about customized private tours:
          </p>

          <ul className="mt-2 space-y-2 text-gray-700 text-sm  list-disc pl-5">
            <li>
              <b>Itinerary:</b> Planned around the client's preferences.
            </li>
            <li>
              <b>Group size:</b> Private tours allow any group size.
            </li>
            <li>
              <b>Hotels & Services:</b> Choose the category that suits the
              budget.
            </li>
            <li>
              <b>pavel dates:</b> Can depart on any preferred date.
            </li>
            <li>
              <b>Price:</b> Often higher due to customization.
            </li>
          </ul>
        </div>
      </div>
      <div className="sm:block  hidden">
        <div className="grid  grid-cols-4 gap-8 m-12 ">
          {tour.map((item, index) => (
            <a key={index} href={item.link}>
              <div className="relative group rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  className="rounded-lg shadow-2xl pansition duration-300"
                />

                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-85 pansition duration-300"></div>
              </div>

              <p className="mt-4 text-xs text-center font-bold">{item.title}</p>
            </a>
          ))}
        </div>
      </div>
      <div className="lg:hidden block">
        <p className="text-md text-center m-6 font-normal">
          Here is a list of the most-loved and best selling Pakistan Tour
          Packages 2025 by{" "}
          <span className="font-bold">NatureHikePakistan.pk:</span>
        </p>
        <div className="p-4">
          <p className="bg-[#a0c159] p-3 text-center font-bold text-white">
            TAILOR-MADE TOUR PACKAGES
          </p>

          <Link to="/Kalam4Days">
            <p className="text-[#a0c159] font-semibold text-sm p-3 hover:underline bg-slate-100">
              4 Days Kalam, Mahudand Lake, Malam Jabba, and Green Top Tour
            </p>
          </Link>
          <Link to="/KalamSwat3Days">
            <p className="text-[#a0c159] font-semibold text-sm hover:underline p-3">
              3 Days Malam Jabba and Kalam Tour
            </p>
          </Link>
          <Link to="/HunzaValley6">
            <p className="text-[#a0c159] font-semibold text-sm hover:underline bg-slate-100 p-3">
              4 Days Murree, Papiata, Nathia Gali, and Khanaspur Ayubia Tour
            </p>
          </Link>
          <Link to="/Shogran">
            {" "}
            <p className="text-[#a0c159] font-semibold text-sm hover:underline  p-3">
              3 Days Shogran, Siri Paye, and Nathia Gali Tour
            </p>
          </Link>
          <Link to="/SkarduDays6">
            {" "}
            <p className="text-[#a0c159] font-semibold text-sm hover:underline bg-slate-100 p-3">
              6 Days By-Road Skardu Valley Tour
            </p>
          </Link>
          <Link to="/SkarduDays7">
            {" "}
            <p className="text-[#a0c159] font-semibold text-sm hover:underline  p-3">
              7 Days Malam Jabba, Kalam, and Nathia Gali Tour
            </p>
          </Link>
          <Link to="/SkarduDays8">
            {" "}
            <p className="text-[#a0c159] font-semibold text-sm hover:underline bg-slate-100 p-3">
              8 Days By-Road Hunza Valley and Skardu Valley Tour
            </p>
          </Link>
          <Link to="/SkarduAirDays5">
            {" "}
            <p className="text-[#a0c159] font-semibold text-sm hover:underline  p-3">
              5 Days By-Air Skardu Valley Tour
            </p>
          </Link>
        </div>
      </div>

      <p className="uppercase text-center text-4xl  font-bold">
        How to book a trip?
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 m-8 gap-4">
        <div className="hover:bg-[#a0c159] p-14 rounded-md group hover:text-white text-center">
          <MapIcon className="mx-auto mb-4 h-12 w-12 text-[#a0c159] group-hover:text-white" />
          <p className="font-semibold text-2xl uppercase">Find a Destination</p>
          <p className="text-xs mt-4">
            from our list of tours updated on "Tours" page.
          </p>
        </div>

        <div className="hover:bg-[#a0c159] p-14 rounded-md hover:text-white text-center group">
          <TruckIcon className="mx-auto mb-4 h-12 w-12 text-[#a0c159] group-hover:text-white" />
          <p className="font-semibold text-2xl uppercase">Pick-up</p>
          <p className="text-xs mt-4">
            the trip that best suits your requirements.
          </p>
        </div>

        <div className="hover:bg-[#a0c159] p-14 rounded-md hover:text-white group text-center">
          <PhoneIcon className="mx-auto mb-4 h-12 w-12 text-[#a0c159] group-hover:text-white" />
          <p className="font-semibold text-2xl uppercase">Contact Us</p>
          <p className="text-xs mt-4">
            to book your trip according to your needs.
          </p>
        </div>

        <div className="hover:bg-[#a0c159] p-14 rounded-md hover:text-white text-center group">
          <SparklesIcon className="mx-auto mb-4 h-12 w-12 text-[#a0c159] group-hover:text-white" />
          <p className="font-semibold text-2xl uppercase">Go & Explore Now</p>
          <p className="text-xs mt-4">Pack your bags and ENJOY.</p>
        </div>
      </div>

      <div className="bg-slate-100 pb-7">
        <div className=" md:px-20 lg:px-60 py-10 m-10 text-left ">
          <p className="text-3xl font-bold text-gray-800 ">
            <spna className="font-normal text-sm text-red-700 ">
              Our Weekly
            </spna>
            <br />
            <span className=" border-l-2 border-red-700">
              {" "}
              &nbsp;Public Group Tours
            </span>
          </p>

          <p className="mt-6 text-gray-700 text-sm font-semibold leading-7 ">
            A Public Group Tour is a tour that is open to the general public and
            is usually offered on a set day and time. Group tours can be a good
            option for people who want to meet new people and travel at a lower
            cost than a private tour.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:m-16 m-4 ">
          {publictour.map((item, index) => (
            <a key={index} href={item.link} className="relative  rounded-xl ">
              <img
                src={item.image1}
                className="rounded-xl h-40 md:h-60 lg:h-full w-full object-cover brightness-75    duration-1000
"
              />
              {/* TITLE TEXT ON IMAGE */}
              <div className="absolute bottom-0 w-full -panslate-x-1/2 text-white text-center hover:bg-white hover:text-black  p-4 hover:pt-8 hover:rounded-xl">
                <p className="text-left ">
                  <span className=" font-semibold text-2xl  font-mono drop-shadow-lg hover:text-red-700 hover:underline">
                    {item.title}
                  </span>
                </p>
                <p className="text-xl font-medium text-left drop-shadow-lg ">
                  From{" "}
                  <span className="text-red-700 font-semibold">
                    {item.price}
                  </span>
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="max-w-6xl mx-auto p-4 space-y-6">
        {/* Full Map Section */}
        <div className="w-full rounded-lg overflow-hidden shadow-lg"></div>

        {/* Content Section */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">
            All About Pakistan Tour Packages
          </h1>

          <p>
            Pakistan Tour Packages 2025 — We at NatureHikePakistan.pk, one of
            the most dedicated Pakistan Tour Agency, welcome you to the land of
            hospitality, diverse landscapes, high mountains, forests, grassy
            lands, deserts, glaciers, waterfalls, lakes, rivers, coastal areas,
            cities, culture, numerous cuisines, all seasons, and whatnot.
            Pakistan Tours is a complete package...
          </p>

          <p>
            Northern Areas of Pakistan are blessed with the finest in the entire
            world. From the world’s 2nd largest mountain peak, the K2 (Godwin
            Austen), to the unique Cold Deserts in Skardu, sparkling waterfalls,
            crystal clear lakes and rivers, elusive animals, rare minerals,
            beneficial herbs, unique gems, lush green meadows, dense forests,
            rich history tracing back to Alexander the Great, Buddhism, and
            Hinduism have their roots in the Northern Areas of Pakistan. It
            would be incomplete without the mention of the 2nd highest Plateaus
            in the world, the Deosai Plains. It is the place where the three
            highest mountain ranges of Himalaya, Karakoram, and the Hindu Kush
            meet.
          </p>

          <p>
            The people of Northern Pakistan are exceptionally welcoming and
            attached to their roots and vibrant culture. They are inherently one
            of the best craftsmen in the world, which is evident through their
            centuries-old forts and other prominent buildings, their household
            items, and their decorative handicraft objects. Indeed, the
            supremacy of Northern Pakistan can never be ignored.
          </p>

          <h2 className="text-2xl font-semibold">
            Customized Travel Packages of Pakistan
          </h2>
          <p>
            Every customer is different. Some people want a relaxing trip to
            calm and quiet destinations, some want to visit the local areas and
            meet the local community, some need an adventurous escape to the
            wildest places, some want to have the best food and culinary
            experience, some need to have the most Instagrammable content, while
            some want to have their pockets filled with the cultural richness,
            some need the luxury, and some require it to be pocket-friendly...
          </p>

          <h2 className="text-2xl font-semibold">
            List of Pakistan Tour and Travel Packages
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Skardu Tour Packages</li>
            <li>Hunza Tour Packages</li>
            <li>Naran Kaghan Tour Packages</li>
            <li>Azad Kashmir Tour Packages</li>
            <li>Swat Kalam Tour Packages</li>
            <li>Kumrat Tour Packages</li>
            <li>Murree Galiyat Tour Packages</li>
          </ul>

          <h2 className="text-2xl font-semibold">
            How to Plan Your Customized Pakistan Tour Packages?
          </h2>
          <p>Ping us with the following details:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Your desired destinations (e.g., Hunza, Skardu, and Naran Kaghan)
            </li>
            <li>Total number of days and dates of your trip</li>
            <li>Total number of persons on the trip</li>
            <li>
              Preferred vehicle for your trip (e.g., Sedan, Van, or Coaster)
            </li>
            <li>Your expectations from the trip</li>
          </ul>

          <h2 className="text-2xl font-semibold">
            Best Time to Visit Pakistan
          </h2>
          <p>
            Pakistan is blessed with all four seasons, and every season has its
            essence. While summers are sweltering in the southern part of the
            country, winters are very pleasant. On the other hand, winters in
            the northern part of the country are very harsh, while summers are
            comparatively quite welcoming with moderate temperatures...
          </p>

          <p>
            Hunza Valley is accessible throughout the year, and the best time to
            visit Hunza Valley is from May to October... Cherry Blossom season
            in Hunza Valley is from March till April.
          </p>

          <p>
            The best time to visit Skardu Valley is during the summer months of
            June to September...
          </p>

          <p>
            Neelum Valley is best visited from May to July, with clear skies,
            fresh green fields, and wildflowers...
          </p>

          <p>
            Naran Kaghan is ideal from June to September. Kalam Swat from June
            to August. Murree and Galiyat remain accessible throughout the year
            except for extreme snow days...
          </p>
        </div>
      </div>

      {/* Google Map Section */}
      <p className="uppercase text-center text-red-600 text-2xl font-bold">
        Find us
      </p>
      <p className="uppercase text-center text-4xl mb-6 font-bold">
        Where are we located?
      </p>
      <div className=" mb-8 rounded-lg overflow-hidden  flex justify-center">
        <iframe
          title="Packages Mall Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13610.288177434428!2d74.31392666027739!3d31.461182542920254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904cb833394cb%3A0xa3d1878d71ed7da7!2sBEYOND%20EAST%20-%20Packages%20Mall!5e0!3m2!1sen!2s!4v1719999999999"
          width="85%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          className="rounded-md border"
        ></iframe>
      </div>
      <div className="p-16 m-5 bg-black mt-10">
        <p className="font-mono text-center text-white text-3xl ">
          Ready for an unforgetable tour?​
        </p>
        <p className="text-yellow-500 text-center mt-3 text-4xl">
          Plan your trips with us
        </p>
      </div>

      <div className="p-9 m-5  flex justify-center">
        <img
          className="lg:max-w-xl"
          src="https://naturehikepakistan.pk/wp-content/uploads/2025/10/private-honeymoon-tour-packages-min-scaled.png"
        />
      </div>
    </div>
  );
}

export default Home;
