import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import { searchMovies } from "../actions/usersActions.js";
import { connect } from "react-redux";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit
  }
});

class SearchField extends React.Component {
  // constructor(props) {
  //   super(props);
  state = {
    searchInput: ""
  };

  componentDidMount() {
    this.forceUpdate();
  }

  handleChange = event => {
    this.setState({ searchInput: event.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("submitting search.");

    this.props.searchMovies(this.state.searchInput);
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <form
          onSubmit={e => {
            this.handleSubmit(e);
          }}
        >
          <FormControl
            className={classes.formControl}
            aria-describedby="component-helper-text"
          >
            <InputLabel htmlFor="component-helper">Search</InputLabel>
            <Input
              id="component-helper"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <FormHelperText id="component-helper-text">
              <i> Search: "The Wolf of Wall Street.."</i>
            </FormHelperText>
          </FormControl>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchInput: state.searchInput
});

SearchField.propTypes = {
  classes: PropTypes.object.isRequired
};
// export default connect(
//   null,
//   mapDispatchToProps
// )(withStyles(styles)(ButtonAppBar));

export default connect(
  mapStateToProps,
  { searchMovies }
)(withStyles(styles)(SearchField));

// import React from "react";
// import TextField from "material-ui/TextField";
// // import { connect } from "react-redux";

// export default class SearchField extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       searchInput: ""
//     };

//     this.handleChange = this.handleChange.bind(this);
//     // this.onSubmit = this.onSubmit.bind(this);
//   }

//   handleChange = event => {
//     this.setState({
//       searchInput: event.target.value
//     });
//   };

//   // handleSubmit={() => this.searchForMovie(this.state.searchInput)}

//   render() {
//     return (
//       <div>
//         <TextField
//           id="text-field-controlled"
//           value={this.state.value}
//           onChange={this.handleChange}
//         />
//       </div>
//     );
//   }
// }

// class PokemonForm extends React.Component {
//     constructor() {
//       super();

//       this.state = {
//         name: "",
//         hp: "",
//         frontUrl: "",
//         backUrl: ""
//       };
//     }

//     // handleChange = (e, input) => {
//     //   this.setState({ [input.name]: input.value });
//     //   console.log(input);
//     // };

//     updateFormProperty(key, value) {
//       this.setState(state => {
//         state[key] = value;
//         return state;
//       });
//     }

//     handleSubmit = () => {
//       let newPoke = {
//         name: this.state.name,
//         stats: [
//           {
//             value: this.state.hp,
//             name: "hp"
//           }
//         ],
//         sprites: {
//           front: this.state.frontUrl,
//           back: this.state.backUrl
//         }
//       };
//       this.props.addPokemon(newPoke);

//       fetch("http://localhost:3000/pokemon", {
//         method: "POST",
//         headers: {
//           "content-type": "application/json"
//         },
//         body: JSON.stringify(newPoke)
//       }).then(newPokes => {
//         console.log(newPoke);
//       });
//     };

//     render() {
//       return (
//         <div>
//           <h3>Add a Pokemon!</h3>
//           <Form onSubmit={this.handleSubmit}>
//             <Form.Group widths="equal">
//               <Form.Input
//                 fluid
//                 label="Name"
//                 placeholder="Name"
//                 name="name"
//                 onChange={e => this.updateFormProperty("name", e.target.value)}
//               />
//               <Form.Input
//                 fluid
//                 label="hp"
//                 placeholder="hp"
//                 name="hp"
//                 onChange={e => this.updateFormProperty("hp", e.target.value)}
//               />
//               <Form.Input
//                 fluid
//                 label="Front Image URL"
//                 placeholder="url"
//                 name="frontUrl"
//                 onChange={e =>
//                   this.updateFormProperty("frontUrl", e.target.value)
//                 }
//               />
//               <Form.Input
//                 fluid
//                 label="Back Image URL"
//                 placeholder="url"
//                 name="backUrl"
//                 onChange={e => this.updateFormProperty("backUrl", e.target.value)}
//               />
//             </Form.Group>
//             <Form.Button>Submit</Form.Button>
//           </Form>
//         </div>
//       );
//     }
//   }

//   export default PokemonForm;
