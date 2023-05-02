import React from "react";
import { Link } from "react-router-dom";
import "../styles/Bandage.css";

const Bandage = () => {
  return (
    <div className="dashboard-bandage">
      <div className="left-section-bandage">
        <h1>Reapply Bandage</h1>
        <p>
          Follow these steps to properly reapply a bandage:
          <ol>
            <li>Wash your hands thoroughly with soap and water.</li>
            <li>
              Gently remove the old bandage, being careful not to disturb the
              wound.
            </li>
            <li>
              Clean the wound with mild soap and water or a saline solution,
              then pat dry with a clean towel or gauze.
            </li>
            <li>
              Apply a thin layer of antibiotic ointment if needed and
              recommended by a healthcare professional.
            </li>
            <li>
              Place a new, sterile bandage or dressing over the wound, ensuring
              it covers the entire area.
            </li>
            <li>
              Secure the bandage with medical tape or a bandage wrap, making
              sure it's snug but not too tight.
            </li>
          </ol>
        </p>
      </div>
      <div className="right-section-bandage">
        <Link className="bandage-link" to="/dashboard">
          Mark as completed
        </Link>
      </div>
    </div>
  );
};

export default Bandage;
