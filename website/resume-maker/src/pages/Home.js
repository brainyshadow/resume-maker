import React from "react";
import { Component } from "react";
import Header from "../components/Header";
import { Typography } from "@mui/material";
import Footer from "../components/Footer";
import { Paper } from "@mui/material";
import { Document, Page, pdfjs } from "react-pdf";
import TemplateOne from "../assets/TemplateOne.pdf";
import CompletionBar from "../components/CompletionBar";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Home extends Component {
  render() {
    return (
      <>
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
            <Typography
              fontSize={"3rem"}
              variant="h1"
              marginX={"8rem"}
              marginY={"2rem"}
            >
              How it works.
            </Typography>

            <CompletionBar progress={"50%"} />
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default Home;
