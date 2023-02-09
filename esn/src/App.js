import "./App.css";
import Body from "./pages/Body/Body";
import Footer from "./pages/Footer/Footer";
import Header from "./pages/Header/Header";
import React from "react";
import { useLocation } from "react-router-dom";

function App() {
  return (
    <div className={useLocation().pathname === "/" ? "appWimage" : "app"}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
