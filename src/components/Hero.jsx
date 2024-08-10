import "./Hero.css";
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
// import allskills from "../assets/allskills.png";
// import TicTac from "../assets/TicTac.png";
// import EcoLabs from "../assets/EcoLabs.png";
// import cal from "../assets/cal.png";
// import Arrow from "../assets/Arrow.png";
// import { Cursor, Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <>
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
          I'm a {""}
          <span>{/* <Typewriter /> */}</span>
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
          <div class="tools-grid">
            <div class="box" id="box1">
              <img src={java} alt="" />
              <span>JAVA</span>
            </div>
            <div class="box" id="box2">
              <img src={html} alt="" /> <span>HTML</span>
            </div>
            <div class="box" id="box3">
              <img src={css} alt="" /> <span>CSS</span>
            </div>
            <div class="box" id="box4">
              <img src={sass} alt="" /> <span>Sass</span>
            </div>
            <div class="box" id="box5">
              <img src={js} alt="" /> <span>JavaScript</span>
            </div>
            <div class="box" id="box6">
              <img src={tailwind} alt="" />
              <span>Tailwind CSS</span>
            </div>
            <div class="box" id="box7">
              <img src={react} alt="" />
              <span>React.js</span>
            </div>
            <div class="box" id="box8">
              <img src={mysql} alt="" /> <span>MySQL</span>
            </div>
            <div class="box" id="box9">
              <img src={git} alt="" /> <span>Git</span>
            </div>
            <div class="box" id="box10">
              <img src={github} alt="" /> <span>GitHub</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
