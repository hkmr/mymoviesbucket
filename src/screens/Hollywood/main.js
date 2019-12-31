import React, { Component } from "react";
import firebase from "../../config";
import MovieCard from "../../components/movieCard";

class HollyWood extends Component {
  constructor() {
    super();

    this.state = {
      hollywoodMovies: []
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies() {
    const ref = firebase
      .database()
      .ref()
      .orderByChild("industry")
      .equalTo("hollywood");
    ref.on("value", snapshot => {
      let movies = [];
      snapshot.forEach(childSnapshot => {
        movies.push(childSnapshot.val());
      });
      this.setState({ hollywoodMovies: movies });
    });
  }

  render() {
    return (
      <div className="container">
        <h1>HollyWood</h1>
        <div className="row align-items-center">
          {this.state.hollywoodMovies.map(item => {
            return (
              <div className="col-sm">
                <MovieCard detail={item} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default HollyWood;
