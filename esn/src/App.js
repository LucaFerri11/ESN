import "./App.css";
import Body from "./pages/Body/Body";
import Footer from "./pages/Footer/Footer";
import Header from "./pages/Header/Header";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {
  return (
    <div className={useLocation().pathname === "/" ? "appWimage" : "app"}>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

export default App;
