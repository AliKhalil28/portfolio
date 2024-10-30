import React, { useState } from "react";
import '../css/style.css';

export default function Header() {
  

  return (
    <section class="header">
        <h1>Hi, I'm Ali Khalil, A passionate </h1>
        <h2>Full Stack Developer</h2>
        <div class="btns">
            <button class="btn">Get in Touch <i class="fa-regular fa-paper-plane"></i></button>
            <button class="btn">Resume <i class="fa-solid fa-circle-arrow-down"></i></button>
            

        </div>
        
        <div class="socail-links">
            <a href="https://www.linkedin.com/in/ali-khalil-753469285/"><i class="fa-brands fa-linkedin"></i></a>
            <a href="https://www.linkedin.com/in/ali-khalil-753469285/"><i class="fa-brands fa-github"></i></a>
            
        </div>
      </section>
  );
}

