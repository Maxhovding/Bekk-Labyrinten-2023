import React from "react";
import { Link } from "react-router-dom";
import "../styles/StartVisit.css";

const EndVisit = () => {
  const handleClick = () => {
    localStorage.clear();
  };

  return (
    <div className="start-visit-container">
      <div className="start-visit-content">
        <h1>Visit Ended</h1>
        <p>Thank you for your service today!</p>
        <Link to="/" onClick={handleClick}>
          <button>Go back to start</button>
        </Link>
      </div>
    </div>
  );
};

export default EndVisit;
