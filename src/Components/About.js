import React from "react";
import img from "../Assets/image.jpg";
import '../css/style.css';

const About = () => {
  return (
    <section className="about" id="aboutsec">
        <div className="about-left">
            <h1>Personal Profile</h1>
            <p>A passionate IT professional with hands-on experience in various domains, including web development, machine learning, and software deployment. I developed a complete Medicine Recommendation system using Python Flask and React for my final year project. My experience spans freelancing and remote work, handling final-year student projects across basic-level domains such as web front-end, PHP back-end, MYSQL Database, Android, networking, OS, Git/GitHub, and deployment. I'm a quick learner, currently mastering the MERN stack to further expand my expertise.</p>
        </div>
        <div className="about-right">
        <img src={img} alt="Ali Khalil"/>
        </div>
      </section>
  );
};

export default About;
