import React from "react";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Experience from "../Experience/Experience";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Intro from "../Intro/Intro";
import Works from "../Works/Works";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Intro />
      <Experience />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
