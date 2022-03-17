import React from "react";
import { Component } from "react";
import Header from "../components/Header";
import { Typography } from "@mui/material";
import Footer from "../components/Footer";
import { Paper } from "@mui/material";
import { Document, Page, pdfjs } from "react-pdf";
import TemplateOne from "../assets/templates/TemplateOne.pdf";
import Form from "../assets/other/ResumeGeneratorForm.png";
import Select from "../assets/other/SelectTemplate.png";
import CompletionBar from "../components/CompletionBar";
import { Parallax } from "react-scroll-parallax";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Home extends Component {
  render() {
    return (
      <>
        <div>
          <Header />

          <div className="main-container">
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
          <div style={{ backgroundColor: "#F0F0F0" }}>
            <div
              className="main-container"
              style={{ backgroundColor: "#F0F0F0" }}
            >
              <div style={{ height: "2rem" }}> </div>
              <Typography
                fontSize={"3rem"}
                variant="h1"
                marginX={"8rem"}
                marginY="2rem"
              >
                How it works.
              </Typography>
              <div>
                <Typography
                  fontSize={"1rem"}
                  variant="body"
                  position="relative"
                  marginY={"1rem"}

                >
                  Fill out our form. This gives the generator your
                  qualifications allowing it to create a personalized resume for
                  you.
                </Typography>
                <img src={Form} className="center-main-image"></img>
                <Typography
                  fontSize={"1rem"}
                  variant="body"
                  position="relative"
                  marginY={"1rem"}
                >
                  Select a template. This tells us what you want your custom
                  resume to look like. From here, we can fill our templates in
                  with the qualifications <b>you</b> gave us.
                </Typography>
                <img src={Select} className="center-main-image"></img>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default Home;
