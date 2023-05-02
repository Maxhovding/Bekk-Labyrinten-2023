import React from "react";
import { Link } from "react-router-dom";
import "../styles/Inspection.css";

const Inspection = () => {
  return (
    <div className="dashboard-inspection">
      <div className="left-section-inspection">
        <h1>General Health Inspection</h1>
        <p>
          To perform a general health inspection, follow these steps:
          <ol>
            <li>
              Begin by observing the patient's overall appearance, posture, and
              mobility.
            </li>
            <li>
              Check vital signs, including temperature, pulse, respiration rate,
              and blood pressure.
            </li>
            <li>Inspect the skin for any abnormalities, rashes, or lesions.</li>
            <li>
              Examine the patient's head and neck, including the eyes, ears,
              nose, and throat.
            </li>
            <li>
              Listen to the patient's heart and lungs using a stethoscope to
              check for any irregularities.
            </li>
            <li>
              Palpate the abdomen to check for any tenderness, swelling, or
              masses.
            </li>
            <li>
              Assess the patient's strength, coordination, and reflexes by
              conducting a basic neurological exam.
            </li>
          </ol>
        </p>
      </div>
      <div className="right-section-inspection">
        <Link className="inspection-link" to="/dashboard">
          Mark as completed
        </Link>
      </div>
    </div>
  );
};

export default Inspection;
