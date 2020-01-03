import React, { Component } from "react";
import MovieCard from "../../components/movieCard";
import { Link } from "react-router-dom";

class LatestMovies extends Component {
  render() {
    return (
      <div className="container">
        <div className="d-flex justify-content-between my-5">
          <h2>Latest Movies</h2>
          <h5>
            <Link to="/latest">see all</Link>
          </h5>
        </div>
        <div className="row align-items-start">
          {this.props.list.map(item => {
            return (
              <div key={item.key} className="col-md-3">
                <MovieCard detail={item} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default LatestMovies;
