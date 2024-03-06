import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from './components/Header/Header';
// import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Searchbar from './components/Main/Searchbar';
// import TopCities from './components/Main/TopCities';
// import Card from './components/Main/Card';
import Card1 from './components/Main/Card1';
import Hero from './components/Main/Hero';
// import Carousel from './components/Carousel/Carousel';
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Features from "./components/pages/Features";
import Login from "./components/pages/Login";
import NewYork from "./components/Main/NewYork"
import ResponsiveCardCarousel from './components/Main/Card1';

function App() {
  return (
    
    <Router>
    
      <Navbar />
      <Hero/>
      
          {/* <Searchbar/> */}
        
      {/* <TopCities/> */}
      {/* <Card/> */}
      <Card1/>
      {/* <Searchbar /> */}
      {/* <Carousel/> */}
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/features" element={<Features/>} />
        <Route path="/login" element={<Login/>} />

        <Route path="/" exact component={ResponsiveCardCarousel} />
          <Route path="/cards/new-york" component={NewYork} />
      </Routes>
    </Router>
  );
}

export default App;