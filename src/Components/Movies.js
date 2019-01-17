import React, { Component } from "react";

export default class MovieCollection extends Component {
  render() {
    console.log("in movies comp", this.props.movies);
    return (
      <div>
        <h1>You are now Flix World </h1>

        <br />
        <p>{this.props.movie.Title}</p>
        <img src={this.props.movie.Poster} />
        {/* <p>{movie.title}</p>
        <img src={movie.poster} width="200" /> */}
        {/* {this.props.movies.map(movie => {
          console.log(movie);
          return <MovieCard movie={movie} key={movie.id} />;
        })} */}
      </div>
    );
  }
}
