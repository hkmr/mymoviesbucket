import React, { Component } from "react";
import firebase from "../../config";
import MovieCard from "../../components/movieCard";

class BollyWood extends Component {
  constructor() {
    super();
    this.state = { bollywoodMovies: [] };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = () => {
    const ref = firebase
      .database()
      .ref()
      .orderByChild("industry")
      .equalTo("bollywood");

    ref.on("value", snapshot => {
      let movies = [];
      snapshot.forEach(childSnap => {
        let key = { key: childSnap.key };
        let tmp = { ...key, ...childSnap.val() };
        movies.push(tmp);
      });
      this.setState({ bollywoodMovies: movies });
    });
  };

  render() {
    return (
      <div className="container">
        <h1>BollyWood</h1>
        <div className="row align-items-center">
          {this.state.bollywoodMovies.map(item => {
            console.log(item);
            return (
              <div key={item} className="col-sm">
                <MovieCard detail={item} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default BollyWood;
