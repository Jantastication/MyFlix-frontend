import React, { Component } from "react";
// import myImage from "/Users/Janu/Development/Mod5_project/larabot-frontend/src/Components/images/Lara.jpeg";
import myVideo from "/Users/Janu/Development/Flatiron/Module-projects/Mod5_project/larabot-frontend/src/Components/images/Blue_Particle_Motion_Background_1080.mov";
import Button from "@material-ui/core/Button";
import history from "../history";
// import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";
// import ButtonBase from "@material-ui/core/ButtonBase";
// import Typography from "@material-ui/core/Typography";

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
        <div
          style={{
            position: "fixed",
            bottom: 360,
            background: "rgba(0, 0, 0, 0)",
            color: "#f1f1f1",
            width: "100%",
            padding: "20px",
            textAlign: "center"
          }}
        >
          <h1>
            MY FLIX <span> 🎥 </span>{" "}
          </h1>
          <p>
            My Flix let's you catalog a collection of all your favorite movies -
            watch them, favorite them or save for later!
          </p>
          <br />

          <Button
            variant="contained"
            color="default"
            onClick={() => {
              history.push("/login");
            }}
          >
            Enter Site
          </Button>
        </div>
      </div>
    );
  }
}
