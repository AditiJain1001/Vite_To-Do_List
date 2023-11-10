import PropTypes from "prop-types";
import React, { Component } from "react";

export class Footer extends Component {
  static propTypes = {};

  render() {
    return (
      <>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </>
    );
  }
}

export default Footer;
