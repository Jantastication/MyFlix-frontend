import React, { Component } from "react";
// import myImage from "/Users/Janu/Development/Mod5_project/larabot-frontend/src/Components/images/Lara.jpeg";
import myVideo from "/Users/Janu/Development/Mod5_project/larabot-frontend/src/Components/images/Blue_Particle_Motion_Background_1080.mov";

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <video
          autoPlay
          muted
          loop
          id="background-video"
          style={{
            position: "fixed",
            right: "0",
            bottom: "0",
            minWidth: "100%",
            minHeight: "100%"
          }}
        >
          <source src={myVideo} type="video/mp4" />
        </video>
        <p>Hi</p>
      </div>
    );
  }
}
