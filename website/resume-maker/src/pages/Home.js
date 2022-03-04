import React from "react";
import { Component } from "react";
import Header from "../components/Header";
import ResumeCarousel from "../components/ResumeCarousel";
import Footer from "../components/Footer";

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <ResumeCarousel />
        <Footer />
      </>
    );
  }
}

export default Home;
