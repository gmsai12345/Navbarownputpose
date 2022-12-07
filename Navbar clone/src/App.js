import React from "react";
import Navbar from "./Navbar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Pricing from "./Pages/Pricing";
import { Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Pricing" element={<Pricing />} />
        </Routes>
      </div>
    </div>
  );
}
