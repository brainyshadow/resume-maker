import { Component } from "react";
import TemplateOne from "../assets/TemplateOne.jpg";
import TemplateTwo from "../assets/TemplateTwo.jpg";
import "../App.css";

class Templates extends Component {
  render() {
    return (
      <>
        <div class="grid-container">
          <div class="grid-item">
            <img src={TemplateOne} className="resume-template"></img>
          </div>
          <div class="grid-item">
            <img src={TemplateTwo} className="resume-template"></img>{" "}
          </div>
        </div>
      </>
    );
  }
}

export default Templates;
