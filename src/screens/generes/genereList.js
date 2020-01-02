import React, { Component } from "react";
import firebase from "../../config";
import MovieCard from "../../components/movieCard";
import Loading from "../../components/loading";
import NotFound from "../../components/notFound";

class GenereList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      loading: true
    };
  }

  componentDidMount() {
    this.fetchGenereMovie(this.props.type);
  }

  fetchGenereMovie(genere) {
    const movies = firebase
      .database()
      .ref()
      .orderByChild("generes");

    movies.on("value", snapshot => {
      let list = [];
      let genereMovies = [];
      snapshot.forEach(childSnapshot => {
        let id = { key: childSnapshot.key };
        let tmp = { ...id, ...childSnapshot.val() };
        list.push(tmp);
      });
      list.map(item => {
        item.generes.map(g => {
          if (g === genere) {
            genereMovies.push(item);
          }
        });
      });
      this.setState({
        movies: genereMovies,
        loading: false
      });
    });
  }

  render() {
    return this.state.loading ? (
      <Loading />
    ) : this.state.movies.length === 0 ? (
      <NotFound />
    ) : (
      this.showContent()
    );
  }

  showContent() {
    return (
      <div className="container">
        <div className="d-flex justify-content-between my-5">
          <h2>
            Movies Category:
            {this.props.type}
          </h2>
        </div>
        <div className="row align-items-center">
          {this.state.movies.map(item => {
            return (
              <div key={item.key} className="col-sm">
                <MovieCard detail={item} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default GenereList;
