import React, { Component } from "react";

class Download extends Component {
  render() {
    return (
      <div className="container row d-flex justify-content-center ">
        <div className="col-sm-auto m-3">
          <a className="btn btn-primary btn-lg" href={this.props.download.link}>
            Download
          </a>
        </div>
        <div className="col-sm-auto m-3">
          <a
            className="btn btn-primary btn-lg"
            href={this.props.download.torrent}
          >
            Get Torrent Link
          </a>
        </div>
      </div>
    );
  }
}

export default Download;
