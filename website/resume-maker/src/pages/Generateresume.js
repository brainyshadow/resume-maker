import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

class Generateresume extends Component {
  constructor(props) {
    super(props);
    const DataisLoaded = false;
    this.state = { DataisLoaded: DataisLoaded };
  }

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
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control placeholder="Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="qualifications">
            <Form.Label>A Brief Summary of Your Qualifications</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Qualifications" />
          </Form.Group>
          <Button type="submit" className="btn btn-primary">
            Generateresume
          </Button>
        </Form>
      </>
    );
  }
}

export default Generateresume;
