import React from "react";
import { Component } from "react";
import Header from "../components/Header";
import ResumeCarousel from "../components/ResumeCarousel";
import Footer from "../components/Footer";
import Card from "@mui/material/Card";
import { CardHeader } from "@mui/material";
import { Typography } from "@mui/material";
import { Divider } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardActions } from "@mui/material";
import { Button } from "react-bootstrap";


class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="main-container">
          <Card
            sx={{
              alignItems: "center",
              bgcolor: "background.paper",
              borderRadius: "12px",
              boxShadow: 1,
              fontWeight: "bold",
              margin: "1rem ",
            }}
          >
            <CardHeader
              subheader={
                <Typography variant="title" color="text.primary">
                  Resume Maker
                </Typography>
              }
              sx={{ margin: "0.2rem" }}
            ></CardHeader>
            <Divider
              sx={{
                width: "95%",
                display: "flex",
                margin: "auto",
              }}
            ></Divider>
            <CardContent>
              <Typography
                variant="body1"
                color="text.secondary"
                fontSize={"0.9rem"}
              >
                Your all in one Resume Maker to generate a custom resume based
                on a host of user generated templates. It's this simple. Input
                your credentials, select a template and export your resume as a
                PDF.
              </Typography>
            </CardContent>
            <CardActions sx={{ margin: "auto " }}>
              <Button size="small" href="/resume">
                Generate Resume
              </Button>
              <Button size="small" href="/upload">
                Upload a Template
              </Button>
            </CardActions>
          </Card>
        </div>

        <ResumeCarousel />
        <Footer />
      </>
    );
  }
}

export default Home;
