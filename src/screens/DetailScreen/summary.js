import React, { Component } from "react";
import Rating from "./rating";

class Summary extends Component {
  render() {
    return (
      <div className="container">
        <Rating rating={this.props.rating} />
        <p className="text-justify" style={{ fontSize: "22px" }}>
          {this.props.summary}
        </p>
      </div>
    );
  }
}

export default Summary;
