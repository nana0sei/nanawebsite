import React, { Component } from "react";
import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png";
import github from "../images/github.png";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div id="contact">
        <footer className="d-flex flex-wrap align-items-center pt-2 border-top" />
        <div className="text-center">
          <p className="font-face-fl pt-2">
            Want to work? Contact me on my socials!
            <br />
            <a className="mx-3" href="https://instagram.com/nana0sei">
              <img
                src={instagram}
                alt=" "
                style={{ width: 30, height: "auto" }}
              />{" "}
            </a>
            <a className="mx-3" href="https://twitter.com/nana0sei">
              <img
                src={twitter}
                alt=" "
                style={{ width: 30, height: "auto" }}
              />{" "}
            </a>
            <a className="mx-3" href="https://github.com/nana0sei">
              <img src={github} alt=" " style={{ width: 30, height: "auto" }} />{" "}
            </a>
            <br />
            <p> Or send an email to nana0sei@outlook.com</p>
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
