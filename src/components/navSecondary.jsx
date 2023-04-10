import React, { Component } from "react";

class NavSecondary extends Component {
  state = {};
  render() {
    return (
      <nav class=" navbar sticky-top bg-white shadow-sm">
        <a href="/nanawebsite" className="navbar-brand font-face-jw m-2">
          nana osei
        </a>

        <ul className="nav justify-content-end font-face-fh">
          <li className="nav-item">
            <a
              className="nav-link btn btn-link"
              aria-current="page"
              href="/nanawebsite"
            >
              about
            </a>
          </li>
          <li className="nav-item">
            <button
              className="nav-link btn btn-link"
              onClick={this.handleProjectsScroll}
            >
              projects
            </button>
          </li>
          <li className="nav-item">
            <button
              className="nav-link btn btn-link"
              onClick={this.handleContactScroll}
            >
              contact
            </button>
          </li>
        </ul>
      </nav>
    );
  }

  handleProjectsScroll = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "center",
      });
    }
  };

  handleContactScroll = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "center",
      });
    }
  };
}

export default NavSecondary;
