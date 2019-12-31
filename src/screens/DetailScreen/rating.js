import React, { Component } from "react";

class Rating extends Component {
  render() {
    return (
      <div className="media mb-3 mt-3">
        <img src={require("../../images/imdb-48.png")} className="mr-3" />
        <div className="media-body">
          <h5 className="mt-0">IMBD Rating</h5>
          {this.props.rating}/10.0
        </div>
      </div>
    );
  }
}

export default Rating;
