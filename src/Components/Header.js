import React, { useEffect, useState } from "react";
import "../css/style.css";

export default function Header() {
  const [text, setText] = useState("");
  const fullText = "Full Stack Developer";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      index++;
      setText(fullText.slice(0, index));

      if (index === fullText.length) {
        clearInterval(typingInterval);
      }
    }, 130); // Adjust typing speed as needed

    return () => clearInterval(typingInterval);
  }, []);

  const handleButtonClick = () => {
    window.open(
      "https://drive.google.com/file/d/1m0PjNJtrCi8lCrOR0DTir5vhhhqeLF_6/view?usp=sharing",
      "_blank"
    );
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:alikhalil.webdev@gmail.com";
  };

  return (
    <section className="header" id="homesec">
      <h1>Hi, I'm Ali Khalil, A passionate </h1>
      <h2>
        {text}
        <span className="cursor">|</span>
      </h2>
      <div className="btns">
        <button className="btn" onClick={handleEmailClick}>
          Get in Touch <i className="fa-regular fa-paper-plane"></i>
        </button>

        <button onClick={handleButtonClick} className="btn">
          Resume <i className="fa-solid fa-circle-arrow-down"></i>
        </button>
      </div>

      <div className="socail-links">
        <a href="https://www.linkedin.com/in/ali-khalil-753469285/">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/AliKhalil28">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </section>
  );
}
