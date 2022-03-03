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
        <Carousel dynamicHeight={true}>
          <div>
            <img src={TemplateOne} />
            <p className="legend">Template One</p>
          </div>
          <div>
            <img src={TemplateTwo} />
            <p className="legend">Template Two</p>
          </div>
        </Carousel>
      </>
    );
  }
}

export default ResumeCarousel;
