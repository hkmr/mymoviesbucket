import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "../images/svg/search_white.svg";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          Movies Download
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/hollywood">
                Hollywood <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/bollywood">
                Bollywood
              </a>
            </li>
          </ul>
          <div className="form-inline my-2 my-lg-0">
            <Link to="/search">
              <img src={Search} alt="Search Icon" color="white" />
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
