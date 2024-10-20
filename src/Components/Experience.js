import React from "react";
import expr1 from "../Assets/experience1.jpg";

const experiences = [
  {
    id: 1,
    title: "IT Specailist - Intersoft Lahore (Remote)",
    company: "",
    date: "Dec 2022 - Present",
    description: "Academic Services and student level final year projects",
  },
  {
    id: 2,
    title: "SELF EMPLOYED",
    company: "Freelancer",
    date: "Nov 2021 - Present",
    description: "Creating and building projects daily for clients.",
  },
];

const Experience = () => {
  const sectionStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: "3rem 7rem",
    backgroundColor: "#0a0f1b",
    color: "#fff",
    gap: "7rem",
   
  };

  const headingStyle = {
    fontSize: "2.5rem",
    textAlign: "center",
    marginBottom: "2rem",
    color: "#fff",
    width: "100%",
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    alignItems: "flex-start",
    width: "100%",
    maxWidth: "600px",
  };

  const cardStyle = {
    backgroundColor: "transparent",
    borderRadius: "12px",
    border: "2px solid #fcd34d",
    padding: "10px",
    backdropFilter: "blur(10px)",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
    width: "100%",
    transition: "all 0.3s ease",
  };

  const iconStyle = {
    marginRight: "1rem",
    fontSize: "1.5rem",
  };

  const titleStyle = {
    fontSize: "1.25rem",
    fontWeight: "bold",
  };

  const dateStyle = {
    color: "#1abc9c",
    marginBottom: "1rem",
  };

  const descriptionStyle = {
    fontSize: "1rem",
    color: "#aaa",
  };

  const imageStyle = {
    width: "300px",
    height: "300px",
    borderRadius: "10px",
    animation: "moveImage 2s infinite alternate",
    flexShrink: 0,
    alignSelf: "center",
  };

  // Define the animation keyframes
  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(
    `@keyframes moveImage {
      0% { transform: translateY(0); }
      100% { transform: translateY(-10px); }
    }`,
    styleSheet.cssRules.length
  );

  // Media queries for responsive design
  const mediaQueries = `
    @media (max-width: 768px) {
      section {
        flex-direction: column; 
        align-items: center; 
      }

      img {
        width: 100%; 
        height: auto;
        margin-top: 2rem; 
      }

      .card {
        max-width: 90%; 
      }
    }
  `;

  styleSheet.insertRule(mediaQueries, styleSheet.cssRules.length);

  return (
    <section id="experience" style={sectionStyle}>
      <div style={{ width: "100%", display : "flex", flexDirection: "column", alignItems: "center" }}>
        <h2 style={headingStyle}>Experience</h2>
        <div style={containerStyle}>
          {experiences.map((exp) => (
            <div key={exp.id} style={cardStyle} className="card">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <i className="fas fa-user" style={iconStyle} />
                <div>
                  <p style={dateStyle}>{exp.date}</p>
                  <h3 style={titleStyle}>{exp.title}</h3>
                </div>
              </div>
              <p style={descriptionStyle}>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default Experience;
