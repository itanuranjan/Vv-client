import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Header/Navbar";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Contact } from "./components/Pages/Contact";
import { Services } from "./components/Pages/Services";

// import {Home, About, Contact, Services} from "./components/Pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;