import React from "react";
import "../styles/hero.css";
import profileImg from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__content">
        <div className="hero__text">
          <h1>Deepak Kumar</h1>
          <p className="hero__title">B.Tech Computer Science (Cyber Security) — Full Stack & ML</p>
          <p className="hero__desc">
            I build scalable web apps and machine learning solutions. I worked on real-time chat systems,
            deepfake detection models, and browser-based games. (See projects below.)
          </p>
          <div className="hero__actions">
            <a className="btn" href="#projects">View Projects</a>
            <a className="btn btn--outline" href="/resume.pdf" target="_blank" rel="noreferrer">Download Resume</a>
          </div>
        </div>
        <div className="hero__image">
          <img src={profileImg} alt="Deepak Kumar" />
        </div>
      </div>
    </section>
  );
}
