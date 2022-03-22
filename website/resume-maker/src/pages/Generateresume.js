import React from "react";
import { Component } from "react";
import "../App.css";
import ResumeForm from "../components/ResumeForm";
import Templates from "../components/Templates";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CompletionBar from "../components/CompletionBar";
import { Typography } from "@mui/material";
import GetResume from "../client/GetResume";

class Generateresume extends Component {
  constructor(props) {
    super(props);
    const qualificationsDone = false;
    const attributes = "";
    this.state = {
      qualificationsDone: qualificationsDone,
      attributes: attributes,
    };
  }

  async generateResume(passedAttributes) {
    GetResume(passedAttributes).then(() => {
      this.setState({ qualificationsDone: false });
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    let userInput = e.target.elements;

    var data = {
      name: userInput.name.value,
      qualifications: userInput.qualifications.value,
      currentOccupation: userInput.occupation.value,
      region: userInput.region.value,
      email: userInput.email.value,
      skillSectionOne: userInput.skillSectionOne.value,
      firstSkillOne: userInput.firstSkillOne.value,
      secondSkillOne: userInput.secondSkillOne.value,
      thirdSkillOne: userInput.thirdSkillOne.value,
      fourthSkillOne: userInput.fourthSkillOne.value,
      skillSectionTwo: userInput.skillSectionTwo.value,
      firstSkillTwo: userInput.firstSkillTwo.value,
      secondSkillTwo: userInput.secondSkillTwo.value,
      thirdSkillTwo: userInput.thirdSkillTwo.value,
      fourthSkillTwo: userInput.fourthSkillTwo.value,
      skillSectionThree: userInput.skillSectionThree.value,
      firstSkillThree: userInput.firstSkillThree.value,
      secondSkillThree: userInput.secondSkillThree.value,
      thirdSkillThree: userInput.thirdSkillThree.value,
      fourthSkillThree: userInput.fourthSkillThree.value,
      jobOneName: userInput.jobOneName.value,
      jobOneDescription: userInput.jobOneDescription.value,
      jobTwoName: userInput.jobTwoName.value,
      jobTwoDescripton: userInput.jobTwoDescription.value,
      jobThreeName: userInput.jobThreeName.value,
      jobThreeDescription: userInput.jobThreeDescription.value,
      hobbyOne: userInput.hobbyOneName.value,
      hobbyTwo: userInput.hobbyTwoName.value,
      hobbyThree: userInput.hobbyThreeName.value,
      projectOne: userInput.projectOneName.value,
      projectTwo: userInput.projectTwoName.value,
      projectThree: userInput.projectTwoName.value,
    };
    this.setState({ qualificationsDone: true });
    this.attributes = data;
  }

  async selectTemplate(id) {
    let attributes = this.attributes;
    attributes["Template Id"] = parseInt(id);
    const raw = JSON.stringify(attributes);
    this.attributes = raw;
    this.generateResume(raw);
  }

  render() {
    const qualificationsDone = this.state.qualificationsDone;
    let message = "Tell us a bit about yourself.";
    let progress = 0;
    if (qualificationsDone) {
      progress = 50;
      message = "Select a template.";
    }

    return (
      <>
        <Header />
        <Typography
          fontSize={"3rem"}
          variant="h1"
          align="center"
          marginY="2rem"
        >
          {message}
        </Typography>
        <div className="resume-form" style={{ height: "auto" }}>
          <CompletionBar progress={progress} />
        </div>
        <div className="resume-form">
          {qualificationsDone ? (
            <Templates templateSelect={(id) => this.selectTemplate(id)} />
          ) : (
            <ResumeForm onSubmit={(e) => this.handleSubmit(e)} />
          )}
        </div>
        <Footer />
      </>
    );
  }
}

export default Generateresume;
