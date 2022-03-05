import React from "react";
import { Component } from "react";
import "../App.css";
import ResumeForm from "../components/Resumeform";
import Templates from "../components/Templates";

class Generateresume extends Component {
  constructor(props) {
    super(props);
    const qualificationsDone = false;
    const attributes = new Object();
    this.state = {
      qualificationsDone: qualificationsDone,
      attributes: attributes,
    };
  }

  async generateResume() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "");
    const attributes = this.state.attributes;
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: attributes,
      redirect: "follow",
    };

    let fileName = "resume.pdf";
    fetch("http://127.0.0.1:5000/download", requestOptions)
      .then((res) => res.blob())
      .then((blob) => {
        var url = window.URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
        a.click();
        a.remove(); //afterwards we remove the element again
      });
  }

  async handleSubmit(e) {
    e.preventDefault();
    let userInput = e.target.elements;

    var data = JSON.stringify({
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
    });
    console.log(this);
    this.setState({ qualificationsDone: true, attributes: data });
  }

  render() {
    const qualificationsDone = true;
    console.log(qualificationsDone);
    return (
      <>
        <div className="resume-form">
          {qualificationsDone ? (
            <Templates />
          ) : (
            <ResumeForm onSubmit={(e) => this.handleSubmit(e)} />
          )}
        </div>
      </>
    );
  }
}

export default Generateresume;
