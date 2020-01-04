import React, { Component } from "react";
import firebase from "../../config";
import LatestMovies from "./latestMovies";
import RecentlyUploaded from "./recentlyUploaded";
import { Helmet } from "react-helmet";
import ShowLoading from "../../components/loading";

class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      latest: [],
      recent: [],
      loading: true
    };
  }

  componentWillMount() {
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
      movies = movies.slice(0, 8);
      if (value === "date") {
        this.setState({
          latest: movies
        });
      } else if (value === "time") {
        this.setState({
          recent: movies,
          loading: false
        });
      }
    });
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>MoviesDownload</title>
        </Helmet>
        {this.state.loading ? <ShowLoading /> : this.showContent()}
      </div>
    );
  }

  showContent() {
    return (
      <div className="container">
        <LatestMovies list={this.state.latest} />
        <RecentlyUploaded list={this.state.recent} />
      </div>
    );
  }
}

export default HomeScreen;
