import React, { Component } from "react";
import firebase from "../../config.js";

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      generes: []
    };
  }

  generes = [
    "action",
    "adult",
    "adventure",
    "experimental",
    "children_family",
    "comedy",
    "crime",
    "drama",
    "epic",
    "fantasy",
    "historic",
    "horror",
    "musical",
    "romance",
    "science_fiction",
    "spy",
    "thriller",
    "war",
    "western"
  ];

  industry = ["Hollywood", "Bollywood", "Tollywood"];

  updateInput = e => {
    if (
      e.target.type === "text" ||
      e.target.type === "date" ||
      e.target.type === "number" ||
      e.target.type === "textarea" ||
      e.target.type === "select-one"
    ) {
      if (e.target.name === "trailor") {
        let link = this.getYoutubeUrl(e.target.value);
        this.setState({
          [e.target.name]: link
        });
      } else {
        this.setState({
          [e.target.name]: e.target.value
        });
      }
    }
    if (e.target.type === "checkbox") {
      this.updateGenere(e);
    }
  };

  updateGenere = e => {
    var joined = this.state.generes.concat(e.target.value);
    this.setState({
      generes: joined
    });
  };

  getYoutubeUrl = url => {
    let link = url.split('src="')[1].split('"')[0];
    return link;
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ date: Date.now(), download: 0 });
    console.log(this.state);
    const itemRef = firebase.database().ref();
    itemRef.push(this.state);
  };

  render() {
    return (
      <div className="container mt-5">
        <h1 className="display-4">Add Movie</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Movie Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Movie Name"
              onChange={this.updateInput}
              required
            />
            <div className="invalid-feedback">Please provide Movie Name.</div>
          </div>

          <div className="form-group">
            <label htmlFor="genere">Generes</label>
            <div>
              {this.generes.map(item => {
                return (
                  <div key={item} className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="generes"
                      onChange={this.updateInput}
                      value={item}
                      id={item}
                    />
                    <label className="form-check-label">{item}</label>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="rating">IMDB Raing</label>
            <input
              className="form-control"
              name="rating"
              type="number"
              onChange={this.updateInput}
              placeholder="IMDB rating between 0 - 10"
            />
          </div>

          <div className="form-group">
            <label htmlFor="industry">Industry Type</label>
            <select
              name="industry"
              className="form-control"
              hmtlfor="industry"
              onChange={this.updateInput}
            >
              {this.industry.map(item => {
                return (
                  <option value={item} key={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="movieImage">Select Movie Image</label>
            <input
              name="image"
              type="text"
              onChange={this.updateInput}
              className="form-control-file"
              placeholder="Enter movie Image url"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="summary">Movie Summary</label>
            <textarea
              name="summary"
              onChange={this.updateInput}
              className="form-control"
              rows="4"
            />
          </div>

          <div className="form-group">
            <label htmlFor="releaseDate">Release Date</label>
            <input
              type="date"
              name="date"
              className="form-control"
              onChange={this.updateInput}
              placeholder="Release Date"
            />
          </div>

          <div className="form-group">
            <label htmlFor="director">Movie Director</label>
            <input
              type="text"
              name="director"
              onChange={this.updateInput}
              className="form-control"
              placeholder="Director Name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="stars">Movie Stars Name</label>
            <input
              type="text"
              name="stars"
              onChange={this.updateInput}
              className="form-control"
              placeholder="Movie Stars Name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="fileSize">Movie File Size</label>
            <input
              type="number"
              name="size"
              onChange={this.updateInput}
              className="form-control"
              placeholder="Movie File Size"
            />
          </div>

          <div className="form-group">
            <label htmlFor="fileFormat">Select File Format</label>
            <select
              name="format"
              onChange={this.updateInput}
              className="form-control"
            >
              <option value="mp4">mp4</option>
              <option value="mkv">mkv</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="tailor">Tailor Link</label>
            <input
              type="text"
              name="trailor"
              onChange={this.updateInput}
              className="form-control"
              placeholder="Movie Tailor Link"
            />
          </div>

          <div className="form-group">
            <label htmlFor="downloadLink">File Download Link</label>
            <input
              type="text"
              name="link"
              onChange={this.updateInput}
              className="form-control"
              placeholder="Movie File Download Link"
            />
          </div>

          <div className="form-group">
            <label htmlFor="torrentLink">Torrent Link</label>
            <input
              type="text"
              name="torrent"
              onChange={this.updateInput}
              className="form-control"
              placeholder="Torrent Link"
            />
          </div>

          <button
            type="submit"
            // onClick={this.handleSubmit}
            className="btn btn-primary mb-2"
          >
            Upload Movie
          </button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
