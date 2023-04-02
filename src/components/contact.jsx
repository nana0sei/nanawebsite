import React, { Component } from "react";
import mail from "../images/mail.png";
import instagram from "../images/instagram.png";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid font-face-fl" id="contact">
        <h3 className="font-face-fh text-warning">Contact</h3>
        <p>Want to work with me? Contact me here:</p>
        <p>
          <img src={mail} alt=" " width="20px" height="20px" />{" "}
          nana0sei@outlook.com
        </p>
        <p>
          <img src={instagram} alt=" " width="20px" height="20px" />{" "}
          <a
            className="link-primary"
            href="https://www.instagram.com/nana0sei/"
            style={{ textDecoration: "none" }}
          >
            nana0sei
          </a>
        </p>
      </div>
    );
  }
}

export default Contact;
