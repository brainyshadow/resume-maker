import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ResumeForm.css";

class ResumeForm extends Component {
  constructor() {
    super();
    const name = JSON.parse(localStorage.getItem("name"));
    const qualifications = JSON.parse(localStorage.getItem("qualifications"));
    const currentOccupation = JSON.parse(
      localStorage.getItem("currentOccupation")
    );
    const region = JSON.parse(localStorage.getItem("region"));
    const email = JSON.parse(localStorage.getItem("email"));
    const skillSectionOne = JSON.parse(localStorage.getItem("skillSectionOne"));
    const firstSkillOne = JSON.parse(localStorage.getItem("firstSkillOne"));
    const secondSkillOne = JSON.parse(localStorage.getItem("secondSkillOne"));
    const thirdSkillOne = JSON.parse(localStorage.getItem("thirdSkillOne"));
    const fourthSkillOne = JSON.parse(localStorage.getItem("fourthSkillOne"));
    const skillSectionTwo = JSON.parse(localStorage.getItem("skillSectionTwo"));
    const firstSkillTwo = JSON.parse(localStorage.getItem("firstSkillTwo"));
    const secondSkillTwo = JSON.parse(localStorage.getItem("secondSkillTwo"));
    const thirdSkillTwo = JSON.parse(localStorage.getItem("thirdSkillTwo"));
    const fourthSkillTwo = JSON.parse(localStorage.getItem("fourthSkillTwo"));
    const skillSectionThree = JSON.parse(
      localStorage.getItem("skillSectionThree")
    );
    const firstSkillThree = JSON.parse(localStorage.getItem("firstSkillThree"));
    const secondSkillThree = JSON.parse(
      localStorage.getItem("secondSkillThree")
    );
    const thirdSkillThree = JSON.parse(localStorage.getItem("thirdSkillThree"));
    const fourthSkillThree = JSON.parse(
      localStorage.getItem("fourthSkillThree")
    );
    const jobOneName = JSON.parse(localStorage.getItem("jobOneName"));
    const jobOneDescription = JSON.parse(
      localStorage.getItem("jobOneDescription")
    );
    const jobTwoName = JSON.parse(localStorage.getItem("jobTwoName"));
    const jobTwoDescription = JSON.parse(
      localStorage.getItem("jobTwoDescription")
    );
    const jobThreeName = JSON.parse(localStorage.getItem("jobThreeName"));
    const jobThreeDescription = JSON.parse(
      localStorage.getItem("jobThreeDescription")
    );
    const hobbyOne = JSON.parse(localStorage.getItem("hobbyOne"));
    const hobbyTwo = JSON.parse(localStorage.getItem("hobbyTwo"));
    const hobbyThree = JSON.parse(localStorage.getItem("hobbyThree"));
    const projectOne = JSON.parse(localStorage.getItem("projectOne"));
    const projectTwo = JSON.parse(localStorage.getItem("projectTwo"));
    const projectThree = JSON.parse(localStorage.getItem("projectTwo"));
    this.state = {
      name: name,
      qualifications: qualifications,
      currentOccupation: currentOccupation,
      region: region,
      email: email,
      skillSectionOne: skillSectionOne,
      firstSkillOne: firstSkillOne,
      secondSkillOne: secondSkillOne,
      thirdSkillOne: thirdSkillOne,
      fourthSkillOne: fourthSkillOne,
      skillSectionTwo: skillSectionTwo,
      firstSkillTwo: firstSkillTwo,
      secondSkillTwo: secondSkillTwo,
      thirdSkillTwo: thirdSkillTwo,
      fourthSkillTwo: fourthSkillTwo,
      skillSectionThree: skillSectionThree,
      firstSkillThree: firstSkillThree,
      secondSkillThree: secondSkillThree,
      thirdSkillThree: thirdSkillThree,
      fourthSkillThree: fourthSkillThree,
      jobOneName: jobOneName,
      jobOneDescription: jobOneDescription,
      jobTwoName: jobTwoName,
      jobTwoDescription: jobTwoDescription,
      jobThreeName: jobThreeName,
      jobThreeDescription: jobThreeDescription,
      hobbyOne: hobbyOne,
      hobbyTwo: hobbyTwo,
      hobbyThree: hobbyThree,
      projectOne: projectOne,
      projectTwo: projectTwo,
      projectThree: projectThree,
    };
  }

