import React, { Component } from "react";

class Download extends Component {
  constructor(props) {
    super(props);
    const DataisLoaded = false;
    this.state = { DataisLoaded: DataisLoaded };
  }

  async componentDidMount() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "");

    var raw = JSON.stringify({
      "Template Id": 1,
      name: "Bob Smith",
      qualifications: "Here's a brief overview of some of my qualifications",
      currentOccupation: "Working",
      region: "New York City, New York",
      email: "test@gmail.com",
      skillSectionOne: "Programming Languages",
      firstSkillOne: "Python",
      secondSkillOne: "C++",
      thirdSkillOne: "SQL",
      fourthSkillOne: "Java",
      skillSectionTwo: "Soft Skills",
      firstSkillTwo: "Communication",
      secondSkillTwo: "Teamwork",
      thirdSkillTwo: "Patience",
      fourthSkillTwo: "Time Management",
      skillSectionThree: "Third Skills Set",
      firstSkillThree: "Skill One",
      secondSkillThree: "Skill Two",
      thirdSkillThree: "Skill Three",
      fourthSkillThree: "Skill Four",
      jobOneName: "Job One",
      jobOneDescription: "Job One Description",
      jobTwoName: "Job Two",
      jobTwoDescripton: "Job Two Description",
      jobThreeName: "Job Three",
      jobThreeDescription: "Job Three Description",
      hobbyOne: "Chess",
      hobbyTwo: "Violin",
      hobbyThree: "Soccer",
      projectOne: "Sample Project One",
      projectTwo: "Sample Project Two",
      projectThree: "Sample Project Three",
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
        <div></div>
      </>
    );
  }
}

export default Download;
