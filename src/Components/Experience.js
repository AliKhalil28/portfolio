import React from "react";
import "../css/style.css";

const experiences = [
  {
    id: 1,
    title: "Software Engineer (MERN) - ",
    company: "Amentotech",
    date: "July 2025 - Present",
    description:
      "Developing and maintaining web applications using MERN as Software Engineer Intern.",
  },
  {
    id: 2,
    title: "IT Specialist - ",
    company: "Intersoft Lahore (Remote)",
    date: "Dec 2022 - Mar 2025",
    description: "Academic Services and student level final year projects.",
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
    <section className="experience" id="expsec">
      <h1>Experience</h1>

      <div className="ex-card-body">
        {experiences.map((exp) => (
          <div className="ex-card" key={exp.id}>
            <div className="upper-sec">
              <div className="ex-left-sec">
                <i className="fa fa-user" aria-hidden="true"></i>
              </div>
              <div className="ex-right-sec">
                <p>{exp.date}</p>
                <h4>
                  {exp.title} {exp.company}
                </h4>
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
