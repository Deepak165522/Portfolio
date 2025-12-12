import React from "react";
import "../styles/about.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2>About Me</h2>
        <p>
          I am a B.Tech student at Bennett University (CGPA: 8.64) focusing on full-stack development and
          machine learning. My projects include real-time chat apps, deepfake detection models, and interactive browser games.
        </p>
        <ul className="about__list">
          <li><strong>Education:</strong> Bennett University — B.Tech CSE (2022–2026). :contentReference[oaicite:1]{index=1}</li>
          <li><strong>Interests:</strong> Computer Vision, Real-time Systems, Scalable Web Apps</li>
          <li><strong>Tools:</strong> React, Node.js, MongoDB, TensorFlow, OpenCV, Socket.io</li>
        </ul>
      </div>
    </section>
  );
}
