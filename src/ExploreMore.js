import React, { useEffect } from 'react';

function ExploreMore(){
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Explore More</h1>

      <div className="max-w-4xl mx-auto space-y-4 text-gray-700 text-justify">
        <p>
          Lahore is a city full of rich culture, history, and vibrant life. Beyond the famous landmarks, there are hidden gems, local experiences, and off-the-beaten-path attractions waiting to be explored.
        </p>
        <p>
          Discover traditional bazaars, exquisite Mughal architecture, local food streets, and heritage trails. Take a walk through ancient neighborhoods and immerse yourself in the stories of the city.
        </p>
        <p>
          Explore cultural festivals, art exhibitions, and culinary delights to experience the true essence of Lahore. This page provides tips, suggestions, and information to make the most of your journey through the city.
        </p>
        <p>
          Whether you are a first-time visitor or a seasoned traveler, “Explore More” offers inspiration for unique adventures, memorable experiences, and a deeper connection with the heart of Lahore.
        </p>
      </div>
    </div>
  );
}

export default ExploreMore;
