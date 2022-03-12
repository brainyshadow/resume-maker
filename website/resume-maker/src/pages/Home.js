import React from "react";
import { Component } from "react";
import Header from "../components/Header";
import { Typography } from "@mui/material";
import Footer from "../components/Footer";
import { Paper } from "@mui/material";
import { Document, Page, pdfjs } from "react-pdf";
import TemplateOne from "../assets/TemplateOne.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="main-container">
          <div className="left-part">
            <div className="vertical-center">
              <Typography fontSize={"3rem"} align="center" variant="h1">
                Build your resume.
              </Typography>
              <Typography align="center" variant="body">
                Simple. No Acounts. Open Source.
              </Typography>
              <br></br>
              <Typography align="center" variant="body">
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
          <div className="left-half">
            <div className="vertical-center">
           
            </div>
          </div>
          <div className="right-half">
            <div className="only-vertical-center">
             
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Home;
