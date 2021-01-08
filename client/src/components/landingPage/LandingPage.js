import React from "react";

import Banner from "./Banner";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import Portfolio from "./Portfolio";
import Contact from "../contact/Contact";
import Sidebar from "../Sidebar";

import { Element, Link as ScrollLink } from "react-scroll";

const sections = [
  { name: "About", icon: "user" },
  { name: "Skills", icon: "code branch" },
  { name: "Experience", icon: "list" },
  { name: "Education", icon: "book" },
  { name: "Portfolio", icon: "desktop" },
  { name: "Contact", icon: "envelope" },
];

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <Sidebar sections={sections} />

        <Element name="About" className="element">
          <Banner />
          <About />
        </Element>
        <Element name="Skills" className="element">
          <Skills />
        </Element>
        <Element name="Experience" className="element">
          <Experience />
        </Element>
        <Element name="Education" className="element">
          <Education />
        </Element>
        <Element name="Portfolio" className="element">
          <Portfolio />
        </Element>
        <Element name="Contact" className="element">
          <Contact />
        </Element>
      </div>
    );
  }
}

export default LandingPage;
