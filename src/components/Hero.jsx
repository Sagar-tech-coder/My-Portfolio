import "./Hero.css";
import "./@media_query.css";
// import { Link, NavLink } from "react-router-dom";
import Me from "../assets/Me.png";
import java from "../assets/java.svg";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import sass from "../assets/sass.svg";
import js from "../assets/js.svg";
import tailwind from "../assets/tailwindcss.svg";
import react from "../assets/react.svg";
import mysql from "../assets/mysql.svg";
import git from "../assets/git.svg";
import github from "../assets/github.svg";
import allskills from "../assets/allskills.png";
import TicTac from "../assets/TicTac.png";
import EcoLabs from "../assets/EcoLabs.png";
import cal from "../assets/cal.png";
// import Arrow from "../assets/Arrow.png";
import { Cursor, Typewriter } from "react-simple-typewriter";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Hero = () => {
  return (
    <>
      {/* Header Section */}
      <section id="header">
        <div className="logo">&lt;&#47;Sagar&gt;</div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Lab</li>
        </ul>
      </section>
      <section id="hero">
        <div className="me-img">
          <img src={Me} alt="" />
          <div className="text-section">
            <div className="name">
              Hello, I'm <span>Sagar Patra</span>
            </div>
            <div className="designer">A Designer Who</div>
            <div className="book-text">
              Judge by a book by it's <span>cover</span>...
            </div>
            <div className="what-else-text">
              Because if the cover not impress you what else can?
            </div>
          </div>
          {/* <img src={Arrow} alt="" /> */}
        </div>
        {/* Auto Text */}
        <h1>
          I'm a{" "}
          <span className="type-writer">
            <Typewriter
              words={[
                "Front-end Engineer",
                "UI/UX Designer",
                "JavaScript Developer",
                "React.js Developer",
                "Web Developer",
              ]}
              loop={true}
              cursor
              cursorStyle=""
              typeSpeed={50}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </span>
          <Cursor />
        </h1>
        <div className="looking-text">
          Currently I'm looking for a Front-end role in IT Industry.
        </div>
      </section>
      {/* About Section */}
      <section id="about">
        {/* about me */}
        <div className="about-main">
          <div className="about-head">A Bit About Me 🚀</div>
          <p className="about-desc">
            I'm a final year student of Bachelor's in Computer Applicaton
            (B.C.A) from Techno India Institute of Technology (TiiT) Kolkata,
            West Bengal, India. And also a self-taught Front-end Developer with
            experience in designing new features from ideation to production,
            implementation of wireframes and design flows into high performance
            software applications. I take into consideration the user experience
            while writing reusable and efficient code. I passionately combine
            good design, technology, and innovation in all my projects, which I
            like to accompany from the first idea to release. Currently, I'm
            focused on the backend development.
          </p>
        </div>
        {/* Tools and Technology */}
        <div className="tools-main">
          <div className="tools-head">Tools and Technology 🚀</div>
          <p className="tools-desc">
            Using a combination of cutting-edge technologies and reliable
            open-source software I build user-focused, performant websites for
            smartphones, tablets, and desktops.
          </p>
          {/* tools icons */}
          <div className="tools-grid">
            <div className="box" id="box1">
              <img src={java} alt="" />
              <span>JAVA</span>
            </div>
            <div className="box" id="box2">
              <img src={html} alt="" /> <span>HTML</span>
            </div>
            <div className="box" id="box3">
              <img src={css} alt="" /> <span>CSS</span>
            </div>
            <div className="box" id="box4">
              <img src={sass} alt="" /> <span>Sass</span>
            </div>
            <div className="box" id="box5">
              <img src={js} alt="" /> <span>JavaScript</span>
            </div>
            <div className="box" id="box6">
              <img src={tailwind} alt="" />
              <span>Tailwind CSS</span>
            </div>
            <div className="box" id="box7">
              <img src={react} alt="" />
              <span>React.js</span>
            </div>
            <div className="box" id="box8">
              <img src={mysql} alt="" /> <span>MySQL</span>
            </div>
            <div className="box" id="box9">
              <img src={git} alt="" /> <span>Git</span>
            </div>
            <div className="box" id="box10">
              <img className="github" src={github} alt="" /> <span>GitHub</span>
            </div>
          </div>
        </div>
      </section>
      {/* Skills Image Section */}
      <section id="skills-img-main">
        {/* Skills Image */}
        <img src={allskills} alt="" className="skills-img" />
      </section>
      {/* Projects */}
      <section id="projects">
        {/* project 01 */}
        <div className="project-main">
          <div className="project-left">
            {/* featured project text */}
            <div className="featured-text">
              <a
                href="https://fascinating-pavlova-51f685.netlify.app/"
                className="view-project"
              >
                View Project
              </a>
            </div>
            {/* example project text */}
            <div className="example-text">EcoLabs Project</div>
            {/* prject desc */}
            <div className="project-desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
              recusandae nesciunt sint, laboriosam sit quasi hic expedita qui
              sapiente placeat! Iusto, minus! Quis sed pariatur culpa ipsa vitae
              exercitationem odio.
            </div>
          </div>
          <div className="project-right">
            <img src={EcoLabs} alt="" />
          </div>
        </div>
        {/* project 02 */}
        <div className="project-main-reves">
          <div className="project-left-reves">
            {/* featured project text */}
            <div className="featured-text-reves">
              <a
                href="https://taupe-licorice-6d6e68.netlify.app/"
                className="view-project"
              >
                View Project
              </a>
            </div>
            {/* example project text */}
            <div className="example-text-reves">TicTac Game Project</div>
            {/* prject desc */}
            <div className="project-desc-reves">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
              recusandae nesciunt sint, laboriosam sit quasi hic expedita qui
              sapiente placeat! Iusto, minus! Quis sed pariatur culpa ipsa vitae
              exercitationem odio.
            </div>
          </div>
          <div className="project-right-reves">
            <img src={TicTac} alt="" />
          </div>
        </div>
        {/* project 03 */}
        <div className="project-main">
          <div className="project-left">
            {/* featured project text */}
            <div className="featured-text">
              <a
                href="https://sagarcalculate.netlify.app/"
                className="view-project"
              >
                View Project
              </a>
            </div>
            {/* example project text */}
            <div className="example-text">Calculator Project</div>
            {/* prject desc */}
            <div className="project-desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
              recusandae nesciunt sint, laboriosam sit quasi hic expedita qui
              sapiente placeat! Iusto, minus! Quis sed pariatur culpa ipsa vitae
              exercitationem odio.
            </div>
          </div>
          <div className="project-right">
            <img src={cal} alt="" />
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact">
        <h3>Contact</h3>
        <p className="contact-desc">
          I'm currently looking to join a cross-functional team that values
          improving people's lives through accessible design. or have a project
          in mind? Let's connect.
        </p>
        {/* send me email */}
        <button>Send me Email</button>
        <div className="social-logos">
          {/* Instagram Logo */}
          <a href="https://www.instagram.com/sagarpatra948/?hl=en">
            <FaInstagramSquare className="logo-social" />
          </a>
          {/* Github Logo */}
          <a href="https://github.com/Sagar-tech-coder">
            <FaGithubSquare className="logo-social" />
          </a>
          {/* Linkedin Logo */}
          <a href="https://www.linkedin.com/in/thesagarpatra/">
            <FaLinkedin className="logo-social" />
          </a>
        </div>
      </section>
      {/* footer text center */}
      <div className="footer-text">
        Copyright © 2024 Designed by
        <a
          href="https://www.linkedin.com/in/thesagarpatra/"
          className="own-link"
        >
          {"  "}
          Sagar{"  "}
        </a>
        | All rights reserved
      </div>
    </>
  );
};

export default Hero;
