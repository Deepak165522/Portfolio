import React from "react";
import "../../styles/markdown.css";

export default function ProjectsTab() {
  const projects = [
    {
      title: "NashApp — Real-Time Chat Application",
      desc: "React.js, Node.js, Socket.io, MongoDB, Cloudinary. Real-time messaging, typing indicators, media sharing, JWT auth."
    },
    {
      title: "DeepFake Detection",
      desc: "CNN + RNN (GRU) model using TensorFlow/Keras and OpenCV for deepfake detection; real-time frame processing. ~85% sample accuracy."
    },
    {
      title: "Cravix Game",
      desc: "Browser-based game built with HTML/CSS/JavaScript and CSS 3D animations; interactive levels & scoring."
    },
    {
      title: "Heart Rate Variability Using PPG (Research)",
      desc: "PPG signal analysis using 1D-CNN & Random Forest to study myocardial infarction indicators."
    }
  ];

  return (
    <div className="md">
      <h2 className="md__title">📁 Projects</h2>
      <div className="md__projects">
        {projects.map((p, idx) => (
          <div className="md__project" key={idx}>
            <h4 className="md__project-title">{p.title}</h4>
            <p className="md__text">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
