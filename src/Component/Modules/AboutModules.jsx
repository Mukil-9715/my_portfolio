import React from "react";
import About from "../About";
import Project from "../Project";
import Projects from "../Projects";
import Contact from "../Contact";
import Skill from "../Skill";
import ScrollToTop from "../ScrollToTop";
const AboutModules = () => {
  return (
    <div>
      <ScrollToTop />
      <About />
      <Skill />
      <Project />
      <Projects />
      <Contact />
    </div>
  );
};

export default AboutModules;
