import React from "react";
import "../styles/responses.css";

const Responses = () => {
  return (
    <div className="responses-container">
      <div className="responses-heading-label">
        <div>
          What programming language do you use during the coding interview?
        </div>
      </div>
      <p>
        <span>50% </span>Python
      </p>
      <p>
        <span>30% </span>JavaScript
      </p>
      <p>
        <span>20% </span>Go
      </p>
    </div>
  );
};

export default Responses;
