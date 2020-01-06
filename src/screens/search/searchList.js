import React, { Component } from "react";
import MovieCard from "../../components/movieCard";
import firebase from "../../config";

class searchList extends Component {
  constructor() {
    super();
    this.state = { query: null, movieList: [] };
  }

  componentDidMount() {
    this.setState({ query: this.props.query });
    this.fetchMovies(this.state.query);
  }

  fetchMovies(q) {
    console.log(this.state.query);
    const ref = firebase
      .database()
      .ref()
      .orderByChild("name")
      .equalTo("Good")
      .limitToFirst(10);
    ref.on("value", snapshot => {
      let latestMovies = [];
      snapshot.forEach(childSnapshot => {
        let key = { key: childSnapshot.key };
        let tmp = { ...key, ...childSnapshot.val() };
        latestMovies.push(tmp);
      });
      latestMovies.reverse();
      this.setState({
        movieList: latestMovies,
        loading: false
      });
    });
  }

  render() {
    return (
      <div className="row align-items-start">
        {this.state.movieList.map(item => {
          return (
            <div key={item.key} className="col-md-3">
              <MovieCard detail={item} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default searchList;
