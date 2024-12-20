import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Project from "./Components/Project";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import LoadingBar from "react-top-loading-bar";

function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollTop / docHeight) * 100;

      setProgress(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <LoadingBar color="#A656F7" progress={progress} height={3} />
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
