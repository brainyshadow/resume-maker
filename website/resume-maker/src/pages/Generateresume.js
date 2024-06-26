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
import ErrorPopup from "../components/ErrorPopup";

function Generateresume() {
  const [qualificationsDone, setQualificationsDone] = useState(false);
  const [displayError, setDisplayError] = useState(false);
  const [attributes, setAttributes] = useState(new Object());
  const { executeRecaptcha } = useGoogleReCaptcha();

  async function getToken() {
    if (!executeRecaptcha) {
      return;
    }
    const result = await executeRecaptcha("generateResume");
    return result;
  }

  async function handleSubmit(e) {
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
      hobbyOne: userInput.hobbyOne.value,
      hobbyTwo: userInput.hobbyTwo.value,
      hobbyThree: userInput.hobbyThree.value,
      projectOne: userInput.projectOne.value,
      projectTwo: userInput.projectTwo.value,
      projectThree: userInput.projectThree.value,
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
    let status = await GetResume(passedAttributes, reCAPTCHAtoken);
    if (status === 200) {
      setQualificationsDone(false);
    } else {
      setDisplayError(true);
      const timeId = setTimeout(() => {
        // After 3 seconds set the show value to false
        setDisplayError(false);
        clearTimeout(timeId);
      }, 3000);
    }
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
      {displayError ? <ErrorPopup /> : <></>}
      <Footer />
    </>
  );
}

export default Generateresume;
