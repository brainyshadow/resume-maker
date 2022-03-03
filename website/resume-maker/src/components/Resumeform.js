import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

class ResumeForm extends Component {
  constructor(props) {
    super(props);
    const DataisLoaded = false;
    this.state = { DataisLoaded: DataisLoaded };
  }

  async handleSubmit(e) {
   
  }

  render() {
    return (
      <>
        <Form onSubmit={this.props.onSubmit}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name:</Form.Label>
            <Form.Control required={true} placeholder="Name" />
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
            <Form.Control required={true} placeholder="Second Skill Section" />
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
            <Form.Control required={true} placeholder="Job Three Description" />
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
            Generateresume
          </Button>
        </Form>
      </>
    );
  }
}

export default ResumeForm;
