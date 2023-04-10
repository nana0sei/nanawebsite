import "./App.css";
import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "react-scroll-to-top";
import Home from "./components/home";
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
            <Route path="/nanawebsite" element={<Home />} />
            <Route path="/nanawebsite/ladyleg" element={<LadyLeg />} />
            <Route path="/nanawebsite/smc" element={<Smc />} />
            <Route path="/nanawebsite/mayasweb" element={<MayasWeb />} />
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
