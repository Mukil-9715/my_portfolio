import React from "react";
import "./Skill.css";
// import "../App.css"
import html from "../Assest/html5_icon.png";
import css from "../Assest/Css_icon.png";
import js from "../Assest/JavaScript_icon.png";
import btap from "../Assest/bootstrap_plain_icon.png";
import react_pic from "../Assest/react_icon.png";
import git from "../Assest/git_icon.png";
import gh from "../Assest/github_white_logo.png";
import postman from "../Assest/postman_icon.png";
import chrome from "../Assest/Chrome_icon.png";
import npm from "../Assest/npm_icon.png";
import webpack from "../Assest/webpack_icon.png";
import vscode from "../Assest/vscode_icon.png";
import redux_pic from "../Assest/redux_icon.png";

const Skill = () => {
  return (
    <div className="black">
      <div className="container skill  text-white fw-bold fs-2">
        <div className="cr ">My Skills</div>
        <div className="d-flex justify-content-center h-100 align-items-center flex-column ">
          <div className="text-center">Front-end Tools</div>
          <div className="d-flex justify-content-center p-5 gap-5 flex-wrap">
            <div className="child ">
              <img src={html} alt="" />
              <span className="ps-lg-3">Html</span>
            </div>
            <div className="child">
              <img src={css} alt="" />
              <span className="ps-3">Css</span>
            </div>
            <div className="child">
              <img src={js} alt="" />
              <span className="ps-3">JavaScript</span>
            </div>
            <div className="child">
              <img src={btap} alt="" />
              <span className="ps-3">Bootstrap</span>
            </div>
            <div className="child">
              <img src={react_pic} alt="" />
              <span className="ps-3">React</span>
            </div>
            <div className="child">
              <img src={redux_pic} alt="" />
              <span className="ps-3">Redux</span>
            </div>
          </div>
          <div>Tools & Methods</div>
          <div className="d-flex justify-content-center p-5 gap-5 flex-wrap">
            <div className="child"> <img src={git} alt="" />
              <span className="ps-3">Git</span></div>
            <div className="child"> <img src={gh} alt="" />
              <span className="ps-3">Github</span></div>
            <div className="child"> <img src={postman} alt="" />
              <span className="ps-3">Postman</span></div>
            <div className="child"> <img src={chrome} alt="" />
              <span className="ps-3">Chrome Dev</span></div>
            <div className="child"> <img src={npm} alt="" />
              <span className="ps-3">NPM</span></div>
            <div className="child"> <img src={webpack} alt="" />
              <span className="ps-3">Webpack</span></div>
            <div className="child"> <img src={vscode} alt="" />
              <span className="ps-3">VScode</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
