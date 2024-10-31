import React, { useEffect, useState } from "react";
import '../css/style.css';

export default function Header() {

  const [text, setText] = useState('');
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

    return () => clearInterval(typingInterval); // Cleanup on unmount
  }, []);
  
  const handleButtonClick = () => {
    window.open("https://drive.google.com/file/d/1vg3FVg4Mzp-MUma_c5Xphob-epBnfJTF/view?usp=sharing", "_blank");
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:ak126pk@gmail.com";
  };

  return (
    <section class="header" id="homesec">
        <h1>Hi, I'm Ali Khalil, A passionate </h1>
        <h2>{text}<span className="cursor">|</span></h2>
        <div class="btns">
            <button class="btn" onClick={handleEmailClick} >Get in Touch <i class="fa-regular fa-paper-plane"></i></button>

            <button onClick={handleButtonClick} class="btn">Resume <i class="fa-solid fa-circle-arrow-down"></i></button>
            

        </div>
        
        <div class="socail-links">
            <a href="https://www.linkedin.com/in/ali-khalil-753469285/"><i class="fa-brands fa-linkedin"></i></a>
            <a href="https://www.linkedin.com/in/ali-khalil-753469285/"><i class="fa-brands fa-github"></i></a>
            
        </div>
      </section>
  );
}

