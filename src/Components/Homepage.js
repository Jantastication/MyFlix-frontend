import React, { Component } from "react";
import myImage from "/Users/Janu/Development/Mod5_project/larabot-frontend/src/Components/images/Lara.jpeg";

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <img src={myImage} alt="" width="100%" />

        <p>add animated video background here</p>
      </div>
    );
  }
}
