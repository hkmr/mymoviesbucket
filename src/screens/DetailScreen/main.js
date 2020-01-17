import React, { Component } from "react";
import Detail from "./detail";
import Description from "./description";
import Download from "./download";
import Recommended from "./recommended";
import firebase from "../../config";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

class DetailScreen extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      detail: {
        summary: null,
        image: null,
        rating: 0
      },
      description: {
        releaseDate: null,
        generes: null,
        languages: null,
        director: null,
        stars: null,
        size: 0,
        format: null,
        trailor: null,
        time: 0
      },
      download: {
        link: null,
        torrent: null
      },
      recommended: []
    };
  }

  componentDidMount() {
    window.scroll(0, 0);

    let id = this.props.id;

    // fetching movie
    let movieDetail = firebase
      .database()
      .ref()
      .orderByKey()
      .equalTo(id);
    movieDetail.on("value", snapshot => {
      let mov = snapshot.val()[id];
      this.setState({
        name: mov.name,
        detail: {
          summary: mov.summary,
          image: mov.image,
          rating: mov.rating
        },
        description: {
          releaseDate: mov.date,
          generes: mov.generes,
          director: mov.director,
          stars: mov.stars,
          size: mov.size,
          format: mov.format,
          languages: mov.language,
          trailor: mov.trailor,
          time: mov.time
        },
        download: {
          link: mov.link,
          torrent: mov.torrent
        }
      });
    });
  }

  // use incomplete
  fetchRecommendedMovies = () => {
    let language = this.state.description.languages;
    let director = this.state.description.director;
    let industry = this.state.description.industry;

    let languageMovie = [];
    const recommendedMoviesByLanguage = firebase
      .database()
      .ref()
      .orderByChild("language")
      .equalTo(language);
    recommendedMoviesByLanguage.on("value", snapshot => {
      snapshot.forEach(childSnapshot => {
        let key = { key: childSnapshot.key };
        let tmp = { ...key, ...childSnapshot.val() };
        languageMovie.push(tmp);
      });
    });

    let directorMovie = [];
    const recommendedMoviesByDirector = firebase
      .database()
      .ref()
      .orderByChild("director")
      .equalTo(director);
    recommendedMoviesByDirector.on("value", snapshot => {
      snapshot.forEach(childSnapshot => {
        let key = { key: childSnapshot.key };
        let tmp = { ...key, ...childSnapshot.val() };
        directorMovie.push(tmp);
      });
    });

    let industryMovie = [];
    const recommendedMoviesByIndustry = firebase
      .database()
      .ref()
      .orderByChild("industry")
      .equalTo(industry);
    recommendedMoviesByIndustry.on("value", snapshot => {
      snapshot.forEach(childSnapshot => {
        let key = { key: childSnapshot.key };
        let tmp = { ...key, ...childSnapshot.val() };
        industryMovie.push(tmp);
      });
    });

    console.log(
      "Language : ",
      languageMovie,
      " Director : ",
      directorMovie,
      "Industry : ",
      industryMovie
    );
  };

  render() {
    return (
      <div className="container">
        <Helmet>
          <title>{this.state.name + "- moviesDownload"}</title>
        </Helmet>
        <h2 className="display-3 p-4">{this.state.name}</h2>
        <Detail detail={this.state.detail} />
        <Description description={this.state.description} />
        <Download download={this.state.download} />
        <hr />
        <Recommended list={this.state.recommended} />
        <hr />
      </div>
    );
  }
}

export default function GetMovie() {
  const { id } = useParams();
  return <DetailScreen id={id} />;
}
