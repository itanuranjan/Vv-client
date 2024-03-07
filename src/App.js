import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainHome from "./components/MainHome/MainHome";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Features from "./components/pages/Features";
import Login from "./components/pages/Login";
import NewYork from "./components/MainHome/NewYork";
import ImageCollection from "./components/MainHome/ResponsiveImageGallery";
// import Gallery from "./components/MainHome/Gallery";
import ResponsiveCardCarousel from "./components/MainHome/ResponsiveCardCarousel";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <MainHome />
      {/* <ImageCollection /> */}
      {/* <Gallery /> */}
      {/* <Footer/> */}
      
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/login" element={<Login />} />

        <Route path="/" exact element={<ResponsiveCardCarousel/> } />
        <Route path="/cards/new-york" element={<NewYork />} />
      </Routes>
    </Router>
  );
}

export default App;
