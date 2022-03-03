import React from "react";
import { Component } from "react";
import "../App.css";
import ResumeForm from "../components/Resumeform";

class Generateresume extends Component {
  
  async handleSubmit(e) {
    e.preventDefault();
    let userInput = e.target.elements;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "");
    var raw = JSON.stringify({
      "Template Id": 1,
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

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
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

  render() {
    return (
      <>
        <div className="resume-form">
          <ResumeForm onSubmit={this.handleSubmit} />
        </div>
      </>
    );
  }
}

export default Generateresume;
