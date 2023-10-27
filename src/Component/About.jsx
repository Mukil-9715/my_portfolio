import React from "react";
import "./About.css";
import pic from "../Assest/abt.png";

const About = () => {
  return (
    <div className="about-main bg-black ">
      <div class="about">
        <div className="abt-rev  container ">
          <div className="p-3 fs-1 cr">About</div>
          <div className="d-flex row  justify-content-evenly">
            <div className="m-3 fs-5 col-md fw-normal text-justify th3">
              As a frontend Developer based in Paris, I get to combine my love
              for technology with my passion for art and design. I enjoy using
              my creativity and problem-solving skills to create digital
              experiences that not only look great but also work seamlessly for
              the user. believe that continuous learning is the key to success,
              and I'm always on the lookout for fresh challenges to keep me
              motivated and engaged
            </div>
            <div className="col-md">
              <img   src={pic} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
