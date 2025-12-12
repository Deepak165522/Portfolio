import React from "react";
import "../styles/projects.css";

export default function Projects() {

  const projects = [
    {
      id: 1,
      title: "NashApp — Real-Time Chat Application",
      description:
        "A real-time chat app built using React.js, Node.js, Express.js, MongoDB, Socket.io, and Cloudinary. Features include instant messaging, typing indicators, media sharing, JWT authentication, and more.",
      link: "https://github.com/yourusername/nashapp",
      image: "/src/assets/project-placeholder.png"
    },
    {
      id: 2,
      title: "DeepFake Detection",
      description:
        "A Deep Learning project using CNN + RNN (GRU) to detect deepfake images/videos. Achieved 85% accuracy. Includes face extraction, frame preprocessing, and real-time predictions using OpenCV.",
      link: "https://github.com/yourusername/deepfake-detection",
      image: "/src/assets/project-placeholder.png"
    },
    {
      id: 3,
      title: "Cravix Game",
      description:
        "A browser-based game created with HTML, CSS, JavaScript, and CSS 3D animations. Includes responsive gameplay, animated assets, and face-capture flows.",
      link: "https://github.com/yourusername/cravix",
      image: "/src/assets/project-placeholder.png"
    },
    {
      id: 4,
      title: "Heart Rate Variability Using PPG (Research)",
      description:
        "ML/DL project analyzing PPG signals using 1D-CNN & Random Forest to identify myocardial infarction indicators. Includes signal processing, feature extraction, model training & evaluation.",
      link: "https://github.com/yourusername/ppg-hrv-analysis",
      image: "/src/assets/project-placeholder.png"
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects__grid">
          {projects.map((p) => (
            <article key={p.id} className="project">
              <img src={p.image} alt={p.title} className="project__img" />
              <div className="project__body">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="project__actions">
                  <a href={p.link} target="_blank" rel="noreferrer">
                    View Repo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
