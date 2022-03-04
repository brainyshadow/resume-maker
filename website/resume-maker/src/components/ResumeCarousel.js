import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Form } from "react-bootstrap";
import TemplateOne from "../assets/TemplateOne.jpg";
import TemplateTwo from "../assets/TemplateTwo.jpg";

class ResumeCarousel extends Component {
  render() {
    return (
      <>
        <Carousel
          showThumbs={false}
          dynamicHeight={true}
          swipeable={true}
          autoPlay={true}
          interval={500}
          infinite={true}

          useKeyboardArrows={true}
        >
          <div style={{ width: "40%", margin: "auto" }}>
            <img src={TemplateOne} />
          </div>
          <div style={{ width: "40%", margin: "auto" }}>
            <img src={TemplateTwo} />
          </div>
        </Carousel>
      </>
    );
  }
}

export default ResumeCarousel;
