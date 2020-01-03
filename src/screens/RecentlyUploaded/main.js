import React, { Component } from "react";
import MovieCard from "../../components/movieCard";
import firebase from "../../config";
import Loading from "../../components/loading";
import { Helmet } from "react-helmet";

class Recent extends Component {
  constructor() {
    super();
    this.state = { recentMovies: [], loading: true };
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
      let recentMovies = [];
      snapshot.forEach(childSnapshot => {
        let key = { key: childSnapshot.key };
        let tmp = { ...key, ...childSnapshot.val() };
        recentMovies.push(tmp);
      });
      recentMovies.reverse();
      this.setState({
        recentMovies: recentMovies,
        loading: false
      });
    });
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Recently uploaded - moviesDownload</title>
        </Helmet>
        {this.state.loading ? <Loading /> : this.showContent()}
      </div>
    );
  }

  showContent() {
    return (
      <div className="container">
        <h4 className="m-4">Recently Uploaded Movies</h4>
        <div className="row align-items-start">
          {this.state.recentMovies.map(item => {
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

export default Recent;
