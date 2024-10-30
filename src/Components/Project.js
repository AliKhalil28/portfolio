import React from "react";
import prjct2 from "../Assets/project2.jpg";
import prjct3 from "../Assets/project3.png";


// Project data
const projects = [
  
  {
    id: 1,
    title: "Medicine Recommendation System",
    description:
      "Developed a machine learning system for disease prediction based on symptoms. Utilized Python Flask for the backend and React.js for the frontend.",
    image: prjct2,
    demoLink: "https://medicine-recommendation-system-frontend.vercel.app/",
    codeLink: "https://github.com/AliKhalil28/Medicine_Recommendation_System_Frontend",
  },
  {
    id: 2,
    title: "Personal Portfolio using React Js",
    description:
      "A personal portfolio website built using React, showcasing user skills, projects, experience, contact options, socail icons and github code links.",
    image: prjct3,
    demoLink: "https://www.codewithali.info/",
    codeLink: "hhttps://github.com/AliKhalil28/portfolio",
  },
  
    
];

const Project = () => {

  return (
    

    <section class="projects">
    <h1>Projects</h1>
    <div class="card-body">
    <div className="card">
  {projects.map((project, index) => (
    <div key={index} className="project-item">
      <img src={project.image} alt={`${project.title} screenshot`} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="pro-bottom">
        <div className="pro-bottom-left">
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark"
          >
            <i className="fa fa-eye" aria-hidden="true"></i>
          </a>
        </div>
        <div className="pro-bottom-right">
          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark"
          >
            <i className="fa-brands fa-github" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  ))}
</div>

      
    </div>

    </section>
  );
};

export default Project;
