import React from "react";
import "./GenerateResume.css";
import ResumeForm from "../components/ResumeForm";
import Templates from "../components/Templates";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Typography } from "@mui/material";
import GetResume from "../client/GetResume";
import { useState, useCallback, useEffect } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { AiOutlineDownload } from "react-icons/ai";
import { RiArrowGoBackFill } from "react-icons/ri";
import GetHTML from "../client/GetHTML";

function getElement(html, elementId) {
  let body = html;
  if (html.indexOf("<body>") !== -1 || html.indexOf("</body>") !== -1) {
    body = html.slice(
      html.indexOf("<body>"),
      html.indexOf("</body>") - "</body>".length + 1
    );
  }
  let indexOf = body.indexOf('id="' + elementId + '"');
  for (let i = indexOf; i > 30; i--) {
    if (body[i] == "<") {
      indexOf = i;
      break;
    }
  }
  let startIndex = indexOf + html.indexOf("<body>");

  body = body.slice(indexOf, body.length);

  let openCount = 0;
  for (let i = 0; i < body.length; i++) {
    if (body[i] == "<" && !(body[i + 1] == "/")) {
      openCount++;
    }
    if (body[i] == "<" && body[i + 1] == "/") {
      openCount--;

      if (openCount === 0) {
        indexOf = i + 1;
        break;
      }
    }
  }
  for (let i = indexOf; i < body.length; i++) {
    if (body[i] == ">") {
      indexOf = i + 1;
      break;
    }
  }
  let endIndex = indexOf + startIndex;

  body = body.slice(0, indexOf);
  return { body: body, startIndex: startIndex, endIndex: endIndex };
}

function replaceText(html, elementId, newText) {
  let { body, startIndex, endIndex } = getElement(html, elementId);
  let openTagIndex = body.slice(1, body.length).indexOf(">") + 2;
  let closeTagIndex = body.slice(1, body.length).indexOf("<") + 1;
  let firstHalf = body.slice(0, openTagIndex);
  let secondHalf = body.slice(closeTagIndex, body.length);
  body = firstHalf + newText + secondHalf;
  return body;
}

function Generateresume() {
  const [qualificationsDone, setQualificationsDone] = useState(false);
  const [displayError, setDisplayError] = useState(false);
  const [attributes, setAttributes] = useState(new Object());
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [rawTemplate, setRawTemplate] = useState("");
  const [previewResume, setPreviewResume] = useState(false);

  async function getToken() {
    if (!executeRecaptcha) {
      return;
    }
    const result = await executeRecaptcha("generateResume");
    return result;
  }

  function escFunction(e) {
    if (e.key === "Escape") {
      if (previewResume) {
        displayResumePreview();
      }
    }
  }

  useEffect(async () => {
    const token = await getToken();
    const rawTemplate = await GetHTML(1, token);
    setRawTemplate(rawTemplate);
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  function changeInForm(formValues) {}

  async function handleSubmit(e) {
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

  function displayResumePreview() {
    setPreviewResume(!previewResume);
  }

  async function generateResume(passedAttributes) {
    let reCAPTCHAtoken = await getToken();
    let status = await GetResume(passedAttributes, reCAPTCHAtoken);
    reCAPTCHAtoken = await getToken();

    let html = await GetHTML(passedAttributes, reCAPTCHAtoken);
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

  let message = "Create your resume";

  return (
    <>
      {previewResume ? (
        <>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              id="resume-preview"
              className="paper"
              dangerouslySetInnerHTML={{ __html: rawTemplate }}
            ></div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <AiOutlineDownload
              className="export-icon"
              onClick={() => window.print()}
            />
            <RiArrowGoBackFill
              onClick={displayResumePreview}
              className="export-icon"
            />
          </div>
        </>
      ) : (
        <>
          <Header />
          <Typography
            fontSize={"3rem"}
            variant="h1"
            align="center"
            marginY="0.5rem"
          >
            {message}
          </Typography>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ResumeForm
              onChange={(formValues) => changeInForm(formValues)}
              onSubmit={(e) => handleSubmit(e)}
            />
            <div>
              <div style={{ padding: "1rem" }}>
                <div
                  id="resume-preview"
                  className="paper"
                  dangerouslySetInnerHTML={{ __html: rawTemplate }}
                ></div>
              </div>

              <div style={{ textAlign: "center" }}>
                <button
                  className="template-button"
                  onClick={() => displayResumePreview()}
                >
                  Generate Resume
                </button>
                <button className="template-button">Change Templates</button>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default Generateresume;
