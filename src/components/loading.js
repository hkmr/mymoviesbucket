import React from "react";

export default function showLoading() {
  return (
    <div className="container d-flex justify-content-center">
      <div id="loader" class="spinner-border text-primary m-5" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
}
