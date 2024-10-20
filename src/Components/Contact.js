import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <h1 className="contact-heading">Contact with Me</h1>
      <div className="contact-content">
        <div className="contact-form-container">
          <form className="contact-form">
            <div className="form-field">
              <input type="text" placeholder=" Name" required />
            </div>
            <div className="form-field">
              <input type="email" placeholder=" Email" required />
            </div>
            <div className="form-field">
              <input type="email" placeholder="Subject" required />
            </div>
            <div className="form-field">
              <textarea placeholder="Message" required />
            </div>
            <button type="submit" className="submit-button">
              Send Message <i className="fas fa-paper-plane" />
            </button>
          </form>
        </div>
        <div className="contact-info">
          <p>
            <i
              style={{
                border: "2px solid #fcd34d",

                borderRadius: "80px",
                marginRight: "10px",
                padding: "7px",
              }}
              className="fas fa-paper-plane"
            />{" "}
            ak126pk@gmail.com
          </p>
          <p>
            <i
              style={{
                border: "2px solid #fcd34d",

                borderRadius: "80px",
                marginRight: "10px",
                padding: "7px",
              }}
              className="fas fa-phone icon "
            />
            0306-0435245
            <span
              style={{
                color: "#0a0f1b",
              }}
            >
              contac
            </span>
          </p>
          <p>
            <i
              style={{
                border: "2px solid #fcd34d",

                borderRadius: "80px",
                marginRight: "10px",
                padding: "7px",
              }}
              className="fas fa-location-dot icon"
            />
            Mian Channu Pakistan
          </p>
          <div className="social-icons">
            
            <a href="https://www.linkedin.com/in/ali-khalil-753469285/" className="icon-link">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/AliKhalil28" className="icon-link">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>

      <footer className="footer">
        <hr />
        <div className="left">© Developer Portfolio by Ali Khalil</div>
      </footer>
    </div>
  );
};

export default Contact;
