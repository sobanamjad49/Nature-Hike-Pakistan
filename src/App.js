import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Public Pages
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import HunzaTour from "./HunzaTour";
import HunzaDays5 from "./HunzaDays5";
import HunzaValley6 from "./HunzaValley6";
import HunzaDay8 from "./HunzaDay8";
import HunzaDay10 from "./HunzaDay10";
import HunzaAir4Days from "./HunzaAir4Days";
import HunzaAir5Days from "./HunzaAir5Days";
import HunzaAir6Days from "./HunzaAir6Days";
import HunzaAir7Days from "./HunzaAir7Days";
import HunzaGroup5Days from "./HunzaGroup5Days";
import HunzaGroup8Days from "./HunzaGroup8Days";
import SkarduTour from "./SkarduTour/SkarduTour";
import SkarduDays6 from "./SkarduTour/SkarduDays6";
import SkarduDays5 from "./SkarduTour/SkarduDays5";
import SkarduDays7 from "./SkarduTour/SkarduDays7";
import SkarduDays8 from "./SkarduTour/SkarduDays8";
import SkarduDays10 from "./SkarduTour/SkarduDays10";
import SkarduGroupDays8 from "./SkarduTour/SkarduGroupDays8";
import SkarduAirDays4 from "./SkarduTour/SkarduAirDays4";
import SkarduAirDays5 from "./SkarduTour/SkarduAirDays5";
import SwatKalamTour from "./SwatKalam/SwatKalamTour";
import NaranKaghan from "./NaranKaghan";
import LahoreCityTour from "./LahoreCityTour";
import Kalam2Days from "./SwatKalam/Kalam2Days";
import Kalam3Days from "./SwatKalam/Kalam3Days";
import Kalam4Days from "./SwatKalam/Kalam4Days";
import Kalam5Days from "./SwatKalam/Kalam5Days";
import Kalam5DaysMalamJabba from "./SwatKalam/Kalam5DaysMalamJabba";
import Kalam7Days from "./SwatKalam/Kalam7Days";
import KalamSwat3Days from "./SwatKalam/KalamSwat3Days";
import BabuSarTop from "./NaranTour.js/BabuSarTop";
import KunharRiver from "./NaranTour.js/KunharRiver";
import Naran from "./NaranTour.js/Naran";
import Shogran from "./NaranTour.js/Shogran";
import SiriPaye from "./NaranTour.js/SiriPaye";
import HistoricLahoreStreets from "./LahoreCity.js/HistoricLahoreStreets";
import ShalimarGarden from "./LahoreCity.js/ShalimarGarden";
import WazirKhan from "./LahoreCity.js/WazirKhan";
import LahoreFort from "./LahoreCity.js/LahoreFort";
import Blogs from "./Blogs";
import ContactUs from "./ContactUs";
import About from "./About";

// Admin Pages
import AdminLogin from "./pages/AdminLogin";
import ProtectedRoute from "./components/ProtectedRoute";

import ToursAdmin from "./pages/ToursAdmin";
import BookingsAdmin from "./pages/BookingsAdmin";
import ContactsAdmin from "./pages/ContactsAdmin";

import DashboardHome from "./pages/DashboardHome";
import DashboardLayout from "./components/DashboardLayout";
import PrivacyPolicy from "./PrivacyPolicy";
import TourPolicy from "./TourPolicy";
import AuthAdmin from "./pages/Authadmin";


function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin') || location.pathname.startsWith('/dashboard');

  return (
    <>
      {!isAdminRoute && <Header />}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Blogs" element={<Blogs />} />

        {/* Hunza Tours */}
        <Route path="/HunzaTour" element={<HunzaTour />} />
        <Route path="/HunzaDays5" element={<HunzaDays5 />} />
        <Route path="/HunzaValley6" element={<HunzaValley6 />} />
        <Route path="/HunzaDay8" element={<HunzaDay8 />} />
        <Route path="/HunzaDay10" element={<HunzaDay10 />} />
        <Route path="/HunzaAir4Days" element={<HunzaAir4Days />} />
        <Route path="/HunzaAir5Days" element={<HunzaAir5Days />} />
        <Route path="/HunzaAir6Days" element={<HunzaAir6Days />} />
        <Route path="/HunzaAir7Days" element={<HunzaAir7Days />} />
        <Route path="/HunzaGroup5Days" element={<HunzaGroup5Days />} />
        <Route path="/HunzaGroup8Days" element={<HunzaGroup8Days />} />

        {/* Skardu Tours */}
        <Route path="/SkarduTour" element={<SkarduTour />} />
        <Route path="/SkarduDays6" element={<SkarduDays6 />} />
        <Route path="/SkarduDays5" element={<SkarduDays5 />} />
        <Route path="/SkarduDays7" element={<SkarduDays7 />} />
        <Route path="/SkarduDays8" element={<SkarduDays8 />} />
        <Route path="/SkarduDays10" element={<SkarduDays10 />} />
        <Route path="/SkarduGroupDays8" element={<SkarduGroupDays8 />} />
        <Route path="/SkarduAirDays4" element={<SkarduAirDays4 />} />
        <Route path="/SkarduAirDays5" element={<SkarduAirDays5 />} />

        {/* Swat Tours */}
        <Route path="/SwatKalamTour" element={<SwatKalamTour />} />
        <Route path="/Kalam2Days" element={<Kalam2Days />} />
        <Route path="/Kalam3Days" element={<Kalam3Days />} />
        <Route path="/Kalam4Days" element={<Kalam4Days />} />
        <Route path="/Kalam5Days" element={<Kalam5Days />} />
        <Route path="/Kalam5DaysMalamJabba" element={<Kalam5DaysMalamJabba />} />
        <Route path="/Kalam7Days" element={<Kalam7Days />} />
        <Route path="/KalamSwat3Days" element={<KalamSwat3Days />} />

        {/* Naran Tours */}
        <Route path="/BabuSarTop" element={<BabuSarTop />} />
        <Route path="/KunharRiver" element={<KunharRiver />} />
        <Route path="/Naran" element={<Naran />} />
        <Route path="/Shogran" element={<Shogran />} />
        <Route path="/SiriPaye" element={<SiriPaye />} />
        <Route path="/NaranKaghan" element={<NaranKaghan />} />
<Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
<Route path="/TourPolicy" element={<TourPolicy />} />

        {/* Lahore Tours */}
        <Route path="/LahoreCityTour" element={<LahoreCityTour />} />
        <Route path="/HistoricLahoreStreets" element={<HistoricLahoreStreets />} />
        <Route path="/ShalimarGarden" element={<ShalimarGarden />} />
        <Route path="/WazirKhan" element={<WazirKhan />} />
        <Route path="/LahoreFort" element={<LahoreFort />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AuthAdmin />} />

        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardHome />} />
          <Route path="tours" element={<ToursAdmin />} />
          <Route path="bookings" element={<BookingsAdmin />} />
          <Route path="contacts" element={<ContactsAdmin />} />
          <Route path="adminlogin" element={<AdminLogin />} />
        </Route>
      </Routes>

      {!isAdminRoute && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
