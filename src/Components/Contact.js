import React from "react";
import '../css/style.css';

const Contact = () => {
  return (
   <div>
   <section className="contact">
      <h1>Contact</h1>
      <div className="contact-container">
        <div className="contact-left">
          <div className="info-card">
            <h3>Get in touch</h3>
            <div className="contact-quote">
              
              <p><i className="fa-solid fa-message"></i> Fell free to contact me I'm always there for you</p>  
            </div>
            <div className="email">
            <i className="fa-solid fa-envelope"></i>
            ak126pk@gmail.com</div>
            <div className="phone">
            <i className="fa-solid fa-phone"></i>
            +92 306 043245</div>
            <div className="info-social">
              <a href="https://www.linkedin.com/in/ali-khalil-753469285/"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://www.linkedin.com/in/ali-khalil-753469285/"><i className="fa-brands fa-github"></i></a>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <div className="form-container">
            <form action="" className="form">
              <h2>Contact me</h2>
              <label for="name">Name</label>
              <input type="text" className="form-input" id="name"/>
              <label for="email">Email</label>
              <input type="text" className="form-input" id="email"/>
              <label for="subject">Subject</label>
              <input type="text" className="form-input" id="subject"/>
              <label for="textarea">Message</label>
              <textarea type="text" rows="4" className="form-input" id="textarea"> </textarea>
              <button type="button" value="Submit" className="submitbtn">Submit <i className="fa-regular fa-paper-plane"></i></button> 
            </form>
          </div>
        </div>
      </div>
    </section>
    <footer className="footer">
      <p>Ali Khalil | All Right Reserved © 2024</p>
    </footer>
   </div>
  );
};

export default Contact;
