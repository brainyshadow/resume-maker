import React from "react";
import { Component } from "react";
import Header from "../components/Header";
import ResumeCarousel from "../components/ResumeCarousel";

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <ResumeCarousel />
      </>
    );
  }
}

export default Home;
