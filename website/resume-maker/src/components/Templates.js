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
            <img src={TemplateOne} style={{ width: "100%" }}></img>
          </div>
          <div class="grid-item">
            <img src={TemplateTwo} style={{ width: "100%" }}></img>{" "}
          </div>
        </div>
      </>
    );
  }
}

export default Templates;
