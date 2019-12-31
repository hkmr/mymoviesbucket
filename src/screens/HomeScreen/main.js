import React, { Component } from "react";
import firebase from "../../config";
import LatestMovies from "./latestMovies";
import RecentlyUploaded from "./recentlyUploaded";
import DummyCard from "../../components/dummyCard";
import MostDownloaded from "./mostDownloaded";

class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      latest: [],
      recent: [],
      mostDownloaded: []
    };
  }

  componentDidMount() {
    this.fetchMovies("date");
    this.fetchMovies("time");
    this.fetchMovies("download");
  }

  fetchMovies(value) {
    const latestMoviesRef = firebase
      .database()
      .ref()
      .orderByChild(value);

    latestMoviesRef.on("value", snapshot => {
      let movies = [];
      snapshot.forEach(childSnapshot => {
        let key = { key: childSnapshot.key };
        let tmp = { ...key, ...childSnapshot.val() };
        movies.push(tmp);
      });
      movies.reverse();
      movies = movies.slice(0, 12);
      if (value === "date") {
        this.setState({
          latest: movies
        });
      } else if (value === "time") {
        this.setState({
          recent: movies
        });
      } else if (value === "dowload") {
        this.setState({
          mostDownloaded: movies
        });
      }
    });
  }

  render() {
    return (
      <div className="container">
        <LatestMovies list={this.state.latest} />
        <RecentlyUploaded list={this.state.recent} />
        {/* <MostDownloaded list={this.state.mostDownloaded} /> */}
      </div>
    );
  }
}

export default HomeScreen;
