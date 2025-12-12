import React from "react";
import "../../styles/markdown.css";

export default function AboutTab() {
  return (
    <div className="md">
      <h2 className="md__title">💡 About</h2>

      <p className="md__text">
        I am a B.Tech student at Bennett University (CGPA: 8.64) focusing on full-stack development and
        machine learning. My projects include real-time chat apps, deepfake detection models, and
        interactive browser games.
      </p>

      <h3 className="md__subtitle">🔧 Tech Stack</h3>
      <ul className="md__list">
        <li><strong>Frontend:</strong> React.js, HTML, CSS, Tailwind CSS</li>
        <li><strong>Backend:</strong> Node.js, Express.js</li>
        <li><strong>DB:</strong> MongoDB, SQL</li>
        <li><strong>AI/ML:</strong> TensorFlow/Keras, OpenCV, CNN, RNN (GRU)</li>
        <li><strong>Tools:</strong> Git, GitHub, Cloudinary, Vercel</li>
      </ul>

      <h3 className="md__subtitle">📍 Education</h3>
      <p className="md__text">
        Bachelor of Technology — Computer Science and Engineering (2022–2026), Bennett University.
      </p>
    </div>
  );
}
