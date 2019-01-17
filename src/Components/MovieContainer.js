import React, { Component } from "react";
import Movies from "./Movies";
const API_KEY = `${process.env.REACT_APP_MOVIE_API_KEY}`;

export default class MovieContainer extends Component {
  constructor() {
    super();
    this.state = {
      movies: {},
      input: ""
    };
  }

  fetchData() {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}`)
      .then(resp => resp.json())
      .then(movies => {
        console.log(movies);
        this.setState({ movies: movies });
      });
  }

  componentDidMount() {
    console.log("hi");
    this.fetchData();
  }

  render() {
    console.log("movies");
    return (
      <div>
        <h1>MovieContainer</h1>
        <h6>ask Lara-bot about a movie you would like info on </h6>
        <br />
        <Movies movie={this.state.movies} />
      </div>
    );
  }
}

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
