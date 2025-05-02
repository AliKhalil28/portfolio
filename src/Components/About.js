import React from "react";
import img from "../Assets/image.png";
import "../css/style.css";

const About = () => {
  return (
    <section className="about" id="aboutsec">
      <div className="about-left">
        <h1>Personal Profile</h1>
        <p>
          Medalist BSIT Graduate (3.52 CGPA) with a solid foundation in PHP and
          web development, complemented by expertise in MERN stack technologies
          (React, Node.js, MongoDB). Developed 15+ web applications, including a
          PHP-based backend for a Medicine Recommendation System with 90%
          prediction accuracy. Work-passionate and skilled in building scalable
          server-side solutions, eager to excel as a Senior PHP Developer at
          Intellectual Bunch Ltd.
        </p>
      </div>
      <div className="about-right">
        <img src={img} alt="Ali Khalil" />
      </div>
    </section>
  );
};

export default About;
