import React, { Component } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import NavSecondary from "./navSecondary";
import smc from "../images/smc.JPG";
import mayasweb from "../images/mayasweb.PNG";
import sketch1 from "../images/rl/sketch1.JPG";
import sketch2 from "../images/rl/sketch2.JPG";
import sketch3 from "../images/rl/sketch3.JPG";
import restingface from "../images/rl/restingface.PNG";
import fullset from "../images/rl/fullset.png";
import love56 from "../images/rl/love56.png";
import love28 from "../images/rl/love28.png";
import love112 from "../images/rl/love112.png";
import timelapse from "../images/rl/timelapse.mp4";

class LadyLeg extends Component {
  state = {};
  render() {
    return (
      <div>
        <Helmet>
          <title>Lady Legasus Emotes - Nana Osei</title>
          <meta
            name="description"
            content="Lady Legasus Emotes by Nana Osei."
          />
        </Helmet>
        <NavSecondary />
        <div className="container-fluid font-face-fl">
          <br />
          <h3 className="font-face-fh text-warning">Lady Legasus Emotes</h3>
          <p>
            In this project, I designed a custom emote set for Lady Legasus, a
            Twitch streamer. Custom Emotes are exclusive emoticons which can be
            accessed by subscribing to a Twitch Channel.
          </p>

          {/*grid start */}
          <div className="row align-items-center mx-2">
            <div className="col">
              <img
                src={sketch1}
                alt=""
                style={{ maxWidth: 300, maxHeight: "auto" }}
              />
              <figcaption
                className="text-center font-face-jw"
                style={{ fontSize: 24 }}
              >
                first sketch
              </figcaption>
            </div>

            <div className="col">
              <img
                src={sketch2}
                alt=""
                style={{ maxWidth: 300, maxHeight: "auto" }}
              />
              <figcaption
                className="text-center font-face-jw"
                style={{ fontSize: 24 }}
              >
                second sketch
              </figcaption>
            </div>

            <div className="col">
              <img
                src={sketch3}
                alt=""
                style={{ maxWidth: 300, maxHeight: "auto" }}
              />
              <figcaption
                className="text-center font-face-jw"
                style={{ fontSize: 24 }}
              >
                final sketch
              </figcaption>
            </div>

            <div className="col">
              <img
                src={restingface}
                alt=""
                style={{ maxWidth: 300, maxHeight: "auto" }}
              />
              <figcaption
                className="text-center font-face-jw"
                style={{ fontSize: 24 }}
              >
                finished base design
              </figcaption>
            </div>
          </div>
          {/* outer grid end */}
          <br />
          <p>
            The first step I took was to work on a base character design.This
            served as my reference for the full range of expressions. Using some
            sample sketches provided by the client, I made a few iterations
            until we agreed on the final look.
          </p>

          <br />
          <div className=" row text-center mx-2">
            <div className="col">
              <video
                autoPlay
                loop
                src={timelapse}
                type="video/mp4"
                style={{ maxWidth: 450, maxHeight: "auto" }}
              />
              <figcaption
                className="text-center font-face-jw"
                style={{ fontSize: 24 }}
              >
                sketch timelapse{" "}
              </figcaption>
            </div>

            <div className="col">
              <img
                src={fullset}
                alt=""
                style={{ maxWidth: "auto", maxHeight: 500 }}
              />
              <figcaption
                className="text-center font-face-jw"
                style={{ fontSize: 24 }}
              >
                finished emote set{" "}
              </figcaption>
            </div>
          </div>

          <br />
          <p>
            The expressions (from left to right) are{" "}
            <strong className="font-face-fh text-warning">
              laughing, love, crying, gg, bonk
            </strong>{" "}
            and <strong className="font-face-fh text-warning">angry</strong>. I
            chose these colors to make the illustrations fit in with her
            existing brand identity. I also achieved a degree of uniformity by
            reusing base models in multiple expressions. For example, the{" "}
            <strong className="font-face-fh text-warning">laughing</strong> and{" "}
            <strong className="font-face-fh text-warning">crying</strong> emotes
            are remakes of the base character design. Once they were approved, I
            resized them to the Twitch required sizes as shown below.
          </p>

          <div className="text-center">
            <img src={love112} alt=" " />
            <img src={love56} alt=" " />
            <img src={love28} alt=" " />
            <figcaption
              className="text-center font-face-jw"
              style={{ fontSize: 24 }}
            >
              love emote in twitch required sizes
            </figcaption>
          </div>
          <br />
          {/* Other Projects */}

          <div className="container-fluid font-face-fl">
            <footer className="d-flex flex-wrap align-items-center pt-2 border-top" />
            <h5 className="text-center font-face-fh text-warning ">
              View other projects!
            </h5>

            <div className="row justify-content-center" id="projects">
              <div className="col-4">
                <div className="card" style={{ width: 400 }}>
                  <img className="card-img-top" src={smc} alt=" " />
                  <div className="card-body">
                    <h5 className="card-title font-face-fh">
                      Sony Music Camp Merch
                    </h5>
                    <p className="card-text">
                      <i>Merch for Sony Music Recording Camp</i>
                    </p>
                    <Link to="/nanawebsite/smc" className="btn btn-primary">
                      See details
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-4 ">
                <div className="card" style={{ width: 400 }}>
                  <img className="card-img-top" src={mayasweb} alt=" " />
                  <div className="card-body">
                    <h5 className="card-title font-face-fh">Maya's Web</h5>
                    <p className="card-text">
                      <i>Art direction for an EP</i>
                    </p>
                    <Link
                      to="/nanawebsite/mayasweb"
                      className="btn btn-primary"
                    >
                      See details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Other projects end */}
        </div>
      </div>
    );
  }
}

export default LadyLeg;
