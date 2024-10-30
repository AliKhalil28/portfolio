import React from "react";
import '../css/style.css';

const experiences = [
  {
    id: 1,
    title: "IT Specialist - ",
    company: "Intersoft Lahore (Remote)",
    date: "Dec 2022 - Present",
    description: "Academic Services and student level final year projects",
  },
  {
    id: 2,
    title: "SELF EMPLOYED",
    company: "(Freelancer)",
    date: "Nov 2021 - Present",
    description: "Creating and building projects daily for clients.",
  },
];

const Experience = () => {
  return (
    <section className="experience">
      <h1>Experience</h1>
      
        <div className="ex-card-body">
          {experiences.map((exp) => (
          <div className="ex-card"  key={exp.id}>
            <div className="upper-sec">
              <div className="ex-left-sec">
                <i className="fa fa-user" aria-hidden="true"></i>
              </div>
              <div className="ex-right-sec">
                <p>{exp.date}</p>
                <h4>{exp.title}  {exp.company}</h4>
              </div>
            </div>
            <div className="lower-sec">
              <p>{exp.description}</p>
            </div>
          </div>
         ))}
        </div>
   
    </section>
  );
};

export default Experience;
