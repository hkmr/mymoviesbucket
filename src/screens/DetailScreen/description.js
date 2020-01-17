import React, { Component } from "react";

class Description extends Component {
  getTime = timeStamp => {
    // Months array
    var months_arr = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];

    // Convert timestamp to milliseconds
    var date = new Date(1000 * timeStamp);
    var year = date.getFullYear();
    var month = months_arr[date.getMonth()];
    var day = date.getDate();
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();

    var convdataTime =
      month +
      "-" +
      day +
      "-" +
      year +
      " at " +
      hours +
      ":" +
      minutes.substr(-2);

    return convdataTime;
  };

  render() {
    return (
      <div className="container">
        <h1 className="mt-4 mb-4 md-4 h1">Description</h1>
        <table className="table-responsive-sm table-striped table-borderless">
          <tbody>
            <tr>
              <td className="font-weight-bold">Released Date</td>
              <td> {this.props.description.releaseDate} </td>
            </tr>
            <tr>
              <td className="font-weight-bold">Generes</td>
              <td>{this.props.description.generes}</td>
            </tr>
            <tr>
              <td className="font-weight-bold">Language</td>
              <td> {this.props.description.languages} </td>
            </tr>
            <tr>
              <td className="font-weight-bold">Uploaded on</td>
              <td> {this.getTime(this.props.description.time)} </td>
            </tr>
            <tr>
              <td className="font-weight-bold">Director</td>
              <td> {this.props.description.director} </td>
            </tr>
            <tr>
              <td className="font-weight-bold">Stars</td>
              <td> {this.props.description.stars} </td>
            </tr>
            <tr>
              <td className="font-weight-bold">File Size</td>
              <td>
                {this.props.description.size}
                {this.props.description.size <= 4 ? " GB" : " MB"}
              </td>
            </tr>
            <tr>
              <td className="font-weight-bold">File Format</td>
              <td> {this.props.description.format} </td>
            </tr>
            <tr>
              <td className="font-weight-bold">Trailor</td>
            </tr>
            <tr>
              <iframe
                title="Video Trailor"
                max-width="600"
                max-height="600"
                src={this.props.description.trailor}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Description;
