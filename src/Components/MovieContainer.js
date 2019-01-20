import React, { Component } from "react";
import MovieCollection from "./MovieCollection";
import MovieDetails from "./MovieDetails";
import { Grid, Row, Col } from "react-bootstrap";
import SearchField from "./SearchField";
import { connect } from "react-redux";
import { searchMovies } from "../actions/usersActions.js";

import { getDetails } from "../actions/usersActions.js";
// const API_KEY = `${process.env.REACT_APP_MOVIE_API_KEY}`;
// const TMBD_KEY = `${process.env.REACT_APP_TMDB_API_KEY}`;

class MovieContainer extends Component {
  render() {
    console.log("movies");
    console.log("OVER HERE", this.props.movies);
    return (
      <div>
        <h4>You are now FlixWorld</h4>
        <Grid>
          <Row>
            <SearchField
              handleChange={event => console.log(event.target.value)}
              showNoResults={false}
            />
          </Row>
          <Row>....</Row>
          <Row>
            <p>Movie list will go here: </p>
            <MovieCollection movies={this.props.movies} />
          </Row>
        </Grid>
        <MovieDetails />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies
});

export default connect(
  mapStateToProps,
  { searchMovies }
)(MovieContainer);

// class PokemonPage extends React.Component {
//     constructor() {
//       super();
//       this.state = {
//         pokemon: [],
//         input: ""
//       };
//     }

//     componentDidMount() {
//       fetch("http://localhost:3000/pokemon")
//         .then(resp => resp.json())
//         .then(pokemon => {
//           this.setState({ pokemon: pokemon });
//         });
//     }

// addPokemon = poke => {
//   this.setState(state => {
//     state.pokemon.push(poke);
//     return state;
//   });
// };

// search = _.debounce(input => {
//   this.setState(state => {
//     state.input = input;
//     return state;
//   }),
//     500;
// });

// render() {
//   // console.log(pokemon)
//   return (
//     <div>
//       <h1>Pokemon Searcher</h1>
//       <br />
//       <Search
//         onSearchChange={e => this.search(e.target.value)}
//         showNoResults={false}
//       />
//       <br />
//       <PokemonCollection pokemon={this.state.pokemon} />
//       <br />
//       <PokemonForm addPokemon={this.addPokemon} />
//     </div>
//   );
// }
