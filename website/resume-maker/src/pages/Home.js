import React from "react";
import { Component } from "react";
import Header from "../components/Header";
import { Typography } from "@mui/material";
import Footer from "../components/Footer";
import { Document, Page, pdfjs } from "react-pdf";
import TemplateOne from "../assets/templates/TemplateOne.pdf";
import Form from "../assets/other/ResumeGeneratorForm.png";
import Select from "../assets/other/SelectTemplate.png";
import ProgressiveImage from "../components/ProgressiveImage";
import "./Home.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="main-container-min-height">
          <div>
            <div className="left-part">
              <div className="only-vertical-center">
                <Typography fontSize={"3rem"} variant="h1" marginLeft={"8rem"}>
                  Build your resume.
                </Typography>
                <Typography variant="body" marginLeft={"8rem"}>
                  Simple. No Acounts. Open Source.
                </Typography>
                <br></br>
                <Typography variant="body" marginLeft={"8rem"}>
                  <a href="/resume">Build now.</a>
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

        <div style={{ backgroundColor: "F0F0F0" }}>
          <div className="main-container" style={{ backgroundColor: "F0F0F0" }}>
            <div className="small-left-part">
              <div className="only-vertical-center">
                <Typography fontSize={"3rem"} variant="h1" marginLeft={"8rem"}>
                  Fill out our form.
                </Typography>
                <div style={{ marginLeft: "8rem" }}>
                  <Typography variant="body">
                    Fill out our form. This gives the generator your
                    qualifications allowing it to create a personalized resume
                    for you.
                  </Typography>
                </div>
                <br></br>
              </div>
            </div>
            <div className="large-right-part">
              <div className="vertical-center">
                <ProgressiveImage src={Form}></ProgressiveImage>
              </div>
            </div>
          </div>
          <div style={{ backgroundColor: "#F0F0F0" }}>
            <div
              className="main-container"
              style={{ backgroundColor: "#F0F0F0" }}
            >
              <div className="small-left-part">
                <div className="vertical-center">
                  <Typography
                    fontSize={"3rem"}
                    variant="h1"
                    marginLeft={"8rem"}
                  >
                    Pick a template.
                  </Typography>
                  <div style={{ marginLeft: "8rem" }}>
                    <Typography variant="body">
                      Select a template. This tells us what you want your custom
                      resume to look like. From here, we can fill our templates
                      in with the qualifications you gave us.
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="large-right-part">
                <div className="vertical-center">
                  <ProgressiveImage src={Select}></ProgressiveImage>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Home;
