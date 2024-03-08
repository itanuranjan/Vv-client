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

function App() {
  return (
    <Router>
      {/* <MainHome /> */}
      {/* <ImageCollection /> */}
      {/* <Gallery /> */}
      {/* <Header/> */}
      <Navbar1/>
      <Routes>
        <Route path="/" exact element={<MainHome />} />
        <Route path="/login" element={<Login />} />

        <Route path="/" exact element={<ResponsiveCardCarousel/> } />
        <Route path="/cities/varanasi" element={<Varanasi />} />
        <Route path="/cities/uttrakhand" element={<TopPlacesVaranasi />} />
        <Route path="/cities/chandigarh" element={<TopPlacesVaranasi />} />
        <Route path="/cities/delhi" element={<TopPlacesVaranasi/>} />
        <Route path="/cities/bihar" element={<TopPlacesVaranasi />} />
        <Route path="/cards/kashi-vishwanath-temple" element={<PlaceDetails />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
