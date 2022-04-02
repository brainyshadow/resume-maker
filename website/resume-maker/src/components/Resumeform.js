import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ResumeForm.css";

class ResumeForm extends Component {
  constructor() {
    super();

    const currentOccupation = JSON.parse(localStorage.getItem("occupation"));
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
    const jobTwoDescripton = JSON.parse(
      localStorage.getItem("jobTwoDescription")
    );
    const jobThreeName = JSON.parse(localStorage.getItem("jobThreeName"));
    const jobThreeDescription = JSON.parse(
      localStorage.getItem("jobThreeDescription")
    );
    const hobbyOne = JSON.parse(localStorage.getItem("hobbyOneName"));
    const hobbyTwo = JSON.parse(localStorage.getItem("hobbyTwoName"));
    const hobbyThree = JSON.parse(localStorage.getItem("hobbyThreeName"));
    const projectOne = JSON.parse(localStorage.getItem("projectOneName"));
    const projectTwo = JSON.parse(localStorage.getItem("projectTwoName"));
    const projectThree = JSON.parse(localStorage.getItem("projectTwoName"));
    //this.state = { test: projectOne, project: projectThree };
  }

  valueChange(e) {
    console.log(e.target.value);

    //console.log(values);
    //values[e.target.id] = e.target.value;
    /*localStorage.setItem("resumeFormValues", JSON.stringify(values));
    this.setState(values);
    console.log(values);*/
  }

  render() {
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
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="qualifications">
              <Form.Label>Summary of Qualifications:</Form.Label>
              <Form.Control
                required={true}
                as="textarea"
                rows={3}
                placeholder="Qualifications"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="occupation">
              <Form.Label>Current Occupation:</Form.Label>
              <Form.Control required={true} placeholder="Occupation" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="region">
              <Form.Label>Region:</Form.Label>
              <Form.Control required={true} placeholder="Region" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email:</Form.Label>
              <Form.Control required={true} placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="skillSectionOne">
              <Form.Label>First Skill Section:</Form.Label>
              <Form.Control required={true} placeholder="First Skill Section" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="firstSkillOne">
              <Form.Label>First Skill:</Form.Label>
              <Form.Control required={true} placeholder="Skill One" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="secondSkillOne">
              <Form.Label>Second Skill:</Form.Label>
              <Form.Control required={true} placeholder="Skill Two" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="thirdSkillOne">
              <Form.Label>Third Skill:</Form.Label>
              <Form.Control required={true} placeholder="Skill Three" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="fourthSkillOne">
              <Form.Label>Fourth Skill:</Form.Label>
              <Form.Control required={true} placeholder="Skill Three" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="skillSectionTwo">
              <Form.Label>Second Skill Section:</Form.Label>
              <Form.Control
                required={true}
                placeholder="Second Skill Section"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="firstSkillTwo">
              <Form.Label>First Skill:</Form.Label>
              <Form.Control required={true} placeholder="Skill One" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="secondSkillTwo">
              <Form.Label>Second Skill:</Form.Label>
              <Form.Control required={true} placeholder="Skill Two" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="thirdSkillTwo">
              <Form.Label>Third Skill:</Form.Label>
              <Form.Control required={true} placeholder="Skill Three" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="fourthSkillTwo">
              <Form.Label>Fourth Skill:</Form.Label>
              <Form.Control required={true} placeholder="Skill Three" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="skillSectionThree">
              <Form.Label>Third Skill Section:</Form.Label>
              <Form.Control required={true} placeholder="Third Skill Section" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="firstSkillThree">
              <Form.Label>First Skill:</Form.Label>
              <Form.Control required={true} placeholder="Skill One" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="secondSkillThree">
              <Form.Label>Second Skill:</Form.Label>
              <Form.Control required={true} placeholder="Skill Two" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="thirdSkillThree">
              <Form.Label>Third Skill:</Form.Label>
              <Form.Control required={true} placeholder="Skill Three" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="fourthSkillThree">
              <Form.Label>Fourth Skill:</Form.Label>
              <Form.Control required={true} placeholder="Skill Four" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="jobOneName">
              <Form.Label>Enter the name of your first job:</Form.Label>
              <Form.Control required={true} placeholder="Job One Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="jobOneDescription">
              <Form.Label>Enter a description of your first job:</Form.Label>
              <Form.Control required={true} placeholder="Job One Description" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="jobTwoName">
              <Form.Label>Enter the name of your second job:</Form.Label>
              <Form.Control required={true} placeholder="Job Two Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="jobTwoDescription">
              <Form.Label>Enter a description of your second job:</Form.Label>
              <Form.Control required={true} placeholder="Job Two Description" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="jobThreeName">
              <Form.Label>Enter the name of your third job:</Form.Label>
              <Form.Control required={true} placeholder="Job Three Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="jobThreeDescription">
              <Form.Label>Enter a description of your third job:</Form.Label>
              <Form.Control
                required={true}
                placeholder="Job Three Description"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="hobbyOneName">
              <Form.Label>Enter your first hobby:</Form.Label>
              <Form.Control required={true} placeholder="Hobby One" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="hobbyTwoName">
              <Form.Label>Enter your second hobby:</Form.Label>
              <Form.Control required={true} placeholder="Hobby Two" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="hobbyThreeName">
              <Form.Label>Enter your third hobby:</Form.Label>
              <Form.Control required={true} placeholder="Hobby Three" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="projectOneName">
              <Form.Label>Enter your first project:</Form.Label>
              <Form.Control required={true} placeholder="Project One" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="projectTwoName">
              <Form.Label>Enter your second project:</Form.Label>
              <Form.Control required={true} placeholder="Project Two" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="projectThreeName">
              <Form.Label>Enter your third project:</Form.Label>
              <Form.Control required={true} placeholder="Project Three" />
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
