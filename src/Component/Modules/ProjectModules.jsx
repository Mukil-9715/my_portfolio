import React from "react";
import Contact from "../Contact";
import Project from "../Project";
import Projects from "../Projects";
import ScrollToTop from "../ScrollToTop";

const ProjectModules = () => {
  return (
    <div>
        <ScrollToTop/>
      <Project />
      <Projects />
      <Contact />
    </div>
  );
};

export default ProjectModules;
