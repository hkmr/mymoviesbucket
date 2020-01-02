import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer font-small stylish-color-dark pt-4">
        <div className="container text-center text-md-left">
          <div className="row">
            <div className="col-md-4 mx-auto">
              <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
                Movies Download
              </h5>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit
              </p>
            </div>
            <hr className="clearfix w-100 d-md-none" />
            {/* Links */}
            <div className="col-md-2 mx-auto">
              <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
                By Years
              </h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Link 1</a>
                </li>
                <li>
                  <a href="/">Link 1</a>
                </li>
                <li>
                  <a href="/">Link 1</a>
                </li>
                <li>
                  <a href="/">Link 1</a>
                </li>
              </ul>
            </div>
            <hr className="clearfix w-100 d-md-none" />
            <div className="col-md-2 mx-auto">
              <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
                By Rating
              </h5>

              <ul className="list-unstyled">
                <li>
                  <a href="/">Link 1</a>
                </li>
                <li>
                  <a href="/">Link 2</a>
                </li>
                <li>
                  <a href="/">Link 3</a>
                </li>
                <li>
                  <a href="/">Link 4</a>
                </li>
              </ul>
            </div>
            <hr className="clearfix w-100 d-md-none" />
            <div className="col-md-2 mx-auto">
              <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
                Links
              </h5>

              <ul className="list-unstyled">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/feedback">feedback</a>
                </li>
                <li>
                  <a href="/terms">Terms/Condtions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr />

        {/* Social Buttons */}

        <div className="footer-copyright text-center py-3">
          © 2018 Copyright:
          <a href="#"> MoviesDownload.com</a>
        </div>
      </footer>
    );
  }
}

export default Footer;
