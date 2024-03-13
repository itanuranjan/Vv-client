import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import CityRoutes from "./CityRoutes";

function App() {
  return (
   <CityRoutes/>
  );
}

export default App;
