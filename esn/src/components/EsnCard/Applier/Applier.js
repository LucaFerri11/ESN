import React from "react";
import "./Applier.css";
import ApplingCard from "./ApplingCard/ApplingCard";
import ApplyForm from "./ApplyForm/ApplyForm";

function Applier() {
  return (
    <div className="appling-container">
      <ApplyForm />
      <ApplingCard />
    </div>
  );
}

export default Applier;
