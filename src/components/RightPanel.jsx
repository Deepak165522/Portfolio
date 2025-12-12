import React, { useState } from "react";
import "../styles/rightPanel.css";
import Tabs from "./Tabs";
import AboutTab from "./tabs/AboutTab";
import ProjectsTab from "./tabs/ProjectsTab";
import ContributionTab from "./tabs/ContributionTab";
import ContactTab from "./tabs/ContactTab";
import CvTab from "./tabs/CvTab";

export default function RightPanel() {
  const [active, setActive] = useState("about.tsx");

  const tabs = [
    { id: "about.tsx", label: "about.tsx" },
    { id: "projects.md", label: "projects.md" },
    { id: "Contribution", label: "Contribution" },
    { id: "contact.online", label: "contact.online" },
    { id: "CV.pdf", label: "CV.pdf" }
  ];

  return (
    <main className="right">
      <div className="editor">
        <div className="editor__topbar">
          <Tabs tabs={tabs} active={active} onChange={setActive} />
          <a className="editor__source" href="https://github.com/" target="_blank" rel="noreferrer">Source Code</a>
        </div>
        <div className="editor__content">
          {active === "about.tsx" && <AboutTab />}
          {active === "projects.md" && <ProjectsTab />}
          {active === "Contribution" && <ContributionTab />}
          {active === "contact.online" && <ContactTab />}
          {active === "CV.pdf" && <CvTab />}
        </div>
      </div>
    </main>
  );
}
