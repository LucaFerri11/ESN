import React from "react";
import "./Body.css";
import { Routes, Route } from "react-router-dom";
import Home from "../../components/Home/Home";
import Gallery from "../../components/Gallery/Gallery";
import Buddy from "../../components/Buddy/Buddy";
import Contact from "../../components/Contact/Contact";
import ScrollInfo from "../../components/EsnCard/ScrollInfo/ScrollInfo";

function Body() {
  return (
    <div className="body">
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/gallery" element={<Gallery />} exact />
        <Route path="/buddy" element={<Buddy />} exact />
        <Route path="/esncard" element={<ScrollInfo />} exact />
        <Route path="/contact" element={<Contact />} exact />
      </Routes>
    </div>
  );
}

export default Body;
