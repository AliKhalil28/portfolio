import React from "react";
import "../css/style.css";
import htmlLogo from "../Assets/skills/htmlLogo.png";
import cssLogo from "../Assets/skills/cssLogo.png";
import bootstrapLogo from "../Assets/skills/bootstrapLogo.png";
import jsLogo from "../Assets/skills/JsLogo.webp";
import reactLogo from "../Assets/skills/reactLogo.webp";
import nodeLogo from "../Assets/skills/nodeLogo.png";
import myqSqlLogo from "../Assets/skills/mysqlLogo.png";
import gitLogo from "../Assets/skills/gitLogo.png";
import githubLogo from "../Assets/skills/githubLogo.png";
import cloudLogo from "../Assets/skills/cloudComputingLogo.png";
import mongodbLogo from "../Assets/skills/mongodb-icon.svg";
// import php from "../Assets/skills/PHP.svg";
// import laravel from "../Assets/skills/Laravel.svg";
// import codeIgniter from "../Assets/skills/CodeIgniter.svg";

const skills = [
  { name: "HTML5", img: htmlLogo },
  { name: "CSS3", img: cssLogo },
  { name: "Bootstrap", img: bootstrapLogo },
  { name: "JavaScript", img: jsLogo },
  // { name: "PHP", img: php },
  // { name: "Laravel", img: laravel },
  // { name: "CodeIgniter", img: codeIgniter },
  { name: "React", img: reactLogo },
  { name: "Node JS", img: nodeLogo },
  { name: "MYSQL", img: myqSqlLogo },
  { name: "MongoDB", img: mongodbLogo },
  { name: "Git", img: gitLogo },
  { name: "Github", img: githubLogo },
  { name: "Hosting", img: cloudLogo },
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
    <section className="skills" id="skillsec">
      <h1>Skills</h1>
      <div className="skills-sec">
        <div className="marquee">
          {duplicatedSkills.map((skill, index) => (
            <div className="skillbox" key={index}>
              <img src={skill.img} alt={skill.name} />
              <h5>{skill.name}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
