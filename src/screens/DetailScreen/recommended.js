import React, { Component } from "react";
import MovieCard from "../../components/movieCard";

class Recommended extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="h2 pr-4 pt-4 pb-4">More Recommended:</h2>
        <div className="row">
          {this.props.list.map(item => {
            return (
              <div className="col">
                <MovieCard detail={item} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Recommended;
