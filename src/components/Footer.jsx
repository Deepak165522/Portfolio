import React from "react";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Deepak Kumar — Built with React + Vite</p>
      </div>
    </footer>
  );
}
