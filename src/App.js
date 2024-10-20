import React from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Project from "./Components/Project";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";
import Education from "./Components/Education";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Project />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
