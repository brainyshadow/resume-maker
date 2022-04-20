import React from "react";
import Header from "../components/Header";
import { Typography } from "@mui/material";
import Footer from "../components/Footer";
import { Document, Page, pdfjs } from "react-pdf";
import TemplateOne from "../assets/templates/TemplateOne.pdf";
import "./HowTo.css";
import TemplateOneHTML from "../assets/templates/templateOne.txt";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function HowTo() {
  return (
    <>
      <Header />
      <div className="main-container-min-height">
        <div>
          <div className="left-part">
            <div className="only-vertical-center">
              <Typography fontSize={"3rem"} variant="h1" marginLeft={"8rem"}>
                Create a template.
              </Typography>
              <Typography variant="body" marginLeft={"8rem"}>
                Learn how to. Build. Upload.
              </Typography>
              <br></br>
              <Typography variant="body" marginLeft={"8rem"}>
                <a href="#how-to">Learn How</a>
              </Typography>
            </div>
          </div>
          <div className="right-part">
            <div className="only-vertical-center">
              <div className="yellow-accent">
                <div className="vertical-center">
                  <Document file={TemplateOne}>
                    <Page scale={0.7} pageNumber={1} />
                  </Document>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-grey-portion">
        <div className="my-main-container">
          <Typography fontSize={"3rem"} variant="h1" textAlign={"center"}>
            Learn How
          </Typography>
          <p>
            Resume Maker use HTML tempaltes to generate it's resumes. Uses these
            templates submitted by users, it replaces all the necessary fields
            to generate a custom resume. The fields are identified using the
            HTML <code>id</code> attribute, by the HTML element used, and by the
            text value. For example, the persons name is always an{" "}
            <code>h2</code> element with the <code>id</code> field set to "name"
            and the text set to "NAME". Below, you find all the fields that each
            resume requires. When creating a template, ensure the type of
            element is the same as outlined below, that the <code>id</code> is
            the same as below and that the vlaue is also the same as below. To
            view the Simple Resume 1 template{" "}
            <a href={TemplateOneHTML} download="Example.html">
              click here
            </a>
            .
          </p>
          <table className="how-to-table">
            <tr>
              <th className="third-width">Element Type </th>
              <th className="third-width">
                <code>id</code>
              </th>
              <th className="third-width">Text</th>
            </tr>
            <tr>
              <td>h2</td>
              <td>name</td>
              <td>NAME</td>
            </tr>
            <tr>
              <td>p</td>
              <td>occupation</td>
              <td>Education/Occupation</td>
            </tr>
            <tr>
              <td>p</td>
              <td>region</td>
              <td>City, State/Province</td>
            </tr>
            <tr>
              <td>p</td>
              <td>email</td>
              <td>Email</td>
            </tr>
            <tr>
              <td>p</td>
              <td>first-skill-section</td>
              <td>Skill Section One</td>
            </tr>
            <tr>
              <td>p</td>
              <td>second-skill-section</td>
              <td>Skill Section Two</td>
            </tr>
            <tr>
              <td>p</td>
              <td>third-skill-section</td>
              <td>Skill Section Three</td>
            </tr>
            <tr>
              <td>p</td>
              <td>first-skill-one</td>
              <td>First Skills</td>
            </tr>
            <tr>
              <td>p</td>
              <td>first-skill-two</td>
              <td>Second Skills</td>
            </tr>
            <tr>
              <td>p</td>
              <td>first-skill-three</td>
              <td>Third Skills</td>
            </tr>
            <tr>
              <td>p</td>
              <td>first-skill-four</td>
              <td>Fourth Skills</td>
            </tr>
            <tr>
              <td>p</td>
              <td>second-skill-one</td>
              <td>First Skills</td>
            </tr>
            <tr>
              <td>p</td>
              <td>second-skill-two</td>
              <td>Second Skills</td>
            </tr>
            <tr>
              <td>p</td>
              <td>second-skill-three</td>
              <td>Third Skills</td>
            </tr>
            <tr>
              <td>p</td>
              <td>second-skill-four</td>
              <td>Fourth Skills</td>
            </tr>
            <tr>
              <td>p</td>
              <td>third-skill-one</td>
              <td>First Skills</td>
            </tr>
            <tr>
              <td>p</td>
              <td>third-skill-two</td>
              <td>Second Skills</td>
            </tr>
            <tr>
              <td>p</td>
              <td>third-skill-three</td>
              <td>Third Skills</td>
            </tr>
            <tr>
              <td>p</td>
              <td>third-skill-four</td>
              <td>Fourth Skills</td>
            </tr>
            <tr>
              <td>p</td>
              <td>jobeOneName</td>
              <td>Job Name</td>
            </tr>
            <tr>
              <td>p</td>
              <td>jobOne</td>
              <td>First Job</td>
            </tr>
            <tr>
              <td>p</td>
              <td>jobeTwoName</td>
              <td>Job Name</td>
            </tr>
            <tr>
              <td>p</td>
              <td>jobTwo</td>
              <td>Second Job</td>
            </tr>
            <tr>
              <td>p</td>
              <td>jobeThreeName</td>
              <td>Job Name</td>
            </tr>
            <tr>
              <td>p</td>
              <td>jobThree</td>
              <td>Third Job</td>
            </tr>
            <tr>
              <td>p</td>
              <td>projectOne</td>
              <td>Project one</td>
            </tr>
            <tr>
              <td>p</td>
              <td>projectTwo</td>
              <td>Project two</td>
            </tr>

            <tr>
              <td>p</td>
              <td>projectThree</td>
              <td>Project three</td>
            </tr>
            <tr>
              <td>p</td>
              <td>hobbyOne</td>
              <td>Hobby one</td>
            </tr>
            <tr>
              <td>p</td>
              <td>hobbyTwo</td>
              <td>Hobby two</td>
            </tr>

            <tr>
              <td>p</td>
              <td>hobbyThree</td>
              <td>Hobby three</td>
            </tr>
          </table>

          <p>
            Now that you know how, submit your template for review{" "}
            <a href="upload">here</a>.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default HowTo;
