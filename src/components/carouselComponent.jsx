import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import girl from "../images/girl.JPG";
import girl1 from "../images/girl1.PNG";
import girl2 from "../images/girl2.PNG";
import jah from "../images/jah.PNG";
import od from "../images/od.png";

class CarouselComponent extends Component {
  state = {};
  render() {
    return (
      <Carousel
        width="500px"
        dynamicHeight={true}
        autoPlay
        interval="5000"
        infiniteLoop
        stopOnHover={false}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        emulateTouch={false}
        showArrows={false}
        useKeyboardArrows={true}
        animationHandler={"fade"}
        transitionTime="1500"
      >
        <div>
          <img src={girl} alt=" " className="rounded" />
        </div>
        <div>
          <img src={girl2} alt=" " className="rounded" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={od} alt=" " className="rounded" />
        </div>
        <div>
          <img src={girl1} alt=" " className="rounded" />
        </div>
        <div>
          <img src={jah} alt=" " className="rounded" />
        </div>
      </Carousel>
    );
  }
}

export default CarouselComponent;
