import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Form } from "react-bootstrap";
import TemplateOne from "../assets/TemplateOne.jpg";
import TemplateTwo from "../assets/TemplateTwo.jpg";
import "../App.css";

class ResumeCarousel extends Component {
  render() {
    return (
      <>
        <Carousel
          showThumbs={false}
          dynamicHeight={true}
          autoPlay={true}
          interval={5000}
          infiniteLoop={true}
          useKeyboardArrows={true}
        >
          <div className="template-container">
            <img src={TemplateOne} />
          </div>
          <div className="template-container">
            <img src={TemplateTwo} />
          </div>
        </Carousel>
      </>
    );
  }
}

export default ResumeCarousel;
