import React from "react";
import "./Project.css";
import desktop from "../Assest/desktop screen.png";
import pro2 from "../Assest/Pro_pic/Screenshot 2023-11-05 202105.png";



const Projects = () => {
  return (
    <div className="project-main black ">
      <div class="project bg-g2">
        <div className="abt-rev  container ">
          {/* <div className="fs-1   fw-bold cr">Project</div> */}
          <div className="d-flex  row">
            <div className="fs-4 col-lg image-containers p-0">
              <img className="" src={desktop} alt="" width="97.5%" />
              <img
                className="overlay"
                src={pro2}
                alt=""
                width="90%"
              />
            </div>
            <div className=" px-4 pb-5 col-lg fs-4 d-flex align-items-center flex-column justify-content-center"><div className="fs-2 pb-3 fw-bold cr">BUILDERZ.</div>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, fuga. In, recusandae repellat, rem non molestias cupiditate aut doloremque omnis excepturi iste et iure ad cum at ratione veritatis. Ducimus.
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
