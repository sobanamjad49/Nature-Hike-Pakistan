import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-[#313041] p-16">
        <div className="flex flex-col items-center lg:items-left md:items-start ">
          <img
            className="w-52"
            src="https://naturehikepakistan.pk/wp-content/uploads/2023/01/Logo-Round.png"
            alt="Logo"
          />
          <p className="uppercase text-white font-medium mt-5 mb-9 text-center md:text-left lg:text-center">
            Your Journey, Our Plan!
          </p>
        </div>

        <div>
      <p className="text-white text-xl lg:text-left text-center font-semibold mb-4 mt-6">
            EXPLORE MORE
          </p>
           <Link to="/About"><p className="text-gray-400 text-[16px] lg:text-left text-center hover:text-white hover:underline mt-2">
            Know About us
          </p></Link>
         
            <Link to="/Blogs"><p className="text-gray-400 text-[16px] lg:text-left text-center hover:text-white hover:underline mt-1">
            Blogs
          </p></Link>
          <Link to="/ContactUs"><p className="text-gray-400 text-[16px] lg:text-left text-center hover:text-white hover:underline mt-1">
            Contact Us
          </p></Link> 
          <Link to="/TourPolicy"><p className="text-gray-400 text-[16px] lg:text-left text-center hover:text-white hover:underline mt-1">
            Tour Policy
          </p></Link>
         <Link to="/PrivacyPolicy"> <p className="text-gray-400 text-[16px] lg:text-left text-center hover:text-white hover:underline mt-1">
            Privacy Policy
          </p></Link>
        </div>
        <div>
          <p className="text-white text-xl lg:text-left text-center font-semibold mb-4 mt-6">
            Destinations
          </p>
         <Link to="/HunzaTour"> <p className="text-gray-400 lg:text-left text-center text-[16px] hover:text-white hover:underline mt-1">
            Hunza Tour Packages
          </p></Link>
         <Link to="/SkarduTour"><p className="text-gray-400 lg:text-left text-center text-[16px] hover:text-white hover:underline mt-1">
            Skardu Tour Packages
          </p></Link> 
         <Link to="/NaranKaghan"> <p className="text-gray-400 lg:text-left text-center text-[16px] hover:text-white hover:underline mt-1">
            NaranKaghan Tour Packages
          </p></Link>
           <Link to="/SwatKalamTour"> <p className="text-gray-400 lg:text-left text-center text-[16px] hover:text-white hover:underline mt-1">
            Swat Kalam Tour Packages
          </p></Link>
             <Link to="/LahoreCityTour"><p className="text-gray-400 lg:text-left text-center text-[16px] hover:text-white hover:underline mt-1">
            LahoreCity Tour Packages
          </p></Link>
        </div>
        <div>
          <p className="text-white text-xl lg:text-left text-center font-semibold mb-4 mt-6">
            Contact INFORMATION
          </p>
          <p className="text-gray-400 lg:text-left text-center text-[16px] hover:text-white hover:underline mt-1">
            +92 301 2345678
          </p>
          <p className="text-gray-400 lg:text-left text-center text-[16px] hover:text-white hover:underline mt-1">
            PL-26,Trade Center,Gulberg II,Lahore{" "}
          </p>
          <p className="text-gray-400 lg:text-left text-center text-[16px] hover:text-white hover:underline mt-1">
            info@naturehikepakistan.com
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Footer;
