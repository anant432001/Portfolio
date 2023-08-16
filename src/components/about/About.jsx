import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { SiGooglescholar } from "react-icons/si";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Internship</h5>
              <small>Standard Charted GBS</small>
            </article>

            <article className="about__card">
              <SiGooglescholar className="about__icon" />
              <h5>Education</h5>
              <small>IIT Kharagpur</small>
            </article>
          </div>

          <p>
            <ul>
              <li>
                Hello, I am Anant Pandey, a highly motivated and skilled
                software engineer with a strong academic background and a
                passion for building innovative solutions.
              </li>
              <li>
                Proficient in various programming languages such as C, C++,
                Java, and Python. I have developed a diverse skill set that
                spans across frameworks like Spring Boot, React JS, Django
                RestAPI, and data manipulation tools.
              </li>
              <li>
                My internship experience as a Software Development Engineer at
                Standard Chartered showcased my expertise in utilizing Java and
                Spring Boot for unit testing automation.
              </li>
              <li>
                My academic achievements, leadership roles, and problem-solving
                acumen further reinforce my commitment to excellence. I thrive
                in collaborative environments and look forward to leveraging my
                skills and experiences to drive innovation and success in any
                software engineering role.
              </li>
            </ul>
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
