import React from "react";
import img from "../Assets/image.png";
import "../css/style.css";

const About = () => {
  return (
    <section className="about" id="aboutsec">
      <div className="about-left">
        <h1>Personal Profile</h1>
        <p>
          I’m Ali Khalil, a Medalist BSIT graduate (3.52 CGPA) from Government
          College University Faisalabad, with a strong foundation in PHP and
          MERN stack development (MongoDB, Express.js, React, Node.js). I’m work
          passionate, having built a full-stack Medicine Recommendation System
          using React.js and Flask as my final year project, achieving 90%
          prediction accuracy, and developed 15+ web applications through
          freelance projects. I’m eager to contribute my skills to innovative
          projects and grow as a MERN stack developer.
        </p>
      </div>
      <div className="about-right">
        <img src={img} alt="Ali Khalil" />
      </div>
    </section>
  );
};

export default About;
