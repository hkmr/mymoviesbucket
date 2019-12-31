import React, { Component } from "react";
import MovieCard from "../../components/movieCard";
import firebase from "../../config";

class Latest extends Component {
  constructor() {
    super();
    this.state = { latestMovies: [] };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies() {
    const ref = firebase
      .database()
      .ref()
      .orderByChild("date");

    ref.on("value", snapshot => {
      let latestMovies = [];
      snapshot.forEach(childSnapshot => {
        let key = { key: childSnapshot.key };
        let tmp = { ...key, ...childSnapshot.val() };
        latestMovies.push(tmp);
      });
      this.setState({
        latestMovies: latestMovies
      });
      console.log(this.state);
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Latest Movies</h1>
        <div className="row align-items-center" />
      </div>
    );
  }
}

export default Latest;
