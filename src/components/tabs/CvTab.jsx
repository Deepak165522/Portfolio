import React from "react";
import "../../styles/markdown.css";

export default function CvTab() {
  return (
    <div className="md">
      <h2 className="md__title">📄 CV</h2>
      <p className="md__text">You can download my resume here:</p>
      <a className="md__link" href="/CV.pdf" target="_blank" rel="noreferrer">Download CV.pdf</a>
    </div>
  );
}
