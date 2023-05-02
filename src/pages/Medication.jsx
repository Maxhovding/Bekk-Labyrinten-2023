import React from "react";
import { Link } from "react-router-dom";
import "../styles/Medication.css";

const Medication = () => {
  return (
    <div className="medication">
      <h1>Medication Instructions</h1>

      <div className="instruction">
        <h2>Insulin Administration</h2>
        <p>1. Gather supplies: insulin syringe, insulin vial.</p>
        <p>2. Wash your hands thoroughly.</p>
        <p>3. Draw up the correct dose into the syringe.</p>
        <p>4. Choose an injection site and clean it with an alcohol wipe.</p>
        <p>5. Inject the insulin at a 90 degree angle.</p>
        <p>6. Dispose of the syringe in a sharps container.</p>
      </div>

      <div className="instruction">
        <h2>Paracetamol Administration</h2>
        <p>1. Confirm the patient's weight to calculate the correct dosage.</p>
        <p>2. Offer the correct dosage with a glass of water.</p>
        <p>3. Check that the patient has swallowed the paracetamol.</p>
        <p>
          4. Document the administration in the patient's medication record.
        </p>
      </div>

      <Link to="/dashboard">
        <button> Mark as completed</button>
      </Link>
    </div>
  );
};

export default Medication;
