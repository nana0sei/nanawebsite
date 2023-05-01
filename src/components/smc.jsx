import React, { Component } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import NavSecondary from "./navSecondary";
import smc from "../images/smc.JPG";
import ritalucia from "../images/ritalucia.PNG";
import mayasweb from "../images/mayasweb.PNG";
import final from "../images/smc/final.PNG";
import sketch from "../images/smc/sketch.PNG";

class Smc extends Component {
  state = {};
  render() {
    return (
      <div>
        <Helmet>
          <title>Sony Music Camp Merch - Nana Osei</title>
          <meta
            name="description"
            content="Sony Music Camp Merch by Nana Osei."
          />
        </Helmet>
        <NavSecondary />
        <div className="container-fluid font-face-fl">
          <br />
          <h3 className="font-face-fh text-warning">Sony Music Camp Merch</h3>
          <p>
            In this project, I designed the centerpiece for a shirt with Jude
            Dontoh. This shirt is one of the collectibles that were available at
            the 2023 Sony Music Camp in Accra.{" "}
          </p>

          <div className=" row text-center mx-2">
            <div className="col">
              <img
                src={sketch}
                alt=""
                style={{ maxWidth: 450, maxHeight: "auto" }}
              />
              <figcaption
                className="text-center font-face-jw"
                style={{ fontSize: 24 }}
              >
                sketch{" "}
              </figcaption>
            </div>

            <div className="col">
              <img
                src={final}
                alt=""
                style={{ maxWidth: 450, maxHeight: "auto" }}
              />
              <figcaption
                className="text-center font-face-jw"
                style={{ fontSize: 24 }}
              >
                final illustration{" "}
              </figcaption>
            </div>
          </div>
          <br />
          <p>
            When Dontoh sent his ideas for the project, the first thing that
            came to mind was the{" "}
            <Link
              to="https://en.wikipedia.org/wiki/Discman"
              className="font-face-fh"
              style={{ textDecoration: "none" }}
              target="_blank"
            >
              CD Walkman
            </Link>
            . I had an older friend who had one and it was an integral part of
            my introduction to music. I wanted to channel that with this project
            so I made the character a kid, holding my own blend of the CD
            Walkman and the Cassette Walkman. I also threw in the Ghanaian flag
            as a reference to where the event would take place. Initially, I
            wanted to have him smiling (as seen in the sketch) but we finally
            agreed on a more neutral expression.
          </p>

          <div className=" row text-center mx-2">
            <div className="col">
              <img
                src={smc}
                alt=""
                style={{ maxWidth: 450, maxHeight: "auto" }}
              />
              <figcaption
                className="text-center font-face-jw"
                style={{ fontSize: 24 }}
              >
                finished design{" "}
              </figcaption>
            </div>
          </div>

          <br />
          {/* Other Projects */}

          <div className="container-fluid font-face-fl">
            <footer className="d-flex flex-wrap align-items-center pt-2 border-top" />
            <h5 className="text-center font-face-fh text-warning ">
              View other projects!
            </h5>

            <div className="row justify-content-center" id="projects">
              <div className="col-md-4">
                <div className="card" style={{ width: 400 }}>
                  <img className="card-img-top" src={ritalucia} alt=" " />
                  <div className="card-body">
                    <h5 className="card-title font-face-fh">
                      Lady Legasus Emotes
                    </h5>
                    <p className="card-text">
                      <i>Emote set for a Twitch streamer</i>
                    </p>
                    <Link to="/nanawebsite/ladyleg" className="btn btn-primary">
                      See details
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-4 ">
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

export default Smc;
