import React, { Component } from "react";

class CategoryList extends Component {
  generes = [
    "action",
    "adult",
    "adventure",
    "experimental",
    "children_family",
    "comedy",
    "crime",
    "drama",
    "epic",
    "fantasy",
    "historic",
    "horror",
    "musical",
    "romance",
    "science_fiction",
    "spy",
    "thriller",
    "war",
    "western"
  ];

  render() {
    return (
      <div className="category-list">
        <div className="category-item" />
        {this.generes.map(item => {
          return (
            <div key={item} className="category-item">
              <a href={`/genere/${item}`}>{item}</a>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CategoryList;
