import React from "react";
import "../styles/contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Contact</h2>
        <p>If you'd like to reach out — email me at <a href="mailto:deepakkumar165522@gmail.com">deepakkumar165522@gmail.com</a> or connect on GitHub / LinkedIn.</p>
        <div className="contact__links">
          <a href="mailto:deepakkumar165522@gmail.com" className="btn">Email Me</a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="btn btn--outline">GitHub</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="btn btn--outline">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
