import React from "react";
import { Component } from "react";
import "./GenerateResume.css";
import ResumeForm from "../components/ResumeForm";
import Templates from "../components/Templates";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CompletionBar from "../components/CompletionBar";
import { Typography } from "@mui/material";
import GetResume from "../client/GetResume";
import { useState, useCallback, useEffect } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

function Generateresume() {
  const [qualificationsDone, setQualificationsDone] = useState(false);
  const [attributes, setAttributes] = useState(new Object());
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [token, setToken] = useState("");
  const [noOfVerifications, setNoOfVerifications] = useState(0);
  const [dynamicAction, setDynamicAction] = useState("generateResume");
  const [actionToChange, setActionToChange] = useState("");

  const clickHandler = useCallback(async () => {
    if (!executeRecaptcha) {
      return;
    }

    const result = await executeRecaptcha("generateResume");
    setToken(result);
    setNoOfVerifications((noOfVerifications) => noOfVerifications + 1);
  }, [dynamicAction, executeRecaptcha]);

  async function getToken() {
    if (!executeRecaptcha) {
      return;
    }
    const result = await executeRecaptcha("generateResume");
    return result;
  }

  const handleTextChange = useCallback((event) => {
    setActionToChange(event.target.value);
  }, []);

  const handleCommitAction = useCallback(() => {
    setDynamicAction(actionToChange);
  }, [actionToChange]);

  useEffect(() => {
    if (!executeRecaptcha || !dynamicAction) {
      return;
    }

    const handleReCaptchaVerify = async () => {
      const token = await executeRecaptcha(dynamicAction);
      setToken(token);
      setNoOfVerifications((noOfVerifications) => noOfVerifications + 1);
    };

    handleReCaptchaVerify();
  }, [executeRecaptcha, dynamicAction]);

  async function handleSubmit(e) {
    clickHandler();
    e.preventDefault();
    let userInput = e.target.elements;
    var data = {
      name: userInput.name.value,
      qualifications: userInput.qualifications.value,
      currentOccupation: userInput.currentOccupation.value,
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
      jobTwoDescription: userInput.jobTwoDescription.value,
      jobThreeName: userInput.jobThreeName.value,
      jobThreeDescription: userInput.jobThreeDescription.value,
      hobbyOne: userInput.hobbyOneName.value,
      hobbyTwo: userInput.hobbyTwoName.value,
      hobbyThree: userInput.hobbyThreeName.value,
      projectOne: userInput.projectOneName.value,
      projectTwo: userInput.projectTwoName.value,
      projectThree: userInput.projectTwoName.value,
    };
    setQualificationsDone(true);
    setAttributes(data);
  }

  async function selectTemplate(id) {
    let temp = attributes;
    temp["Template Id"] = parseInt(id);
    const raw = JSON.stringify(attributes);
    setAttributes(raw);
    generateResume(raw);
  }

  async function generateResume(passedAttributes) {
    let reCAPTCHAtoken = await getToken();
    console.log(reCAPTCHAtoken);
    GetResume(passedAttributes, reCAPTCHAtoken).then(() => {
      setQualificationsDone(false);
    });
  }

  let message = "Tell us a bit about yourself.";
  let progress = 0;
  if (qualificationsDone) {
    progress = 50;
    message = "Select a template.";
  }
  return (
    <>
      <Header />
      <Typography fontSize={"3rem"} variant="h1" align="center" marginY="2rem">
        {message}
      </Typography>
      <div className="resume-form" style={{ height: "auto" }}>
        <CompletionBar progress={progress} />
      </div>
      {qualificationsDone ? (
        <div className="template-display">
          <Templates templateSelect={(id) => selectTemplate(id)} />
        </div>
      ) : (
        <ResumeForm onSubmit={(e) => handleSubmit(e)} />
      )}
      <Footer />
    </>
  );
}

export default Generateresume;
