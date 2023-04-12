import React, { Component } from "react";
import { Link } from "react-router-dom";
import ritalucia from "../images/ritalucia.PNG";
import smc from "../images/smc.JPG";
import mayasweb from "../images/mayasweb.PNG";

class Projects extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="font-face-fl">
          <h3 className="font-face-fh text-warning" style={{ fontSize: 30 }}>
            Projects
          </h3>
          <p>
            These are some of the projects I have worked on, with commentary on
            the processes behind them.
          </p>

          <div className="row justify-content-center " id="projects">
            <div className="col-4">
              <div className="card" style={{ width: 350 }}>
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

            <div className="col-4 ">
              <div className="card" style={{ width: 350 }}>
                <img className="card-img-top" src={mayasweb} alt=" " />
                <div className="card-body">
                  <h5 className="card-title font-face-fh">Maya's Web</h5>
                  <p className="card-text">
                    <i>Art direction for an EP</i>
                  </p>
                  <Link to="/nanawebsite/mayasweb" className="btn btn-primary">
                    See details
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="card" style={{ width: 350 }}>
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
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
