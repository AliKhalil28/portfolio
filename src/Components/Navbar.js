import React from "react";

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ fontFamily: "Roboto, sans-serif", backgroundColor: "#0a0f1b" }}
    >
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="#"
          style={{ color: "#fcd34d", fontWeight: "bolder" }}
        >
          ALI KHALIL
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link active "
                onClick={() => scrollToSection("header")}
                Link="/home"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                onClick={() => scrollToSection("about")}
                href="#about"
              >
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                href="#skills"
                onClick={() => scrollToSection("skills")}
              >
                SKILLS
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                href="#experience"
                onClick={() => scrollToSection("experience")}
              >
                EXPERIENCE
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                href="#education"
                onClick={() => scrollToSection("education")}
              >
                EDUCATION
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                href="#projects"
                onClick={() => scrollToSection("projects")}
              >
                PROJECTS
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                href="#contact"
                onClick={() => scrollToSection("contact")}
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
