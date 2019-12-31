import React, { Component } from "react";
import { Link } from "react-router-dom";

class MovieCard extends Component {
  render() {
    return (
      <div className="card text-white bg-dark mb-3 movie-card">
        <img
          className="img-thumbnail img-fluid"
          src={this.props.detail.image}
        />
        <div className="card-body ">
          <h4 className="card-title d-flex justify-content-center">
            {this.props.detail.name}
          </h4>
          <Link
            to={{
              pathname: `/movies/${this.props.detail.key}`,
              movie: this.props.detail
            }}
            className="btn btn-outline-light d-flex justify-content-center"
          >
            Download
          </Link>
        </div>
      </div>
    );
  }
}

export default MovieCard;
