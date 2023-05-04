import React from "react";
import { Link } from "react-router-dom";

export const ApisPage = () => {
  return (
    <div>
      <h1>ApisPage</h1>
      <br />
      <Link to="/doctorapi">Doctor API</Link>
      <br />
      <Link to="/patientapi">Patient API</Link>
    </div>
  );
};
