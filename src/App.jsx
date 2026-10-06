import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/home.jsx";
import JewarAirport from "./pages/JewarAirport";
import Aboutus from "./pages/Aboutus.jsx";


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jewar-airport" element={<JewarAirport />} />
        <Route path="/aboutus" element={<Aboutus />} />

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
