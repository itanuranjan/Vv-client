import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainHome from "./components/MainHome/MainHome";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Features from "./components/pages/Features";
import Login from "./components/pages/Login";
import TopPlacesVaranasi from "./components/Cities/Varanasi/Top-PlacesVaranasi"
import ImageCollection from "./components/MainHome/ResponsiveImageGallery";
// import Gallery from "./components/MainHome/Gallery";
import ResponsiveCardCarousel from "./components/MainHome/ResponsiveCardCarousel";
import Footer from "./components/Footer/Footer";
import Navbar1 from './components/Navbar/Navbar1';
import Varanasi from "./components/Cities/Varanasi/Varanasi";
import PlaceDetails from "./components/Cities/Varanasi/PlaceDetails";
import InputData from "./components/InputData";
import Admin from "./admin/Admin";
import CityRoutes from "./CityRoutes";

function App() {
  return (
   <CityRoutes/>
  );
}

export default App;
