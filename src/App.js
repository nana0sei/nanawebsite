import "./App.css";
import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "react-scroll-to-top";
import Projects from "./components/projects";
import Home from "./components/home";
import Contact from "./components/contact";
import Footer from "./components/footer";
import LadyLeg from "./components/ladyLeg";
import Smc from "./components/smc";
import MayasWeb from "./components/mayasweb";

// import bg from "./images/bg.PNG";
// style={{ backgroundImage: `url(${bg})` }}

class App extends Component {
  state = {};

  render() {
    const helmetContext = {};

    return (
      <HelmetProvider context={helmetContext}>
        {/* SSR Implementation of HelmetProvider. Remove the context for CSR */}
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ladyleg" element={<LadyLeg />} />
            <Route path="/smc" element={<Smc />} />
            <Route path="/mayasweb" element={<MayasWeb />} />
          </Routes>

          <ScrollToTop smooth color="blue" top={500} />

          <br />
          <br />

          <Footer />
        </div>
      </HelmetProvider>
    );
  }
}

export default App;
