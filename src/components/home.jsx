import React, { Component } from "react";
import { Helmet } from "react-helmet-async";
import CarouselComponent from "./carouselComponent";
import Projects from "./projects";
import Navbar from "./navbar";

class Home extends Component {
  state = {};

  render() {
    return (
      <div>
        <Helmet>
          <title>Home - Nana Osei</title>
          <meta name="description" content="Art Portfolio by Nana Osei." />
        </Helmet>
        <Navbar
          clickAbout={this.handleAboutScroll}
          clickProjects={this.handleProjectsScroll}
          clickContact={this.handleContactScroll}
        />
        {/* I did not need to lift the state of the navbar. 
        I just did that so I can refer to it if I forget how to */}
        <div className="container-fluid">
          <div className="row justify-content-between ">
            <div className="col pt-3 m-2" id="about">
              <CarouselComponent />
            </div>
            <div className="col pt-5 font-face-fl text-end m-3">
              <p>
                Hi, I’m{" "}
                <strong
                  className="font-face-fh text-warning"
                  style={{ fontSize: 30 }}
                >
                  Nana Osei
                </strong>
                <br />
                and this is my art portfolio!
              </p>{" "}
              <p>
                I’m a{" "}
                <strong
                  className="font-face-fh text-warning"
                  style={{ fontSize: 30 }}
                >
                  digital artist,
                  <br />
                  front end developer
                </strong>
                <br /> and{" "}
                <strong
                  className="font-face-fh text-warning"
                  style={{ fontSize: 30 }}
                >
                  UI/UX designer
                </strong>
                <br /> based in Accra, Ghana.
              </p>{" "}
              <p>
                I think my work is a constant <br />
                learning process so I’m always <br />
                eager to work on projects <br />
                that meet my clients’ needs and <br />
                expand my skillset.
              </p>{" "}
              <p>
                Click on the{" "}
                <strong
                  className="font-face-fh text-primary"
                  onClick={this.handleProjectsScroll}
                >
                  projects
                </strong>{" "}
                tab <br />
                to check out my work!
              </p>
            </div>
          </div>
          <br />
          <br />
          <Projects />
        </div>
      </div>
    );
  }

  //navbar methods
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

  handleAboutScroll = () => {
    const element = document.getElementById("about");
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
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
}

export default Home;
