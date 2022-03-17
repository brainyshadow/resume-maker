import React, { Component } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../App.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

class Upload extends Component {
  async submitted() {}
  render() {
    return (
      <>
        <Header />
        <div className="main-container">
          <Form onSubmit={this.submitted}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Template Name:</Form.Label>
              <Form.Control required={true} placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="qualifications">
              <Form.Label>Template Description:</Form.Label>
              <Form.Control
                required={true}
                as="textarea"
                rows={3}
                placeholder="Description"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Your Email:</Form.Label>
              <Form.Control required={true} placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="qualifications">
              <Form.Label>Template:</Form.Label>
              <Form.Control
                required={true}
                as="textarea"
                rows={15}
                placeholder="HTML"
              />
            </Form.Group>
            <Button type="submit" style={{ marginBottom: "1rem" }}>
              Submit
            </Button>
          </Form>
        </div>
        <Footer />
      </>
    );
  }
}

export default Upload;
