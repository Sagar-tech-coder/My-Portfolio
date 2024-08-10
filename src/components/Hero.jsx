import "./Hero.css";
import Me from "../assets/Me.png";
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
          <div className="about-desc">
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
          </div>
        </div>
        {/* Tools and Technology */}
        <div className="tools-main">
          <div className="tools-head">Tools and Technology 🚀</div>
        </div>
      </section>
    </>
  );
};

export default Hero;
