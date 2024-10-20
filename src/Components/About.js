import React from "react";
import img from "../Assets/Img.png";

const About = () => {
  return (
    <section
      id="about"
      style={{
        backgroundColor: "#0a0f1b",
        color: "#fff",
        padding: "40px 20px",
        marginTop: "-50px",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <h2 style={{ color: "#fcd34d" }}>Personal Profile</h2>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
            A passionate IT professional with hands-on experience in various
            domains, including web development, machine learning, and
            software deployment. I developed a complete Medicine
            Recommendation system using Python Flask and React for my
            final year project. My experience spans freelancing and remote
            work, handling final-year student projects across basic-level
            domains such as web front-end, PHP back-end, MYSQL
            Database, Android, networking, OS, Git/GitHub, and deployment.
            I'm a quick learner, currently mastering the MERN stack to
            further expand my expertise.
            </p>
          </div>

          <div className="col-lg-6 col-md-12 text-center">
            <div>
              <img
                src={img}
                alt="Ali Khalil"
                style={{
                  width: "100%",
                  maxWidth: "250px",
                  borderRadius: "50%",
                  
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
