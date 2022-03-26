import React, { Component } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./Upload.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import UploadTemplate from "../client/UploadTemplate";
const parser = new DOMParser();

function validateHTML(htmlString) {
  let parser = new DOMParser();
  let doc = parser.parseFromString(htmlString, "application/xml");
  let errorNode = doc.querySelector("parsererror");

  if (errorNode) {
    return true;
  } else {
    return false;
  }
}

class Upload extends Component {
  constructor() {
    super();
    const invalidHTML = true;
    this.state = { invalidHTML: invalidHTML };
  }

  async handleSubmit(e) {
    e.prevenDefault();
    console.log("Submitting Form");
    let userInput = e.target.elements;

    var data = {
      TemplateName: userInput.templateName.value,
      TemplateDescription: userInput.templateDescription.value,
      Email: userInput.email.value,
      HTML: userInput.html.value,
    };

    await UploadTemplate(data);
  }

  checkHTML(e) {
    let html = e.target.value;
    let invalidHTML = false;
    if (validateHTML(html)) {
      invalidHTML = true;
    } else {
      invalidHTML = false;
    }
    this.setState({ invalidHTML: invalidHTML });
  }

  render() {
    const validHTML = this.state.invalidHTML;

    return (
      <>
        <Header />
        <div style={{ alignItems: "center" }}>
          <div className="form-container">
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="templateName">
                <Form.Label>Template Name:</Form.Label>
                <Form.Control required={true} placeholder="Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="templateDescription">
                <Form.Label>Template Description:</Form.Label>
                <Form.Control
                  required={true}
                  as="textarea"
                  rows={3}
                  placeholder="Description"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Your Email:</Form.Label>
                <Form.Control required={true} placeholder="Email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="html">
                <Form.Label>Template:</Form.Label>
                <Form.Control
                  required={true}
                  as="textarea"
                  rows={15}
                  placeholder="HTML"
                  onChange={(e) => this.checkHTML(e)}
                  isInvalid={validHTML}
                />
                {validHTML ? (
                  <Form.Control.Feedback type="invalid">
                    Please enter valid HTML.
                  </Form.Control.Feedback>
                ) : (
                  <div></div>
                )}
              </Form.Group>
              {validHTML ? (
                <fieldset disabled>
                  <Button type="submit" style={{ marginBottom: "1rem" }}>
                    Submit
                  </Button>
                </fieldset>
              ) : (
                <Button type="submit" style={{ marginBottom: "1rem" }}>
                  Submit
                </Button>
              )}
            </Form>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Upload;
