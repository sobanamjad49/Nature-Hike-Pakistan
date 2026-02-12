import React, { useEffect} from "react";
import {
  HunzaTours,
  HunzaAirTours,
  HunzaPackageTours,
  Hunzadata,
  HunzaActivities,
} from "./travelData";

function HunzaTour() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



 
  return (
    <div>
      <p className="font-bold text-center text-4xl p-1 pt-5">
        Hunza Tour Packages
      </p>
      <p className="text-center text-sm px-10 pt-5 text-gray-600">
        Hunza has undoubtedly become the most popular tourist destination around
        Pakistan and worldwide, with dozens of natural wonders and years-old
        history. Considering the significance of Hunza Valley and after a lot of
        on-ground research and hard work, we have launched many Hunza Tour
        Packages in 2025 among our Pakistan Tour Packages.
      </p>
      <p className="font-bold text-center text-3xl pt-5 px-3">
        Hunza Customized Tour Packages 2025
      </p>
      <p className="text-center text-sm px-10 pt-5 text-gray-600">
        These Hunza Tour Packages can be custom-built for you to have the
        experience you expect from us as professional Tour Operators in
        Pakistan. You can choose from the list below or customize your Hunza
        Valley Tours according to your requirements.
      </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:m-16 m-4">
  {HunzaTours.map((item, index) => (
    <a
      key={index}
      href={item.link} // make sure each item in HunzaTours has a 'link' property
     
      className="block rounded-xl"
    >
      <div className="rounded-xl p-2">
        <img
          src={item.img}
          alt=""
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
        Hunza Tour Packages <span className="text-[#9FBD21]">By Air </span>
      </p>
      <p className="text-center text-sm p-10 text-gray-600">
        We can reach Hunza by landing at Gilgit Airport from Lahore, Islamabad,
        or Karachi and then by road. These flights are offered by the Pakistan
        International Airlines almost 3 to 5 days a week. You can reach Gilgit
        city in just 1 to 1:15 hours. We at NatureHikePakistan.pk offer Gilgit
        by Air ticket bookings and Hunza Tours by Air. You can select from the
        Hunza by air Tour Packages given below:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:m-16 m-4 ">
        {HunzaAirTours.map((item, index) => (
           <a
      key={index}
      href={item.link} // make sure each item in HunzaTours has a 'link' property
     
      className="block p-2 rounded-xl"
    >
            <img
              src={item.img}
              alt=""
              className="rounded-xl h-40 md:h-60 lg:h-full w-full object-cover brightness-75    
   "
            />

            <p className="text-sm   font-bold font-mono text-center mt-3 ">
              {item.title}
            </p>
          </a>
        ))}
      </div>
      <p className="font-bold text-center text-4xl uppercase p-1 ">
        Hunza Group Tour Packages 2025
      </p>
      <p className="text-center text-sm px-9 pt-4  text-gray-600 ">
        We organize these Hunza Tour Packages throughout the year. You can join
        them as per your schedule, individually or with your group. Here are the
        Hunza Tours that you can choose from:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:m-16 m-4 ">
        {HunzaPackageTours.map((item, index) => (
            <a
      key={index}
      href={item.link} // make sure each item in HunzaTours has a 'link' property
     
      className="block p-2 rounded-xl"
    >
            <img
              src={item.img}
              alt=""
              className="rounded-xl h-40 md:h-60 lg:h-full w-full object-cover brightness-75    
   "
            />

            <p className="text-sm   font-bold font-mono text-center mt-3 ">
              {item.title}
            </p>
          </a>
        ))}
      </div>
      <div className="w-full bg-white px-6 lg:px-20 py-14 text-gray-800 leading-relaxed">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-6">
          Client Category of Customized Hunza Trips:
        </h2>

        <ul className="list-disc ml-6 space-y-4">
          <li>
            <strong>Hunza Valley Couple / Honeymoon Tour Packages</strong> are
            designed to help the newlyweds cherish the new life together with
            all the luxury and solitude, surrounded by the beautiful nature.
          </li>
          <li>
            <strong>Hunza Valley Family Tour Packages</strong> are designed to
            ensure a fun, luxurious, and secure environment for your loved ones
            to intensify the blood bond and acquire memories for a lifetime.
          </li>
          <li>
            <strong>Hunza Valley Students / Friends Group Tour Packages</strong>{" "}
            are designed to have all the fun, engaging activities, and games for
            laughing together, dancing together, and exploring adventurous
            destinations without the hassle of planning. You only have to decide
            what to pack!
          </li>
          <li>
            <strong>
              Hunza Valley Corporate Groups / Business Tour Packages
            </strong>{" "}
            are designed to develop stronger workplace connections, encourage
            team building, and give employees a refreshing break in the beauty
            of nature.
          </li>
        </ul>

        <p className="mt-6 font-semibold">We have</p>

        <ul className="list-disc ml-6 space-y-2 mt-2">
          <li>Hunza Valley Tours from Lahore</li>
          <li>Hunza Valley Tours from Karachi</li>
          <li>Hunza Valley Tours from Islamabad</li>
        </ul>

        <p className="mt-4">
          You can also customize these tours from other cities in Pakistan.
        </p>

        {/* Seasons Section */}
        <h2 className="text-3xl font-bold mt-12 mb-4">
          Best Seasons in Hunza Valley:
        </h2>
        <p className="mb-4">
          The two most famous seasons to visit Hunza Valley are:
        </p>

        <ul className="list-disc ml-6 space-y-4">
          <li>
            <strong>Cherry Blossom in Hunza:</strong> This season welcomes
            spring when pink, white, red, and purple flowers bloom throughout
            the valley. Cherry Blossom occurs during March and April and is a
            magical experience.
          </li>
          <li>
            <strong>Autumn in Hunza:</strong> The most scenic season when every
            leaf turns into a colorful flower with thousands of autumn shades.
            The Hunza Autumn Tour 2025 is something you should not miss.
          </li>
        </ul>
      </div>
      <p className="font-bold text-center text-3xl pt-5 px-3">
        Most Popular Destinations and Attractions to Visit in Hunza Valley
      </p>
      <p className="text-center text-sm px-10 pt-2 text-gray-600">
        Some famous tourist places to visit in Hunza are:
      </p>
      <div className="w-full space-y-20 px-5 md:px-16 py-10">
        {Hunzadata.map((item, index) => (
          <div key={index} className="flex">
            {/* TEXT LEFT - IMAGE RIGHT (even index) */}
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
                <img src={item.img} alt="" className="w-72 object-cover shadow p-2" />
              </>
            ) : (
              <>
                {/* IMAGE LEFT - TEXT RIGHT (odd index) */}
                <img src={item.img} alt="" className="w-72 object-cover shadow p-2" />
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
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Things To Do In Hunza Valley
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Large Left Column */}
            <div className="space-y-6">
              <div className="relative group overflow-hidden rounded-lg">
                  <img
                  src={HunzaActivities[0].img}
                  alt={HunzaActivities[0].title}
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h3 className="text-xl font-semibold text-white">
                    {HunzaActivities[0].title}
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative group overflow-hidden rounded-lg h-48">
                  <img
                    src={HunzaActivities[1].img}
                    alt={HunzaActivities[1].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <h3 className="text-sm font-medium text-white">
                      {HunzaActivities[1].title}
                    </h3>
                  </div>
                </div>

                <div className="relative group overflow-hidden rounded-lg h-48">
                  <img
                    src={HunzaActivities[2].img}
                    alt={HunzaActivities[2].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <h3 className="text-sm font-medium text-white">
                      {HunzaActivities[2].title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Column */}
            <div className="space-y-6">
              <div className="relative group overflow-hidden rounded-lg h-64">
                <img
                  src={HunzaActivities[3].img}
                  alt={HunzaActivities[3].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <h3 className="text-lg font-semibold text-white">
                    {HunzaActivities[3].title}
                  </h3>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-lg h-80">
                <img
                  src={HunzaActivities[4].img}
                  alt={HunzaActivities[4].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <h3 className="text-lg font-semibold text-white">
                    {HunzaActivities[4].title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div className="relative group overflow-hidden rounded-lg h-80">
                <img
                  src={HunzaActivities[5].img}
                  alt={HunzaActivities[5].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <h3 className="text-lg font-semibold text-white">
                    {HunzaActivities[5].title}
                  </h3>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-lg h-64">
                <img
                  src={HunzaActivities[6].img}
                  alt={HunzaActivities[6].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <h3 className="text-lg font-semibold text-white">
                    {HunzaActivities[6].title}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HunzaTour;
