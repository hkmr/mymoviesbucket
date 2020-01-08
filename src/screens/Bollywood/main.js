import React, { Component } from "react";
import firebase from "../../config";
import MovieCard from "../../components/movieCard";
import { Helmet } from "react-helmet";
import Loading from "../../components/loading";
import NotFound from "../../components/notFound";

class BollyWood extends Component {
  constructor() {
    super();
    this.state = { bollywoodMovies: [], loading: true };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = () => {
    const ref = firebase
      .database()
      .ref()
      .orderByChild("industry")
      .equalTo("Bollywood");

    ref.on("value", snapshot => {
      let movies = [];
      snapshot.forEach(childSnap => {
        let key = { key: childSnap.key };
        let tmp = { ...key, ...childSnap.val() };
        movies.push(tmp);
      });
      this.setState({ bollywoodMovies: movies, loading: false });
    });
  };

  render() {
    return (
      <div className="container">
        <Helmet>
          <title>BollyWood - moviesDownload</title>
        </Helmet>
        <h1 className="display-3 m-3">BollyWood</h1>
        {this.state.loading ? (
          <Loading />
        ) : this.state.bollywoodMovies.length === 0 ? (
          <NotFound />
        ) : (
          this.showContent()
        )}
      </div>
    );
  }

  showContent() {
    return (
      <div className="row align-items-start">
        {this.state.bollywoodMovies.map(item => {
          console.log(item);
          return (
            <div key={item} className="col-md-3">
              <MovieCard detail={item} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default BollyWood;
