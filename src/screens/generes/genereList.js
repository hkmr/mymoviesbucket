import React, { Component } from "react";
import firebase from "../../config";
import MovieCard from "../../components/movieCard";

class GenereList extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    this.fetchGenereMovie(this.props.type);
  }

  fetchGenereMovie(genere) {
    const movies = firebase
      .database()
      .ref()
      .orderByChild("generes")
      .equalTo(genere);

    movies.on("value", snapshot => {
      let list = [];
      snapshot.forEach(childSnapshot => {
        let id = { key: childSnapshot.key };
        let tmp = { ...id, ...childSnapshot.val() };
        list.push(tmp);
      });
      this.setState({
        movies: list
      });
    });
  }

  render() {
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
