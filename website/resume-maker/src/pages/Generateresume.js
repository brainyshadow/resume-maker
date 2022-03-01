import React from "react";
import { Component } from "react";
import "../App.css";
import ResumeForm from "../components/Resumeform";

class Generateresume extends Component {
  render() {
    return (
      <>
        <div className="resume-form">
          <ResumeForm />
        </div>
      </>
    );
  }
}

export default Generateresume;
