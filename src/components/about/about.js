import React from "react";
import "./about.css";
import Framework from "../../assets/framwork_photo.avif";
import { GiSkills } from "react-icons/gi";
import { TbCertificate } from "react-icons/tb";
import { BiBookReader } from "react-icons/bi";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Framework} alt="framework photo"></img>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GiSkills className="tools__icon" />
              <h5>Tool Kit</h5>
              <small>MERN CSS HTML JAVASCRIPT BOOTSTRAP</small>
            </article>

            <article className="about__card">
              <TbCertificate className="cert__icon" />
              <h5>Software Engineer</h5>
              <small>PerScholas Alumni</small>
            </article>

            <article className="about__card">
              <BiBookReader className="portfolio__icon" />
              <h5>Design Stack</h5>
              <small>Figma InDesign Photoshop Illustrator</small>
            </article>
          </div>
          <p>
            I am a Freelance UI/UX Designer and Full Stack Developer. I am a
            fanatic for artistic design and branding. I studied graphic design
            at Full Sail University, then went on to earn a certificate for
            software engineering at Perscholas.
          </p>
          <a href="#contact" className="btn btn-primary">
            Work Together
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
