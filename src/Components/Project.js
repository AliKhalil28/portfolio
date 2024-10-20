import React from "react";
import prjct2 from "../Assets/project2.jpg";
import prjct3 from "../Assets/project3.jpg";


// Project data
const projects = [
  
  {
    id: 1,
    title: "Medicine Recommendation ",
    description:
      "Developed a machine learning system for disease prediction based on symptoms. Utilized Python Flask for the backend and React.js for the frontend.",
    image: prjct2,
    demoLink: "https://medicine-recommendation-system-frontend.vercel.app/",
    codeLink: "https://github.com/AliKhalil28/Medicine_Recommendation_System_Frontend",
  },
  {
    id: 2,
    title: "Portfolio",
    description:
      "A personal portfolio website built using React, showcasing user skills, projects, and experience.",
    image: prjct3,
    demoLink: "https://your-demo-link.com",
    codeLink: "https://github.com/your-repo",
  },
  
    
];

const Project = () => {
  // Inline styles
  const sectionStyle = {
    marginTop: "-9%",
    textAlign: "center",
    padding: "2rem",
    backgroundColor: "#0a0f1b",
    color: "#fff",
  };

  const titleWrapper = {
    position: "relative",
    display: "inline-block",
  };

  const title = {
    color: "#fff",
    backgroundColor: "#fcd34d",
    borderRadius: "30px",
    padding: "5px 20px",
    fontSize: "1.5rem",
    position: "relative",
    zIndex: "1",
    display: "inline-block",
  };

  const titleWrapperCss = `
  .skills-title::before, .skills-title::after {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    width: 60px;
    height: 2px;
    background-color: #fcd34d; 
  }
  
  .skills-title::before {
    left: -60px; 
  }
  
  .skills-title::after {
    right: -60px; 
  }
  `;

  const cardStyle = {
    marginTop: "10%",
    height: "95%",
    backgroundColor: "transparent",
    border: "1px solid gray",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  return (
    <section id="projects" style={sectionStyle}>
      <h2 style={titleWrapper}>
        <span className="skills-title" style={title}>
          Projects
        </span>
      </h2>

      <div className="container">
        <div className="row" style={{justifyContent: "center"}}>
          {projects.map((project) => (
            <div className="col-md-3 mb-4" key={project.id}>
              <div className="card" style={cardStyle}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-img-top"
                  style={{ height: "150px", objectFit: "cover" }}
                />
                <hr />
                <div className="card-body">
                  <h3 className="card-title">{project.title}</h3>
                  <p className="card-text" style={{ color: "#aaa" }}>
                    {project.description}
                  </p>
                </div>
                <div className="card-footer d-flex justify-content-between">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark"
                  >
                    <i className="fas fa-eye"></i> Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark"
                  >
                    <i className="fas fa-code"></i> Code
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
