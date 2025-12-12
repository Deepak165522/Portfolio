import React from "react";
import "../styles/leftProfile.css";
import profile from "../assets/profile.jpg";

export default function LeftProfile() {
  return (
    <aside className="left">
      <div className="left__card">
        <img src={profile} alt="Deepak Kumar" className="left__avatar" />
        <h2 className="left__name">Deepak Kumar</h2>
        <p className="left__role">Full stack & ML Engineer</p>
        <p className="left__location">Bennett University — Greater Noida, India</p>

        <p className="left__summary">
          Tech-savvy Full Stack & ML Developer with a passion for blending innovation and functionality.
          Experienced in web and ML projects: real-time chat apps, deepfake detection, and interactive browser games.
        </p>

        <div className="left__terminal">
          <div className="terminal__line">
            <span className="terminal__prompt">$</span> <span>./gradm.build</span>
          </div>
          <div className="terminal__line">🚀 Setting up Android environment...</div>
          <div className="terminal__line">📱 Device connected successfully.</div>
          <div className="terminal__line">✉️ Standing by for your contact...</div>
        </div>

        <div className="left__social">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="icon icon--large"> 
            <svg viewBox="0 0 24 24" className="icon__svg" aria-hidden="true"><path fill="currentColor" d="M12 .5C5.7.5.9 5.3.9 11.6c0 4.7 3 8.7 7.2 10.1.5.1.7-.2.7-.5v-1.8c-2.9.6-3.6-1.4-3.6-1.4-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.5.9 1.5.9.9 1.6 2.3 1.1 2.9.8.1-.6.4-1.1.7-1.4-2.4-.3-4.9-1.2-4.9-5.4 0-1.2.4-2.2 1-3-.1-.3-.4-1.5.1-3 0 0 .9-.3 3 .1.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.1-.5 3-.1 3-.1.5 1.5.2 2.7.1 3 .6.8 1 1.8 1 3 0 4.3-2.5 5.1-4.9 5.4.4.3.8 1 .8 2v3c0 .3.2.6.7.5 4.2-1.4 7.2-5.4 7.2-10.1C23 5.3 18.2.5 12 .5z"></path></svg>
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="icon icon--large">
            <svg viewBox="0 0 24 24" className="icon__svg" aria-hidden="true"><path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.13 4.98 3.5zM.22 8H4.78V24H.22zM8.94 8H13.2v2.2h.1c.6-1.1 2-2.2 4.1-2.2 4.4 0 5.2 2.8 5.2 6.5V24H16V15.4c0-2.1 0-4.8-3-4.8-3 0-3.5 2.4-3.5 4.6V24H8.94z"></path></svg>
          </a>
          <a href="mailto:deepakkumar165522@gmail.com" className="icon icon--large">
            <svg viewBox="0 0 24 24" className="icon__svg" aria-hidden="true"><path fill="currentColor" d="M12 13.5L.6 4.5v15A2.5 2.5 0 0 0 3.1 22h17.8A2.5 2.5 0 0 0 23.5 19.5v-15L12 13.5zM12 11 23.5 2.5H.5L12 11z"></path></svg>
          </a>
        </div>
      </div>
    </aside>
  );
}
