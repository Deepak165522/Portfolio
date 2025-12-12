import React from "react";
import "../../styles/markdown.css";

export default function ContactTab() {
  return (
    <div className="md">
      <h2 className="md__title">📬 Contact</h2>
      <p className="md__text">Email: <a href="mailto:deepakkumar165522@gmail.com">deepakkumar165522@gmail.com</a></p>
      <p className="md__text">GitHub: <a href="https://github.com/">github.com/yourusername</a></p>
      <p className="md__text">LinkedIn: <a href="https://www.linkedin.com/">linkedin.com/in/yourprofile</a></p>
    </div>
  );
}
