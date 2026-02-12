import React from "react";

const AboutUs = () => {
  return (
    <div className="mt-24 px-6 md:px-12 bg-gray-50">

      {/* HEADER */}
      <div className="bg-gradient-to-r from-green-600 to-green-400 py-20 text-center rounded-lg shadow-lg">
        <h1 className="text-5xl font-extrabold text-white mb-4">About NatureHike Pakistan</h1>
        <p className="text-gray-100 text-lg max-w-3xl mx-auto">
          Experience the beauty of Pakistan with adventure, comfort, and safety. NatureHike Pakistan brings curated tours, trekking, and exploration for all types of travelers.
        </p>
      </div>

      {/* WHO WE ARE */}
      <div className="max-w-6xl mx-auto mt-16 space-y-10">
        <h2 className="text-4xl font-bold text-green-700 mb-4">Who We Are</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          NatureHike Pakistan is a premier travel and tour company dedicated to offering unforgettable experiences across the country. We organize adventure treks, cultural tours, family trips, and custom packages designed for all levels of travelers.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg">
          Our mission is to showcase Pakistan's natural landscapes, cultural heritage, and hidden gems while ensuring safety, comfort, and memorable experiences for every traveler.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg">
          With a team of professional guides and travel experts, we provide seamless planning, high-quality support, and a personal touch that makes each journey extraordinary.
        </p>

        {/* OUR VALUES */}
        <h2 className="text-4xl font-bold text-green-700 mt-12 mb-4">Our Core Values</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg">
          <li><strong>Safety First:</strong> Prioritizing traveler safety on every journey.</li>
          <li><strong>Adventure & Exploration:</strong> Creating exciting and inspiring travel experiences.</li>
          <li><strong>Customer Satisfaction:</strong> Ensuring memorable journeys and happy clients.</li>
          <li><strong>Integrity & Transparency:</strong> Honest communication and services.</li>
          <li><strong>Sustainability:</strong> Supporting local communities and protecting the environment.</li>
        </ul>

        {/* WHY CHOOSE US */}
        <h2 className="text-4xl font-bold text-green-700 mt-12 mb-6">Why Choose NatureHike Pakistan?</h2>
        <div className="space-y-6">
          <p className="text-gray-700 text-lg leading-relaxed">
            NatureHike Pakistan has built a strong reputation for excellence in travel services. We craft tours that combine adventure, cultural experiences, and comfort. Here are reasons travelers trust us:
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg">
            <li><strong>Experienced Guides:</strong> Safe, knowledgeable, and fun travel leaders.</li>
            <li><strong>Tailored Packages:</strong> Personalized trips based on preferences and budget.</li>
            <li><strong>Professional Planning:</strong> All logistics handled professionally.</li>
            <li><strong>Adventure & Safety:</strong> Exciting trips with high safety standards.</li>
            <li><strong>Local Insight:</strong> Unique access to hidden gems and local culture.</li>
            <li><strong>24/7 Support:</strong> Dedicated customer service for peace of mind.</li>
            <li><strong>Affordable Quality:</strong> Premium experiences without overspending.</li>
          </ul>

          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            We continuously update our itineraries for seasonal highlights and new attractions. Every trip is crafted to leave lasting memories, from scenic treks to cultural explorations, ensuring an unforgettable experience in Pakistan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
