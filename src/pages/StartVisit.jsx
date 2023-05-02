import React from "react";
import { Link } from "react-router-dom";
import "../styles/StartVisit.css";

const StartVisit = () => {
  return (
    <div className="start-visit-container">
      <div className="start-visit-content">
        <h1>Welcome</h1>
        <p>Ready to start your visit?</p>
        <Link to="/dashboard">
          <button>Start Visit</button>
        </Link>
      </div>
    </div>
  );
};

export default StartVisit;
