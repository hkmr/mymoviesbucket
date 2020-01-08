import React, { Component } from "react";
import MovieCard from "../../components/movieCard";
import firebase from "../../config";
import Loading from "../../components/loading";
import { Helmet } from "react-helmet";

class Latest extends Component {
  constructor() {
    super();
    this.state = {
      latestMovies: [],
      loading: true
    };
  }

  componentDidMount() {
    this.fetchMovies();
    window.addEventListener("scroll", this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false);
  }

  fetchMovies() {
    let ref = firebase
      .database()
      .ref()
      .orderByChild("date")
      .limitToFirst(8);

    ref.on("value", snapshot => {
      let latestMovies = [];
      snapshot.forEach(childSnapshot => {
        let key = { key: childSnapshot.key };
        let tmp = { ...key, ...childSnapshot.val() };
        latestMovies.push(tmp);
      });
      // latestMovies.reverse();
      this.setState({
        latestMovies: latestMovies,
        loading: false
      });
    });
  }

  onScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 500
    ) {
    }
  };

  render() {
    return (
      <div>
        <Helmet>
          <title>Latest Movies - moviesDownload</title>
        </Helmet>
        {this.showContent()}
        {this.state.loading ? (
          <Loading />
        ) : (
          <div className="text-center primary">Load more</div>
        )}
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
