import React, { Component } from "react";
import { Helmet } from "react-helmet-async";
import NavSecondary from "./navSecondary";

//image files
import mwsketch from "../images/mayasweb/mwsketch.JPG";
import mwfinal from "../images/mayasweb/mwfinal.PNG";
import cityofangels2 from "../images/mayasweb/cityofangels2.PNG";
import cityofangels from "../images/mayasweb/cityofangels.PNG";
import coa from "../images/mayasweb/coa.JPG";
import coa2 from "../images/mayasweb/coa2.PNG";
import ritalucia from "../images/ritalucia.PNG";
import smc from "../images/smc.JPG";
import tracklist from "../images/mayasweb/tracklist.png";
import backalt from "../images/mayasweb/backalt.PNG";
import countdown from "../images/mayasweb/countdown.png";
import mwvinyl from "../images/mayasweb/mwvinyl.png";
import mwcd from "../images/mayasweb/mwcd.png";
import web from "../images/mayasweb/web.png";
import definition from "../images/mayasweb/definition.png";
import animated from "../images/mayasweb/animated.MP4";

class MayasWeb extends Component {
  state = {};
  render() {
    return (
      <div>
        <Helmet>
          <title>Maya's Web - Nana Osei</title>
          <meta name="description" content="EP Art Direction by Nana Osei." />
        </Helmet>
        <NavSecondary />
        <div className="container-fluid font-face-fl">
          {" "}
          <br />
          <h3 className="font-face-fh text-warning">Maya's Web</h3>
          <p>
            In this project, I made a number of covers and other promotional art
            for Maya's Web, an EP by Saezn, a Nigerian musician. The EP was
            released in 2022.{" "}
          </p>
          {/*grid start */}
          <div className="row text-center mx-2">
            <div className="col">
              <img
                src={mwsketch}
                alt=""
                style={{ maxWidth: 450, maxHeight: "auto" }}
              />
              <figcaption
                className="text-center font-face-jw"
                style={{ fontSize: 24 }}
              >
                ep cover sketch
              </figcaption>
            </div>

            <div className="col">
              <img
                src={mwfinal}
                alt=""
                style={{ maxWidth: 450, maxHeight: "auto" }}
              />
              <figcaption
                className="text-center font-face-jw"
                style={{ fontSize: 24 }}
              >
                final ep cover
              </figcaption>
            </div>
          </div>
          {/* outer grid end */}
          <br />
          <p>
            Saezn told me the name of the project and what he wanted to see on
            the cover. The name, <i>Maya's Web</i>, reminded me of neo noir
            franchises like{" "}
            <a
              href="https://en.wikipedia.org/wiki/Max_Payne"
              className="font-face-fh"
              style={{ textDecoration: "none" }}
              target="_blank"
            >
              Max Payne
            </a>{" "}
            and{" "}
            <a
              href="https://en.wikipedia.org/wiki/Sin_City"
              className="font-face-fh"
              style={{ textDecoration: "none" }}
              target="_blank"
            >
              Sin City
            </a>
            . Fans of both franchises will notice my references to them
            (especially in the centerpiece). He wasn't specific about the
            positioning of the elements so I was free to shape his "moodboard"
            in my own direction.
          </p>
          {/*grid start */}
          <div className="row text-center mx-2">
            <div className="col">
              <img
                src={coa}
                alt=""
                style={{ maxWidth: 450, maxHeight: "auto" }}
              />
              <figcaption
                className="text-center font-face-jw"
                style={{ fontSize: 24 }}
              >
                city of angels one
              </figcaption>
            </div>

            <div className="col">
              <img
                src={coa2}
                alt=""
                style={{ maxWidth: 450, maxHeight: "auto" }}
              />
              <figcaption
                className="text-center font-face-jw"
                style={{ fontSize: 24 }}
              >
                city of angels two
              </figcaption>
            </div>

            <div className="col">
              <img
                src={cityofangels2}
                alt=""
                style={{ maxWidth: 450, maxHeight: "auto" }}
              />
              <figcaption
                className="text-center font-face-jw"
                style={{ fontSize: 24 }}
              >
                city of angels three
              </figcaption>
            </div>

            <div className="col">
              <img
                src={cityofangels}
                alt=""
                style={{ maxWidth: 450, maxHeight: "auto" }}
              />
              <figcaption
                className="text-center font-face-jw"
                style={{ fontSize: 24 }}
              >
                city of angels four
              </figcaption>
            </div>
          </div>
          {/* outer grid end */}
          <p>
            City of Angels is the lead single of the EP. For this song, Saezn
            wanted angels and devils preparing to fight each other on the cover.
            For some reason, I was in a creative slump when I made the first
            version. Though he seemed okay with it, I told him I wanted to
            remake the cover. I made the second one then, a direct reference to
            the cover art of{" "}
            <a
              href="https://en.wikipedia.org/wiki/Def_Jam:_Fight_for_NY"
              className="font-face-fh"
              style={{ textDecoration: "none" }}
              target="_blank"
            >
              Def Jam: Fight For NY
            </a>{" "}
            (yes I'm a nostalgia merchant). Saezn liked it but he preferred his
            initial concept and I hated how that turned out so for my final
            revision I just decided to remake it from scratch. It was worth it
            because I was able to refine it in a way we could both agree on.
            However, he liked the original design of the female angel and demon
            so I used them in the official cover.
          </p>
          <h4 className="font-face-fh text-warning">Extras</h4>
          <p>
            This section contains the tracklist, promotional content and other
            unused concepts from the project. You can stream Maya's Web{" "}
            <a
              href="https://music.apple.com/gh/album/mayas-web-ep/1654057914"
              className="font-face-fh"
              style={{ textDecoration: "none" }}
              target="_blank"
            >
              here
            </a>
            .
          </p>
          {/*grid start */}
          <div className="row text-center mx-2">
            <div className="col">
              <img
                src={web}
                alt=""
                style={{ maxWidth: 300, maxHeight: "auto" }}
              />
              <figcaption
                className="text-center font-face-jw"
                style={{ fontSize: 24 }}
              >
                maya's web logo
              </figcaption>
            </div>

            <div className="col">
              <img
                src={tracklist}
                alt=""
                style={{ maxWidth: 300, maxHeight: "auto" }}
              />
              <figcaption
                className="text-center font-face-jw"
                style={{ fontSize: 24 }}
              >
                tracklist
              </figcaption>
            </div>

            <div className="col">
              <img
                src={definition}
                alt=""
                style={{ maxWidth: 300, maxHeight: "auto" }}
              />
              <figcaption
                className="text-center font-face-jw"
                style={{ fontSize: 24 }}
              >
                ep description
              </figcaption>
            </div>

            <div className="col">
              <img
                src={countdown}
                alt=""
                style={{ maxWidth: 300, maxHeight: "auto" }}
              />
              <figcaption
                className="text-center font-face-jw"
                style={{ fontSize: 24 }}
              >
                countdown
              </figcaption>
            </div>

            <div className="col">
              <img
                src={mwcd}
                alt=""
                style={{ maxWidth: 300, maxHeight: "auto" }}
              />
              <figcaption
                className="text-center font-face-jw"
                style={{ fontSize: 24 }}
              >
                cd design
              </figcaption>
            </div>

            <div className="col">
              <img
                src={backalt}
                alt=""
                style={{ maxWidth: 300, maxHeight: "auto" }}
              />
              <figcaption
                className="text-center font-face-jw"
                style={{ fontSize: 24 }}
              >
                unused tracklist concept
              </figcaption>
            </div>

            <div className="col">
              <video
                autoPlay
                loop
                src={animated}
                type="video/mp4"
                style={{ maxWidth: 300, maxHeight: "auto" }}
              />
              <figcaption
                className="text-center font-face-jw"
                style={{ fontSize: 24 }}
              >
                animated cover concept{" "}
              </figcaption>
            </div>

            <div className="col">
              <img
                src={mwvinyl}
                alt=""
                style={{ maxWidth: 300, maxHeight: "auto" }}
              />
              <figcaption
                className="text-center font-face-jw"
                style={{ fontSize: 24 }}
              >
                vinyl design
              </figcaption>
            </div>
          </div>
          {/* outer grid end */}
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
                  <img className="card-img-top" src={ritalucia} alt=" " />
                  <div className="card-body">
                    <h5 className="card-title font-face-fh">
                      Lady Legasus Emotes
                    </h5>
                    <p className="card-text">
                      <i>Emote set for a Twitch streamer</i>
                    </p>
                    <a href="/nanawebsite/ladyleg" className="btn btn-primary">
                      See details
                    </a>
                  </div>
                </div>
              </div>

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
                    <a href="/nanawebsite/smc" className="btn btn-primary">
                      See details
                    </a>
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

export default MayasWeb;
