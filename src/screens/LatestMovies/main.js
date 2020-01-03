import React, { Component } from "react";
import MovieCard from "../../components/movieCard";
import firebase from "../../config";
import Loading from "../../components/loading";
import { Helmet } from "react-helmet";

class Latest extends Component {
  constructor() {
    super();
    this.state = { latestMovies: [], loading: true };
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
      latestMovies.reverse();
      this.setState({
        latestMovies: latestMovies,
        loading: false
      });
    });
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Latest Movies - moviesDownload</title>
        </Helmet>
        {this.state.loading ? <Loading /> : this.showContent()}
      </div>
    );
  }

  showContent() {
    return (
      <div className="container">
        <h4 className="m-4">Latest Movies</h4>
        <div className="row align-items-start">
          {this.state.latestMovies.map(item => {
            return (
              <div key={item.key} className="col-md-3">
                <MovieCard detail={item} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Latest;
