import React from "react";
import certificate1 from "../Assets/certificates/Web1.png";
import certificate2 from "../Assets/certificates/Web2.png";
import certificate3 from "../Assets/certificates/Web3.png";

// Project data
const Certificates = [
  {
    id: 1,
    title: "Web Developement",
    from: "Johns Hopkins University",
    description:
      "HTML, CSS, and Javascript for Web Developers an online non-credit course authorized by Johns Hopkins University and offered through Coursera.",
    image: certificate1,
    certificate: certificate1,
    verify:
      "https://www.coursera.org/account/accomplishments/verify/SGEZFGH2SHAN",
  },
  {
    id: 2,
    title: "Web Developement",
    from: "IBM",
    description:
      "Introduction to Web Development with HTML, CSS, JavaScript  an online non-credit course authorized by IBM Skills Network and offered through  Coursera.",
    image: certificate2,
    certificate: certificate2,
    verify:
      "https://www.coursera.org/account/accomplishments/verify/PBV84KNB3LRB",
  },
  {
    id: 3,
    title: "React JS",
    from: "IBM",
    description:
      "Developing Front-End Apps with React JS for Frontend  an online non-credit course authorized by IBM Skills Network and offered through  Coursera.",
    image: certificate3,
    certificate: certificate3,
    verify:
      "https://www.coursera.org/account/accomplishments/verify/VGESPNQJS4VC",
  },
];

const Certificate = () => {
  return (
    <section className="projects" id="certsec">
      <h1>Certificates</h1>
      <div className="card-body">
        <div className="card">
          {Certificates.map((Certificates) => (
            <div key={Certificates.id} className="project-item">
              <img
                src={Certificates.image}
                alt={`${Certificates.title} screenshot`}
              />
              <h3>{Certificates.title}</h3>
              <h5>{Certificates.from}</h5>
              <p>{Certificates.description}</p>
              <div className="pro-bottom">
                <div className="pro-bottom-left">
                  <a
                    href={Certificates.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark"
                  >
                    <i className="fa fa-eye" aria-hidden="true"></i>
                  </a>
                </div>
                <div className="pro-bottom-right">
                  <a
                    href={Certificates.verify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark"
                  >
                    <i className="fa-solid fa-certificate"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificate;
