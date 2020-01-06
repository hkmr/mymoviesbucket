import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import HomeScreen from "./screens/HomeScreen/main";
import DetailScreen from "./screens/DetailScreen/main";
import AddMovie from "./screens/AddMovieScreen/main";
import CategoryList from "./components/categoryList";
import LatestMovies from "./screens/LatestMovies/main";
import RecentlyUploaded from "./screens/RecentlyUploaded/main";
import MostDowloaded from "./screens/MostDownloaded/main";
import Hollywood from "./screens/Hollywood/main";
import Bollywood from "./screens/Bollywood/main";
import Genere from "./screens/generes/main";
import PageNotFound from "./screens/404";
import Search from "./screens/search/main";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <CategoryList />
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/movies/:id" component={DetailScreen} />
          <Route path="/add" component={AddMovie} />
          <Route path="/latest" component={LatestMovies} />
          <Route path="/recent" component={RecentlyUploaded} />
          <Route path="/most-downladed" component={MostDowloaded} />
          <Route path="/bollywood" component={Bollywood} />
          <Route path="/hollywood" component={Hollywood} />
          <Route path="/search" component={Search} />
          <Route path="/genere/:id" exact component={Genere} />
          <Route component={PageNotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
