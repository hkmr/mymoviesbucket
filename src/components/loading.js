import React from "react";

export default function showLoading() {
  return (
    <div className="container d-flex justify-content-center">
      <div
        id="loader"
        className="spinner-border text-primary m-5"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
