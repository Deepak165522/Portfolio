import React from "react";
import LeftProfile from "./components/LeftProfile";
import RightPanel from "./components/RightPanel";

export default function App() {
  return (
    <div className="app">
      <div className="app__container">
        <LeftProfile />
        <RightPanel />
      </div>
    </div>
  );
}
