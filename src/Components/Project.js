import React from "react";
import prjct2 from "../Assets/project2.jpg";
import prjct3 from "../Assets/project3.png";
import prjct4 from "../Assets/project4.png";

const projects = [
  {
    id: 1,
    title: "Medicine Recommendation System",
    description:
      "Developed a machine learning system for disease prediction based on symptoms. Utilized Python Flask for the backend and React.js for the frontend.",
    image: prjct2,
    demoLink: "https://medicine-recommendation-system-frontend.vercel.app/",
    codeLink:
      "https://github.com/AliKhalil28/Medicine_Recommendation_System_Frontend",
  },
  {
    id: 2,
    title: "Personal Portfolio using React Js",
    description:
      "A personal portfolio website built using React, showcasing user skills, projects, experience, contact options, socail icons and github code links.",
    image: prjct3,
    demoLink: "https://www.codewithali.info/",
    codeLink: "https://github.com/AliKhalil28/portfolio",
  },
  {
    id: 3,
    title: "Random User API using React Js",
    description:
      "A React app that fetches and displays user profiles from the Random User API with pagination. Built using React hooks, and Tailwind CSS and responsive user interface.",
    image: prjct4,
    demoLink: "https://randam-user-api-react.vercel.app/",
    codeLink: "https://github.com/AliKhalil28/RandamUserAPIReact",
  },
];

const Project = () => {
  return (
    <section className="projects" id="prosec">
      <h1>Projects</h1>
      <div className="card-body">
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
