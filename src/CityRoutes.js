import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainHome from "./components/MainHome/MainHome";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Features from "./components/pages/Features";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Otp from "./components/pages/Otp";
import Error from "./components/pages/Error";
import TopPlacesVaranasi from "./components/Cities/Varanasi/Top-PlacesVaranasi";
import ImageCollection from "./components/MainHome/ResponsiveImageGallery";
import TopCities from "./components/MainHome/TopCities";
import Footer from "./components/Footer/Footer";
import Navbar1 from "./components/Navbar/Navbar1";
import Varanasi from "./components/Cities/Varanasi/Varanasi";
import PlaceDetails from "./components/Cities/Varanasi/PlaceDetails";
import TopCitiesInputData from "./admin/MainHome/TopCities/InputData";
import HeroInputData from "./admin/MainHome/HeroSection/InputData";
import RecoInputData from "./admin/MainHome/TopRecommended/InputData";
import ThingsToDoInputData from "./admin/MainHome/ThingsToDo/InputData";
import GallaryInputData from "./admin/MainHome/ImageGallary/InputData";
import Admin from "./admin/Admin";
import ShowData from "./admin/ShowData";
import UserProfile from "./components/pages/UserProfile";
import TeamPage from "./components/pages/TeamPage";
import OurStoryPage from "./components/pages/OurStoryPage";
import Gallery from "./components/pages/Gallary";
import CareerPage from "./components/pages/Career";
import QueryForm from "./components/MainHome/QueryForm";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import TermsCondition from "./components/pages/TermsCondition";
import Cities from "./components/Cities/Cities";

function CityRoutes() {
  return (
    <Router>
      {/* <MainHome /> */}
      {/* <ImageCollection /> */}
      {/* <Gallery /> */}
      {/* <Header/> */}
      <Navbar1 />
      <Routes>
        <Route path="/" exact element={<MainHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user/otp" element={<Otp />} />
        <Route path="/*" element={<Error />} />
        <Route path="/our-team" element={<TeamPage />} />
        <Route path="/about-us" element={<OurStoryPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/career" element={<CareerPage />} />
        {/* <Route path="/" exact element={<TopCities />} /> */}

        {/* //Raise Query Route */}
        <Route path="/raise-query" element={<QueryForm />} />


        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        <Route path="/terms-of-usage" element={<TermsCondition />} />



      {/* //Cities Route */}

        
        <Route path="/cities/varanasi" element={<Varanasi />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/cities/new-delhi" element={<MainHome />} />
        <Route path="/cities/mumbai" element={<MainHome />} />
        <Route path="/cities/goa" element={<MainHome />} />
        <Route path="/cities/agra" element={<MainHome />} />
        <Route path="/cities/rishikesh" element={<MainHome />} />
        <Route path="/cities/jaipur" element={<MainHome />} />
        <Route path="/cities/kolkata" element={<MainHome />} />
        <Route path="/cities/puducherry" element={<MainHome />} />
        <Route path="/cities/hyderabad" element={<MainHome />} />
        <Route path="/cities/udaipur" element={<MainHome />} />
        <Route path="/cities/amritsar" element={<MainHome />} />
        <Route path="/cities/jodhpur" element={<MainHome />} />
        <Route path="/cities/shimla" element={<MainHome />} />
        <Route path="/cities/darjeeling" element={<MainHome />} />
        <Route path="/cities/chennai" element={<MainHome />} />
        <Route path="/cities/manali" element={<MainHome />} />
        <Route path="/cities/mahabaleshwar" element={<MainHome />} />
        <Route path="/cities/jaisalmer" element={<MainHome />} />
        <Route path="/cities/kochi" element={<MainHome />} />
        <Route path="/cities/nainital" element={<MainHome />} />
        <Route path="/cities/bengaluru" element={<MainHome />} />
        <Route path="/cities/mysuru" element={<MainHome />} />
        <Route path="/cities/gangtok" element={<MainHome />} />
        <Route path="/cities/mathura" element={<MainHome />} />
        <Route path="/cities/visakhapatnam" element={<MainHome />} />
        <Route path="/cities/kasol" element={<MainHome />} />
        <Route path="/cities/mussoorie" element={<MainHome />} />
        <Route path="/cities/srinagar" element={<MainHome />} />
        <Route path="/cities/rameswaram" element={<MainHome />} />
        <Route path="/cities/tirupati" element={<MainHome />} />
        <Route path="/cities/leh" element={<MainHome />} />
        <Route path="/cities/madurai" element={<MainHome />} />
        <Route path="/cities/panaji" element={<MainHome />} />
        <Route path="/cities/shillong" element={<MainHome />} />

        <Route
          path="/cards/kashi-vishwanath-temple" element={<PlaceDetails />}
        />
        <Route path="/admin" exact element={<Admin />} />
        <Route path="/profile" exact element={<UserProfile />} />
        <Route path="/admin/showdata" exact element={<ShowData />} />
        <Route path="/admin/addhome/topcities" element={<TopCitiesInputData />} />
        <Route path="/admin/addhome/hero" element={<HeroInputData />} />
        <Route path="/admin/addhome/toprecommendation" element={<RecoInputData />} />
        <Route path="/admin/addhome/thingstodo" element={<ThingsToDoInputData />} />
        <Route path="/admin/addhome/gallery" element={<GallaryInputData />} />

        {/* //TopRecommendation Places Route */}
        <Route path="/places/prem-mandir" element={<MainHome />} />
        <Route path="/places/ram-temple" element={<MainHome />} />
        <Route path="/places/shimla" element={<MainHome />} />
        <Route path="/places/manali" element={<MainHome />} />
        <Route path="/places/taj-mahal" element={<MainHome />} />

        {/* //Things to do Route */}
        <Route path="/activities/experience-varanasi-at-dawn" element={<MainHome />} />
        <Route path="/activities/set-your-eyes-on-tajmahal" element={<MainHome />} />
        <Route path="/activities/world-largest-forest-sundarwan" element={<MainHome />} />
        <Route path="/activities/camp-under-thar-desert" element={<MainHome />} />
        <Route path="/activities/rajhurajpur-art-crafts-village" element={<MainHome />} />

       {/* //Budget tour Route */}
        <Route path="/budget-tour/kasmir" element={<MainHome />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default CityRoutes;
