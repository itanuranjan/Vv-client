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
import Navbar1 from './components/Navbar/Navbar1';

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
        <Route path="/cities/himachal" element={<NewYork />} />
        <Route path="/cities/uttrakhand" element={<NewYork />} />
        <Route path="/cities/chandigarh" element={<NewYork />} />
        <Route path="/cities/delhi" element={<NewYork />} />
        <Route path="/cities/bihar" element={<NewYork />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
