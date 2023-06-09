import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav class=" navbar sticky-top bg-white shadow-sm">
        <Link to="/nanawebsite" className="navbar-brand font-face-jw m-2">
          nana osei
        </Link>

        <ul className="nav justify-content-end font-face-fh">
          <li className="nav-item">
            <button
              className="nav-link btn btn-link"
              onClick={this.props.clickAbout}
            >
              about
            </button>
          </li>
          <li className="nav-item">
            <button
              className="nav-link btn btn-link"
              onClick={this.props.clickProjects}
            >
              projects
            </button>
          </li>
          <li className="nav-item">
            <button
              className="nav-link btn btn-link"
              onClick={this.props.clickContact}
            >
              contact
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