  valueChange(e) {
    console.log(e.target.id);
    this.setState({ [e.target.id]: e.target.value });
    localStorage.setItem(e.target.id, JSON.stringify(e.target.value));
  }

  render() {
    const {
      name,
      qualifications,
      currentOccupation,
      region,
      email,
      skillSectionOne,
      firstSkillOne,
      secondSkillOne,
      thirdSkillOne,
      fourthSkillOne,
      skillSectionTwo,
      firstSkillTwo,
      secondSkillTwo,
      thirdSkillTwo,
      fourthSkillTwo,
      skillSectionThree,
      firstSkillThree,
      secondSkillThree,
      thirdSkillThree,
      fourthSkillThree,
      jobOneName,
      jobOneDescription,
      jobTwoName,
      jobTwoDescription,
      jobThreeName,
      jobThreeDescription,
      hobbyOne,
      hobbyTwo,
      hobbyThree,
      projectOne,
      projectTwo,
      projectThree,
    } = this.state;
    return (
      <>
        <div className="form-container">
          <Form onSubmit={this.props.onSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                required={true}
                placeholder="Name"
                onChange={(e) => this.valueChange(e)}
                value={name ? name : ""}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="qualifications">
              <Form.Label>Summary of Qualifications:</Form.Label>
              <Form.Control
                required={true}
                as="textarea"
                rows={3}
                placeholder="Qualifications"
                onChange={(e) => this.valueChange(e)}
                value={qualifications ? qualifications : ""}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="currentOccupation">
              <Form.Label>Current Occupation:</Form.Label>
              <Form.Control
                required={true}
                placeholder="Occupation"
                onChange={(e) => this.valueChange(e)}
                value={currentOccupation}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="region">
              <Form.Label>Region:</Form.Label>
              <Form.Control
                required={true}
                placeholder="Region"
                onChange={(e) => this.valueChange(e)}
                value={region}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                required={true}
                placeholder="Email"
                onChange={(e) => this.valueChange(e)}
                value={email}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="skillSectionOne">
              <Form.Label>First Skill Section:</Form.Label>
              <Form.Control
                required={true}
                placeholder="First Skill Section"
                onChange={(e) => this.valueChange(e)}
                value={skillSectionOne}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="firstSkillOne">
              <Form.Label>First Skill:</Form.Label>
              <Form.Control
                required={true}
                placeholder="Skill One"
                onChange={(e) => this.valueChange(e)}
                value={firstSkillOne}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="secondSkillOne">
              <Form.Label>Second Skill:</Form.Label>
              <Form.Control
                required={true}
                placeholder="Skill Two"
                onChange={(e) => this.valueChange(e)}
                value={secondSkillOne}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="thirdSkillOne">
              <Form.Label>Third Skill:</Form.Label>
              <Form.Control
                required={true}
                placeholder="Skill Three"
                onChange={(e) => this.valueChange(e)}
                value={thirdSkillOne}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="fourthSkillOne">
              <Form.Label>Fourth Skill:</Form.Label>
              <Form.Control
                required={true}
                placeholder="Skill Three"
                onChange={(e) => this.valueChange(e)}
                value={fourthSkillOne}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="skillSectionTwo">
              <Form.Label>Second Skill Section:</Form.Label>
              <Form.Control
                required={true}
                placeholder="Second Skill Section"
                onChange={(e) => this.valueChange(e)}
                value={skillSectionTwo}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="firstSkillTwo">
              <Form.Label>First Skill:</Form.Label>
              <Form.Control
                required={true}
                placeholder="Skill One"
                onChange={(e) => this.valueChange(e)}
                value={firstSkillTwo}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="secondSkillTwo">
              <Form.Label>Second Skill:</Form.Label>
              <Form.Control
                required={true}
                placeholder="Skill Two"
                onChange={(e) => this.valueChange(e)}
                value={secondSkillTwo}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="thirdSkillTwo">
              <Form.Label>Third Skill:</Form.Label>
              <Form.Control
                required={true}
                placeholder="Skill Three"
                onChange={(e) => this.valueChange(e)}
                value={thirdSkillTwo}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="fourthSkillTwo">
              <Form.Label>Fourth Skill:</Form.Label>
              <Form.Control
                required={true}
                placeholder="Skill Three"
                onChange={(e) => this.valueChange(e)}
                value={fourthSkillTwo}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="skillSectionThree">
              <Form.Label>Third Skill Section:</Form.Label>
              <Form.Control
                required={true}
                placeholder="Third Skill Section"
                onChange={(e) => this.valueChange(e)}
                value={skillSectionThree}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="firstSkillThree">
              <Form.Label>First Skill:</Form.Label>
              <Form.Control
                required={true}
                placeholder="Skill One"
                onChange={(e) => this.valueChange(e)}
                value={firstSkillThree}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="secondSkillThree">
              <Form.Label>Second Skill:</Form.Label>
              <Form.Control
                required={true}
                placeholder="Skill Two"
                onChange={(e) => this.valueChange(e)}
                value={secondSkillThree}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="thirdSkillThree">
              <Form.Label>Third Skill:</Form.Label>
              <Form.Control
                required={true}
                placeholder="Skill Three"
                onChange={(e) => this.valueChange(e)}
                value={thirdSkillThree}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="fourthSkillThree">
              <Form.Label>Fourth Skill:</Form.Label>
              <Form.Control
                required={true}
                placeholder="Skill Four"
                onChange={(e) => this.valueChange(e)}
                value={fourthSkillThree}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="jobOneName">
              <Form.Label>Enter the name of your first job:</Form.Label>
              <Form.Control
                required={true}
                placeholder="Job One Name"
                onChange={(e) => this.valueChange(e)}
                value={jobOneName}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="jobOneDescription">
              <Form.Label>Enter a description of your first job:</Form.Label>
              <Form.Control
                required={true}
                placeholder="Job One Description"
                onChange={(e) => this.valueChange(e)}
                value={jobOneDescription}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="jobTwoName">
              <Form.Label>Enter the name of your second job:</Form.Label>
              <Form.Control
                required={true}
                placeholder="Job Two Name"
                onChange={(e) => this.valueChange(e)}
                value={jobTwoName}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="jobTwoDescription">
              <Form.Label>Enter a description of your second job:</Form.Label>
              <Form.Control
                required={true}
                placeholder="Job Two Description"
                onChange={(e) => this.valueChange(e)}
                value={jobTwoDescription}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="jobThreeName">
              <Form.Label>Enter the name of your third job:</Form.Label>
              <Form.Control
                required={true}
                placeholder="Job Three Name"
                onChange={(e) => this.valueChange(e)}
                value={jobThreeName}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="jobThreeDescription">
              <Form.Label>Enter a description of your third job:</Form.Label>
              <Form.Control
                required={true}
                placeholder="Job Three Description"
                onChange={(e) => this.valueChange(e)}
                value={jobThreeDescription}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="hobbyOne">
              <Form.Label>Enter your first hobby:</Form.Label>
              <Form.Control
                required={true}
                placeholder="Hobby One"
                onChange={(e) => this.valueChange(e)}
                value={hobbyOne}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="hobbyTwo">
              <Form.Label>Enter your second hobby:</Form.Label>
              <Form.Control
                required={true}
                placeholder="Hobby Two"
                onChange={(e) => this.valueChange(e)}
                value={hobbyTwo}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="hobbyThree">
              <Form.Label>Enter your third hobby:</Form.Label>
              <Form.Control
                required={true}
                placeholder="Hobby Three"
                onChange={(e) => this.valueChange(e)}
                value={hobbyThree}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="projectOne">
              <Form.Label>Enter your first project:</Form.Label>
              <Form.Control
                required={true}
                placeholder="Project One"
                onChange={(e) => this.valueChange(e)}
                value={projectOne}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="projectTwo">
              <Form.Label>Enter your second project:</Form.Label>
              <Form.Control
                required={true}
                placeholder="Project Two"
                onChange={(e) => this.valueChange(e)}
                value={projectTwo}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="projectThree">
              <Form.Label>Enter your third project:</Form.Label>
              <Form.Control
                required={true}
                placeholder="Project Three"
                onChange={(e) => this.valueChange(e)}
                value={projectThree}
              />
            </Form.Group>
            <Button
              type="submit"
              className="btn btn-primary"
              style={{ display: "flex" }}
            >
              Select Template
            </Button>
          </Form>
        </div>
      </>
    );
  }
}

export default ResumeForm;
