import React from "react";
import "../styles/tabs.css";

export default function Tabs({ tabs, active, onChange }) {
  return (
    <div className="tabs" role="tablist">
      {tabs.map((t) => (
        <button
          key={t.id}
          className={`tab ${active === t.id ? "tab--active" : ""}`}
          onClick={() => onChange(t.id)}
          role="tab"
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
