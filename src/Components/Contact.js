import React, { useState } from "react";
import '../css/style.css';

const scriptURL = 'https://script.google.com/macros/s/AKfycbxTMUNXdeWZE-a-N66A9muMRuRRklhVDcMu-c2ErmYDUS4IQPQS0tdhUL41cHjQ0AhG/exec';



const Contact = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Subject: '',
    Description: ''
  });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); 
    setFormData({ 
      Name: '',
      Email: '',
      Subject: '',
      Description: ''
    });

    fetch(scriptURL, {
      method: 'POST',
      body: new URLSearchParams(formData),
    })
      .then(response => {
        setLoading(false); 
        if (response.ok) {
          setMessage('Form submitted successfully!');
        } else {
          throw new Error('Form submission failed');
        }
      })
      .catch(error => {
        setLoading(false);
        console.error('Error!', error.message);
        setMessage('An error occurred. Please try again.');
      });
  };

  
  return (
   <div>
   <section className="contact" id="consec">
      <h1>Contact me</h1>
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
            <form action="" className="form" onSubmit={handleSubmit} name="submit-to-google-sheet">
              <h2>Drop Me a Line</h2>
              <label for="name">Name</label>
              <input type="text" className="form-input" id="name" name="Name" value={formData.Name} onChange={handleChange} required/>
              <label for="email">Email</label>
              <input type="email" className="form-input" id="email" name="Email" value={formData.Email} onChange={handleChange} required/>
              <label for="subject">Subject</label>
              <input type="text" className="form-input" id="subject" name="Subject" value={formData.Subject} onChange={handleChange} required/>
              <label for="textarea">Message</label>
              <textarea type="text" rows="4" className="form-input" id="textarea" name="Description" value={formData.Description} onChange={handleChange} required> </textarea>
              <button type="submit" value="Submit" className="submitbtn">Submit <i className="fa-regular fa-paper-plane"></i></button> 
              <span></span>
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
