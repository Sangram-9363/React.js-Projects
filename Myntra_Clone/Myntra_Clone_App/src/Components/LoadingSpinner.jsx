import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="text-center ">
      <div
        className="spinner-border mt-5 "
        role="status"
        style={{ width: "5rem", height: "5rem", marginTop: "15%" }}
      >
        <span className="visually-hidden">Loading</span>
      </div>
      <span>
        <p>Loading...</p>
      </span>
    </div>
  );
};

export default LoadingSpinner;
