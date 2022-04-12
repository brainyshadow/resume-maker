import React, { Component } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./Upload.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import UploadTemplate from "../client/UploadTemplate";
import { Typography } from "@mui/material";

import { useState, useCallback, useEffect } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

function validateHTML(html) {
  let checkedHTML = html;
  if (checkedHTML.includes("&")) {
    checkedHTML = checkedHTML.replaceAll("&", "&amp;");
  }
  if (checkedHTML.includes("crossorigin")) {
    checkedHTML = checkedHTML.replaceAll("crossorigin", "");
  }
  const parser = new DOMParser();
  const doc = parser.parseFromString(checkedHTML, "text/xml");
  if (doc.documentElement.querySelector("parsererror")) {
    return true;
  } else {
    return false;
  }
}

function Upload() {
  const [invalidHTML, setInvalidHTML] = useState(true);
  const { executeRecaptcha } = useGoogleReCaptcha();
 


  async function getToken() {
    if (!executeRecaptcha) {
      return;
    }
    const result = await executeRecaptcha("uploadTemplate");
    return result;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let token = await getToken();
    let userInput = e.target.elements;
    var data = {
      TemplateName: userInput.templateName.value,
      TemplateDescription: userInput.templateDescription.value,
      Email: userInput.email.value,
      HTML: userInput.html.value,
    };
    UploadTemplate(data, token);
  }

  function checkHTML(e) {
    let html = e.target.value;
    let invalidHTML = false;
    if (validateHTML(html)) {
      invalidHTML = true;
    } else {
      invalidHTML = false;
    }
    setInvalidHTML(invalidHTML);
  }

  return (
    <>
      <Header />
      <div style={{ alignItems: "center" }}>
        <div className="form-width">
          <Typography
            fontSize={"3rem"}
            variant="h1"
            align="center"
            marginY="2rem"
          >
            Upload a template
          </Typography>
          <Typography align="center" margin={"auto"}>
            Give others the opportunity to use your template.
          </Typography>
        </div>
        <div className="form-container">
          <Form onSubmit={(e) => handleSubmit(e)}>
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
                onChange={(e) => checkHTML(e)}
                isInvalid={invalidHTML}
              />
              {invalidHTML ? (
                <Form.Control.Feedback type="invalid">
                  Please enter valid HTML.
                </Form.Control.Feedback>
              ) : (
                <div></div>
              )}
            </Form.Group>
            {invalidHTML ? (
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

export default Upload;
