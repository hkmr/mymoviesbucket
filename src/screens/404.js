import React from "react";
import SVG from "../images/svg/not_found.svg";

const PageNotFound = () => {
  return (
    <div className="container text-center mt-5">
      <img className="img-fluid" alt="Not Found" width="70%" src={SVG} />
      <h2 className="display-1 m-2">Page Not Found</h2>
    </div>
  );
};

export default PageNotFound;
