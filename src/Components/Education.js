import React from "react";

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
    title: "Intermediate",
    institution: "Aspire College, Mian Channu",
    date: "2018 - 2020",
    description: "Passed with distinction in Engineering stream.",
  },
  {
    id: 3,
    title: "High School",
    institution: "Divisional Public School",
    date: "2016 - 2018",
    description: "Passed with distinction in Science stream.",
  },
];

const Education = () => {
  const sectionStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "0 7rem",
    backgroundColor: "#0a0f1b",
    color: "#fff",
    gap: "10rem",
    flexWrap: "wrap",
    marginTop: "4%",
    marginBottom: "5%",
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
    gap: "10px",
    alignItems: "flex-start",
    width: "100%",
    maxWidth: "600px",
  };

  const cardStyle = {
    backgroundColor: "transparent",
    borderRadius: "12px",
    border: "1px solid #fcd34d",
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
    marginBottom: "0.1rem",
  };

  const descriptionStyle = {
    fontSize: "15px",
    color: "#aaa",
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
        flex-direction: column; /* Stack elements vertically on smaller screens */
        align-items: center; /* Center elements */
      }

      

      .card {
        max-width: 90vw; /* Adjust card width on mobile */
      }
    }
  `;

  styleSheet.insertRule(mediaQueries, styleSheet.cssRules.length);

  return (
    <section id="education" style={sectionStyle}>
      {/* Image on the left */}
      

      <div style={{ width: "100%", display : "flex", flexDirection: "column", alignItems: "center"
       }}>
        <h2 style={headingStyle}>Education</h2>
        <div style={containerStyle}>
          {educationData.map((edu) => (
            <div key={edu.id} style={cardStyle} className="card">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "0.5rem", // Reduced margin inside the card
                }}
              >
                <i className="fas fa-graduation-cap" style={iconStyle} />{" "}
                {/* Education icon */}
                <div>
                  <p style={dateStyle}>{edu.date}</p>
                  <h3 style={titleStyle}>{edu.title}</h3>
                  <p style={{ color: "#fcd34d" }}>{edu.institution}</p>
                </div>
              </div>
              <p style={descriptionStyle}>{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
