import React, { Component } from "react";
import myImage from "/Users/Janu/Development/Mod5_project/larabot-frontend/src/Components/images/Lara.jpeg";

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <img src={myImage} alt="" />
        <h3> Ask Lara anything about a specific movie </h3>
        <p>
          {" "}
          Lara is a virtual assistant that will answer all your questions and
          get you movie details
        </p>
      </div>
    );
  }
}
