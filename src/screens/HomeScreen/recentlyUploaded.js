import React, { Component } from "react";
import MovieCard from "../../components/movieCard";
import { Link } from "react-router-dom";

class RecentlyUploaded extends Component {
  render() {
    return (
      <div className="container">
        <div className="d-flex justify-content-between my-5">
          <h2>Recently Uploaded</h2>
          <h5>
            <Link to="/recent">see all</Link>
          </h5>
        </div>
        <div className="row align-items-center">
          {this.props.list.map(item => {
            return (
              <div key={item.key} className="col-sm">
                <MovieCard detail={item} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default RecentlyUploaded;
