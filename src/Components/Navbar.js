import React from "react";
import "../css/style.css";

const Navbar = () => {
  // const scrollToSection = (id) => {
  //   const section = document.getElementById(id);
  //   if (section) {
  //     section.scrollIntoView({ behavior: "smooth" });
  //   }
  // };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container-fluid d-flex">
        <a className="navbar-brand me-auto" href="#homesec">
          Ali Khalil
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
              <a className="nav-link" aria-current="page" href="#homesec">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#aboutsec">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skillsec">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#expsec">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#edusec">
                Education
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#prosec">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#consec">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
