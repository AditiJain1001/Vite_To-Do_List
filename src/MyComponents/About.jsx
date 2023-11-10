import PropTypes from "prop-types";
import React, { Component } from "react";
import Badge from 'react-bootstrap/Badge';

export class About extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <h1>
          Effortless Daily Mastery: Unleash Productivity with Our Dynamic Online
          To-Do List Tracker!
          <Badge bg="secondary">New</Badge>
        </h1>
        <br></br>
        <p>
          Experience the power of seamless organization and accomplish your
          goals like never before with our cutting-edge Online To-Do List
          Tracker! Say goodbye to scattered tasks and hello to focused
          achievement. Add and delete your daily tasks with a single click, all
          on our user-friendly website designed to amplify your productivity.
          Transform your routine into a well-orchestrated symphony of
          accomplishments. Start today and make every moment impactful!
        </p>
      </div>
    );
  }
}

export default About;
