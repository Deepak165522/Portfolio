import React from "react";
import "../../styles/markdown.css";

export default function ContributionTab() {
  return (
    <div className="md">
      <h2 className="md__title">⚙️ Contribution</h2>
      <p className="md__text">This area lists contributions to open-source projects, community posts, or links to portfolio additions.</p>

      <h3 className="md__subtitle">How to contribute</h3>
      <ol className="md__list">
        <li>Fork the repo</li>
        <li>Create a feature branch (git checkout -b feature/my-feature)</li>
        <li>Commit your changes and push</li>
        <li>Open a Pull Request</li>
      </ol>
    </div>
  );
}
