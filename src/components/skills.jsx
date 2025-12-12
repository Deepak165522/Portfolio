import React from "react";
import "../styles/skills.css";

const skillGroups = [
  { title: "Languages", items: ["Python", "JavaScript", "C++", "Java", "SQL"] },
  { title: "Frontend", items: ["React.js", "HTML", "CSS", "Tailwind CSS"] },
  { title: "Backend/DB", items: ["Node.js", "Express", "MongoDB", "Mongoose"] },
  { title: "AI/ML", items: ["TensorFlow/Keras", "CNN", "RNN (GRU)", "OpenCV"] }
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills__grid">
          {skillGroups.map((g) => (
            <div key={g.title} className="skills__card">
              <h3>{g.title}</h3>
              <ul>
                {g.items.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
