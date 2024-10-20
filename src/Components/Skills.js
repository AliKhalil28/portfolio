import React from "react";

const skills = [
  { name: "HTML5", iconClass: "fab fa-html5" },
  { name: "CSS3", iconClass: "fab fa-css3-alt" },
  { name: "Bootstrap", iconClass: "fab fa-bootstrap" },
  { name: "JavaScript", iconClass: "fab fa-js-square" },
  { name: "React", iconClass: "fab fa-react" },
  { name: "NodeJS", iconClass: "fab fa-node-js" },
  { name: "Git", iconClass: "fab fa-git-alt" },
  { name: "Python", iconClass: "fab fa-python" },
  { name: "Github", iconClass: "fab fa-github" },
  { name: "React", iconClass: "fab fa-react" },
  { name: "Tiwland CSS", iconClass: "fab fa-wind" },
  { name: "Express", iconClass: "fas fa-server" },
  
];

const duplicatedSkills = [
  ...skills,
  ...skills,
  ...skills,
  ...skills,
  ...skills,
  ...skills,
];

const SkillsSection = () => {
  return (
    <section id="skills" style={sectionStyle}>
      <h2 style={titleWrapper}>
        <span className="skills-title" style={titleStyle}>
          Skills
        </span>
      </h2>
      <div className="skills-slider" style={sliderStyle}>
        <div className="skills-track" style={trackStyle}>
          {duplicatedSkills.map((skill, index) => (
            <div className="skill-item" style={skillItemStyle} key={index}>
              <i className={skill.iconClass} style={skillIconStyle}></i>
              <p style={skillNameStyle}>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Styles
const sectionStyle = {
  backgroundColor: "#0a0f1b",
  padding: "40px 0",
  textAlign: "center",
  color: "#fff",
};

const titleWrapper = {
  position: "relative",
  display: "inline-block",
};

const titleStyle = {
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

const sliderStyle = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "relative",
  width: "80%",
  margin: "50px auto",
  display: "flex",
  justifyContent: "center",
};

const trackStyle = {
  display: "flex",
  animation: "scroll 100s linear infinite",
};

const skillItemStyle = {
  display: "inline-block",
  textAlign: "center",
  margin: "0 15px",
  padding: "20px",
  borderRadius: "10px",
  position: "relative",
  transition: "transform 0.10s ease-in-out",
  backgroundColor: "transparent",
  //   border: "2px solid #fcd34d",
  boxSizing: "border-box",
};

const skillIconStyle = {
  fontSize: "3rem",
  marginBottom: "10px",
  color: "#fcd34d",
  transition: "transform 0.9s ease-in-out, color 0.9s ease-in-out",
};

const skillNameStyle = {
  color: "#666",
  fontSize: "1rem",
};

// CSS for animation and hover effects
const css = `
.skills-slider:hover .skills-track {
  animation-play-state: paused;
}

.skill-item:hover {
  transform: scale(1.2);
  border-color: #fff; 
}

.skill-item:hover i {
  color: #fff; /* Change icon color on hover */
}

@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); } 
}
`;

// Inject CSS into the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = css + titleWrapperCss;
document.head.appendChild(styleSheet);

export default SkillsSection;
