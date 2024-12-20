import React from "react";
import "../css/style.css";

const educationData = [
  {
    id: 1,
    title: "Bachelor of Science in Information Technology",
    institution: "Government College University Faisalabad",
    date: "2020 - 2024",
    description:
      "Pursuing a degree focused on software development and data science.",
  },
  {
    id: 2,
    title: "Intermediate (F.Sc Pre-Engineering)",
    institution: "Aspire College, Mian Channu",
    date: "2018 - 2020",
    description: "Passed with distinction in Engineering stream.",
  },
  {
    id: 3,
    title: "High School (Metric - Computer Science)",
    institution: "Divisional Public School",
    date: "2016 - 2018",
    description: "Passed with distinction in Science stream.",
  },
];

const Education = () => {
  return (
    <section className="education" id="edusec">
      <h1>Education</h1>
      <div className="ex-card-body">
        {educationData.map((edu) => (
          <div className="ex-card" key={edu.id}>
            <div className="upper-sec">
              <div className="ex-left-sec">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
              <div className="ex-right-sec">
                <p>{edu.date}</p>
                <h4>{edu.title}</h4>
                <p>{edu.institution}</p>
              </div>
            </div>
            <div className="lower-sec">
              <p>{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
