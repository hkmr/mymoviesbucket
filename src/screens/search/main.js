import React, { Component } from "react";
import SearchList from "./searchList";
import Loading from "../../components/loading";

class Search extends Component {
  constructor() {
    super();
    this.state = { query: "" };
  }

  updateInput = e => {
    if (e.key === "Enter") {
      console.log("Enter pressed");
      this.setState({
        query: e.target.value
      });
    }
  };
  render() {
    return (
      <div className="container">
        <p className="display-4">Search</p>
        <div class="input-group mb-3">
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            onKeyPress={this.updateInput}
          />
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Search
            </span>
          </div>
          {this.state.query === null ? <Loading /> : this.fetchContent()}
        </div>
      </div>
    );
  }

  fetchContent() {
    return <SearchList query={this.state.query} />;
  }
}

export default Search;
