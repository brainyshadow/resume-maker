import React from "react";
import { Component } from "react";
import Header from "../components/Header";
import { Typography } from "@mui/material";
import Footer from "../components/Footer";
import { Paper } from "@mui/material";
import { Document, Page, pdfjs } from "react-pdf";
import TemplateOne from "../assets/TemplateOne.pdf";
import CompletionBar from "../components/CompletionBar";
import { Parallax } from "react-scroll-parallax";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Home extends Component {
  constructor(props) {
    super(props);
    const progress = 6;
    this.state = { progress: progress };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll);
  }

  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = winScroll / height;
    const percent = scrolled * 100;
    this.setState({ progress: percent });
  };

  render() {
    const percent = this.state.progress;

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
          <div style={{ backgroundColor: "#F0F0F0", height: "300vh" }}>
            <div
              className="main-container"
              style={{ backgroundColor: "#F0F0F0" }}
            >
              <div className="how-it-works">
                <Typography fontSize={"3rem"} variant="h1" marginX={"8rem"}>
                  How it works.
                </Typography>
                <CompletionBar progress={percent} />
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
