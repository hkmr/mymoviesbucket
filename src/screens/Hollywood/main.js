import React, { Component } from "react";
import firebase from "../../config";
import MovieCard from "../../components/movieCard";
import { Helmet } from "react-helmet";
import Loading from "../../components/loading";
import NotFound from "../../components/notFound";

class HollyWood extends Component {
  constructor() {
    super();

    this.state = {
      hollywoodMovies: [],
      loading: true
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
      .equalTo("Hollywood");
    ref.on("value", snapshot => {
      let movies = [];
      snapshot.forEach(childSnapshot => {
        movies.push(childSnapshot.val());
      });
      this.setState({ hollywoodMovies: movies, loading: false });
    });
  }

  render() {
    return (
      <div className="container">
        <Helmet>
          <title>HollyWood - moviesDownload</title>
        </Helmet>
        <h1 className="display-3 m-3">HollyWood</h1>
        {this.state.loading ? (
          <Loading />
        ) : this.state.hollywoodMovies.length === 0 ? (
          <NotFound />
        ) : (
          this.showContent()
        )}
      </div>
    );
  }

  showContent() {
    return (
      <div className="row align-items-center">
        {this.state.hollywoodMovies.map(item => {
          return (
            <div className="col-sm">
              <MovieCard detail={item} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default HollyWood;
