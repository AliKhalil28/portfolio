import React, { useState } from "react";

export default function Header() {
  const [zoom, setZoom] = useState({ contact: false, resume: false });

  const handleZoom = (button) => {
    setZoom({ ...zoom, [button]: !zoom[button] });
  };

  return (
    <section id="header" style={styles.section}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Hi, I'm Ali Khalil, a Self Taught</h1>
        <h2 style={styles.description}>Full Stack Developer</h2>

        {/* Buttons Part Start */}
        <div style={styles.buttonContainer}>
          <button
            style={{
              ...styles.button,
              transform: zoom.contact ? "scale(1.1)" : "scale(1)",
            }}
            onMouseEnter={() => handleZoom("contact")}
            onClick={() => window.location.href = "mailto:ak126pk@gmail.com"}
          >
            Contact Me <i className="fas fa-paper-plane" />
          </button>
          <button
            style={{
              ...styles.button,
              transform: zoom.resume ? "scale(1.1)" : "scale(1)",
            }}
            onMouseEnter={() => handleZoom("resume")}
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1vg3FVg4Mzp-MUma_c5Xphob-epBnfJTF/view",
                "_blank"
              )
            }
          >
            Resume <i className="fas fa-circle-down" />
          </button>
        </div>
        {/* Buttons Part End */}

        {/* Social icons Start */}
        <div style={styles.socialIcons}>
          <a
            href="https://www.linkedin.com/in/ali-khalil-753469285/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin" style={styles.icon}></i>
          </a>
          <a
            href="https://github.com/AliKhalil28"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github" style={styles.icon}></i>
          </a>
          
        </div>
        {/* Social icons End */}

        <div style={styles.arrow}>
          <i className="fas fa-angle-down" />
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "50px 0",
    backgroundColor: "#0a0f1b",
    textAlign: "center",
    fontFamily: "Anton, sans-serif",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  heading: {
    marginTop: "28px",
    fontSize: "2.5rem",
    color: "#fcd34d",
  },
  description: {
    fontSize: "2.1rem",
    marginTop: "20px",
    color: "#666",
  },
  buttonContainer: {
    marginTop: "23px",
    marginTop: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1.2rem",
    border: "2px solid #fcd34d",
    color: "#666",
    borderRadius: "40px",
    backgroundColor: "transparent",
    margin: "0 10px",
    cursor: "pointer",
    transition: "transform 0.3s, border-color 1s",
  },
  arrow: {
    marginTop: "30px",
    fontSize: "2rem",
    color: "#fcd34d",
    cursor: "pointer",
  },
  socialIcons: {
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  icon: {
    fontSize: "2rem",
    color: "#fcd34d",
    transition: "transform 0.3s",
    cursor: "pointer",
  },
};
