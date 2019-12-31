import React, { Component } from "react";
import Summary from "./summary";

class Detail extends Component {
  render() {
    return (
      <div className="container">
        <div className="row no-gutters">
          <div className="col-sm">
            <img
              className="rounded float-left img-fluid"
              src={this.props.detail.image}
              alt=""
            />
          </div>
          <div className="col-sm">
            <Summary
              summary={this.props.detail.summary}
              rating={this.props.detail.rating}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
