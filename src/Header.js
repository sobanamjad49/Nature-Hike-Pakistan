import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
      <div className=" lg:block hidden">
        <div className="flex justify-between items-center bg-[#313041] p-4 px-4">
          {/* Contact Info */}
          <div className="flex space-x-6 text-white text-sm items-center px-4">
            <div className="flex items-center space-x-1 hover:text-red-600 cursor-pointer">
              <FaPhoneAlt />
              <span>+92 303 4364467</span>
            </div>
            <div className="flex items-center space-x-1 hover:text-red-600 cursor-pointer">
              <FaEnvelope />
              <span>info@naturehikepakistan.pk</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 text-white text-lg px-5">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="hover:text-red-600 cursor-pointer" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-red-600 cursor-pointer" />
            </a>
            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok className="hover:text-red-600 cursor-pointer" />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="hover:text-red-600 cursor-pointer" />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="hover:text-red-600 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
      {/* Navigation Menu with Icons */}
      <div className="py-4  lg:block hidden bg-white shadow-lg">
        <div className="flex justify-center   space-x-14 mb-3">
          {/* Home */}
           <Link to="/">
          <div>
           <img
              className="w-44"
              src="https://naturehikepakistan.pk/wp-content/uploads/2021/08/Logo.png"
            />
          </div></Link> 

          <div className="relative group inline-block text-blue-900 font-medium cursor-pointer">
            <div className="flex items-center space-x-1 relative transition-colors duration-300 group-hover:text-orange-500">
                <Link to="/"><span className="uppercase text-sm">Home</span>  </Link>
              {/* Underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </div>
          </div>

          {/* Info */}
          <div className="relative group inline-block text-blue-900 font-medium cursor-pointer">
            <div className="flex items-center space-x-1 relative transition-colors duration-300 group-hover:text-orange-500">
              <span className="uppercase text-sm">Pakistan Tours</span>
              {/* Underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </div>

            {/* Dropdown */}
            <div
              className="absolute left-0 top-full mt-[5px] bg-white shadow-lg  p-6 z-20 text-black w-max 
                  opacity-0 translate-y-2 pointer-events-none 
                  transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto"
            >
               <Link to="/SwatKalamTour"><p className="relative text-xs text-blue-900 cursor-pointer hover:text-orange-500 inline-block group/item">
                Swat Kalam Tour Packages
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover/item:w-full"></span>
              </p></Link> 

              <br />

              <Link to="/HunzaTour"> <p className="relative text-xs text-blue-900 hover:text-orange-500 cursor-pointer inline-block group/item mt-4">
                Hunza Tour Packages
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover/item:w-full"></span>
              </p></Link>
              <br />

               <Link to="/SkarduTour"><p className="relative text-xs text-blue-900 hover:text-orange-500 cursor-pointer inline-block group/item mt-4">
                Skardu Tour Packages
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover/item:w-full"></span>
              </p></Link>
              <br />

               <Link to="/NaranKaghan"> <p className="relative text-xs text-blue-900 hover:text-orange-500 cursor-pointer inline-block group/item mt-4">
                Naran Kaghan Tour Packages
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover/item:w-full"></span>
              </p></Link>
            </div>
          </div>

          {/* Tours */}
          <div className="relative group inline-block text-blue-900 font-medium cursor-pointer">
            <div className="flex items-center space-x-1 relative transition-colors duration-300 group-hover:text-orange-500">
              <span className="uppercase text-sm">City Tour</span>
              {/* Underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </div>

            {/* Dropdown */}
            <div
              className="absolute left-0 top-full mt-[5px] bg-white shadow-lg p-6 z-20 text-black w-max 
                  opacity-0 translate-y-2 pointer-events-none 
                  transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto"
            >
             <Link to="/LahoreCityTour">   <p className="relative text-xs  text-blue-900 cursor-pointer hover:text-orange-500 inline-block group/item">
                Lahore City Tour
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover/item:w-full"></span>
              </p></Link>
            </div>
          </div>

          {/* Transport */}
          <div className="relative group inline-block text-blue-900 font-medium cursor-pointer">
            <div className="flex items-center space-x-1 relative transition-colors duration-300 group-hover:text-orange-500">
              <Link to="/About"><span className="uppercase text-sm">About Us</span>
              {/* Underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>   </div>
          </div>

          <div className="relative group inline-block text-blue-900 font-medium cursor-pointer">
            <div className="flex items-center space-x-1 relative transition-colors duration-300 group-hover:text-orange-500">
             <Link to="/Blogs"> <span className="uppercase text-sm">Blogs</span>
              {/* Underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
         </Link>  </div></div>
          {/* Contact */}

          <div className="relative group inline-block text-blue-900 font-medium cursor-pointer">
            <div className="flex items-center space-x-1 relative transition-colors duration-300 group-hover:text-orange-500">
            <Link to="/ContactUs">  <span className="uppercase text-sm">Contact Us</span>
              {/* Underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>   </div>
          </div>
        </div>
      </div>
   
    <div className="block lg:hidden ">
  <div className="flex mb-3 justify-between items-center p-4 shadow-md">
    <Link to="/" onClick={() => setOpenMenu(false)}>
      <div>
        <img
          className="w-40"
          src="https://naturehikepakistan.pk/wp-content/uploads/2021/08/Logo.png"
        />
      </div>
    </Link>

    <div>
      <button onClick={() => setOpenMenu(true)} className="text-2xl">
        &#9776;
      </button>
    </div>
  </div>

  {/* LEFT DRAWER - MENU */}
  {openMenu && (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-md"
        onClick={() => setOpenMenu(false)}
      ></div>

      {/* Drawer */}
      <div className="absolute top-0 left-0 bg-white w-[24rem] h-full shadow-lg transform transition-transform duration-300 translate-x-0">
        <div className="flex justify-end p-2 ">
          <button
            onClick={() => setOpenMenu(false)}
            className="text-2xl text-gray-600 hover:text-red-500 cursor-pointer"
          >
            &times;
          </button>
        </div>

        <hr className="w-[24rem]" />

        {/* HOME */}
        <Link to="/" onClick={() => setOpenMenu(false)}>
          <div className="text-lg font-bold text-blue-900 p-4">Home</div>
        </Link>

        <hr className="ml-3 mr-7" />

        {/* Pakistan Tours */}
        <div className="relative group inline-block cursor-pointer">
          <div className="text-lg p-4 font-bold text-blue-900 transition-colors duration-300 group-hover:text-orange-500">
            Pakistan Tours
          </div>

          <div
            className="absolute left-0 m-3 top-full mt-[5px] bg-white shadow-lg p-6 z-20 text-black w-max
              opacity-0 translate-y-2 pointer-events-none
              transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto"
          >
            <Link to="/SwatKalamTour" onClick={() => setOpenMenu(false)}>
              <p className="relative text-xs text-blue-900 cursor-pointer hover:text-orange-500 inline-block group/item">
                Swat Kalam Tour Packages
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover/item:w-full"></span>
              </p>
            </Link>

            <br />

            <Link to="/HunzaTour" onClick={() => setOpenMenu(false)}>
              <p className="relative text-xs text-blue-900 hover:text-orange-500 cursor-pointer inline-block group/item mt-4">
                Hunza Tour Packages
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover/item:w-full"></span>
              </p>
            </Link>

            <br />

            <Link to="/SkarduTour" onClick={() => setOpenMenu(false)}>
              <p className="relative text-xs text-blue-900 hover:text-orange-500 cursor-pointer inline-block group/item mt-4">
                Skardu Tour Packages
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover/item:w-full"></span>
              </p>
            </Link>

            <br />

            <Link to="/NaranKaghan" onClick={() => setOpenMenu(false)}>
              <p className="relative text-xs text-blue-900 hover:text-orange-500 cursor-pointer inline-block group/item mt-4">
                Naran Kaghan Tour Packages
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover/item:w-full"></span>
              </p>
            </Link>
          </div>
        </div>

        <hr className="ml-3 mr-7" />

        {/* City Tours */}
        <div className="relative group inline-block cursor-pointer">
          <div className="text-lg p-4 font-bold text-blue-900 transition-colors duration-300 group-hover:text-orange-500">
            City Tours
          </div>

          <div
            className="absolute left-0 m-3 top-full mt-[5px] bg-white shadow-lg p-6 z-20 text-black w-max
              opacity-0 translate-y-2 pointer-events-none
              transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto"
          >
            <Link to="/LahoreCityTour" onClick={() => setOpenMenu(false)}>
              <p className="relative text-xs text-blue-900 cursor-pointer hover:text-orange-500 inline-block group/item">
                Lahore City Tour
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover/item:w-full"></span>
              </p>
            </Link>
          </div>
        </div>

        <hr className="ml-3 mr-7" />

        {/* About */}
        <Link to="/About" onClick={() => setOpenMenu(false)}>
          <div className="text-lg font-bold text-blue-900 p-4">About Us</div>
        </Link>

        <hr className="ml-3 mr-7" />

        {/* Blogs */}
        <Link to="/Blogs" onClick={() => setOpenMenu(false)}>
          <div className="text-lg font-bold text-blue-900 p-4">Blogs</div>
        </Link>

        <hr className="ml-3 mr-7" />

        {/* Contact */}
        <Link to="/ContactUs" onClick={() => setOpenMenu(false)}>
          <div className="text-lg font-bold text-blue-900 p-4">Contact Us</div>
        </Link>

        <hr className="ml-3 mr-7" />
      </div>
    </div>
  )}
</div>

    </div>
  );
}

export default Header;
