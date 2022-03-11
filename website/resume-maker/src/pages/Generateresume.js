import React from "react";
import { Component } from "react";
import "../App.css";
import ResumeForm from "../components/ResumeForm";
import Templates from "../components/Templates";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "");
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: passedAttributes,
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
      })
      .then(() => {
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
    const qualificationsDone = true;
    return (
      <>
        <Header />
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
