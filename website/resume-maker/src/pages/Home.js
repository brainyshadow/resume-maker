import React from "react";
import { Component } from "react";
import Header from "../components/Header";
import { Typography } from "@mui/material";
import Footer from "../components/Footer";
import { Paper } from "@mui/material";
import { Document, Page, pdfjs } from "react-pdf";

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
            </div>
          </div>
          <div className="right-part">
            <div className="vertical-center">
              <Paper>
              
              </Paper>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Home;
