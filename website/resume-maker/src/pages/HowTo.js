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
            element is the same as outlined below and that the <code>id</code>{" "}
            is also the same. To view the Simple Resume 1 template{" "}
            <a href={TemplateOneHTML} download="Example.html">
              click here
            </a>
            .
          </p>
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
